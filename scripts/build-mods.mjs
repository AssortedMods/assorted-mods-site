#!/usr/bin/env node
// Writes app/data/mods.json and public/logos from the sibling family repos, so the site lists the same
// families, mods, names, descriptions and download pages the mods themselves publish with.
//
//   yarn mods            regenerate the data and the logos
//   yarn mods --check    only report what is missing
//
// Each repo's root gradle.properties names the family and its mods (assorted_mods); each mod's own
// gradle.properties has its name, description and publishing ids. The mod with bundled_mods is the
// family's bundle. scripts/mods/overrides.json fills in what gradle.properties does not carry.
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { createCanvas, loadImage } from '@napi-rs/canvas'
import { modsRoot, siteRoot } from './recipes/config.mjs'

const checkOnly = process.argv.includes('--check')
const repos = ['AssortedCore', 'AssortedCuisine', 'AssortedDecor', 'AssortedMobs', 'AssortedStorage', 'AssortedTech', 'AssortedTools', 'AssortedUtil', 'AssortedWorld']
const dataFile = join(siteRoot, 'app', 'data', 'mods.json')
const logoDir = join(siteRoot, 'public', 'logos')
const logoSize = 256
const overrides = JSON.parse(readFileSync(join(siteRoot, 'scripts', 'mods', 'overrides.json'), 'utf8'))
const problems = []

function properties(file) {
  const out = {}
  if (!existsSync(file)) return out
  for (const line of readFileSync(file, 'utf8').split(/\r?\n/)) {
    const match = line.match(/^\s*([\w.]+)\s*=\s*(.*?)\s*$/)
    if (match && !line.trimStart().startsWith('#')) out[match[1]] = match[2]
  }
  return out
}

// "Assorted Throwing Spears" is shown as "Throwing Spears" under its family and lives at /tools/throwing-spears.
function shortName(name) {
  return name.replace(/^Assorted\s+/, '')
}

function slugOf(name) {
  return shortName(name).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

async function writeLogo(source, target) {
  if (!existsSync(source)) {
    problems.push(`no logo at ${source}`)
    return false
  }
  if (checkOnly) return true
  const image = await loadImage(source)
  const canvas = createCanvas(logoSize, logoSize)
  const context = canvas.getContext('2d')
  context.imageSmoothingQuality = 'high'
  context.drawImage(image, 0, 0, logoSize, logoSize)
  mkdirSync(dirname(target), { recursive: true })
  writeFileSync(target, await canvas.encode('webp', 88))
  return true
}

async function mod(repo, dir, familyKey) {
  const props = properties(join(modsRoot, repo, 'mods', dir, 'gradle.properties'))
  const extra = overrides.mods[props.mod_id] || {}
  const name = props.mod_name || dir
  const entry = {
    id: props.mod_id,
    dir,
    name,
    shortName: shortName(name),
    slug: extra.slug || slugOf(name),
    description: props.mod_description || '',
    curseforgeSlug: extra.curseforgeSlug || props.curseforge_slug || '',
    modrinthSlug: extra.modrinthSlug || props.modrinth_id || '',
    logo: `/logos/${props.mod_id}.webp`
  }
  if (!props.mod_id) problems.push(`${repo}/mods/${dir} has no mod_id`)
  if (!entry.description) problems.push(`${entry.id} has no description`)
  await writeLogo(join(modsRoot, repo, 'mods', dir, 'common', 'src', 'main', 'resources', 'logo.png'), join(logoDir, `${entry.id}.webp`))
  entry.route = `/${familyKey}/${entry.slug}`
  return entry
}

async function main() {
  if (!checkOnly) rmSync(logoDir, { recursive: true, force: true })
  const families = []
  for (const repo of repos) {
    const root = properties(join(modsRoot, repo, 'gradle.properties'))
    if (!root.assorted_mods) {
      problems.push(`${repo} lists no assorted_mods`)
      continue
    }
    const key = repo.replace(/^Assorted/, '').toLowerCase()
    const extra = overrides.families[key] || {}
    const family = {
      key,
      id: root.family_id,
      name: root.family_name || `Assorted ${repo.replace(/^Assorted/, '')}`,
      route: `/${key}`,
      github: `https://github.com/AssortedMods/${repo}`,
      description: extra.description || '',
      logo: '',
      bundle: null,
      parts: []
    }
    for (const dir of root.assorted_mods.split(',').map(s => s.trim()).filter(Boolean)) {
      const bundled = properties(join(modsRoot, repo, 'mods', dir, 'gradle.properties')).bundled_mods
      const entry = await mod(repo, dir, key)
      if (bundled) {
        entry.route = family.route
        family.bundle = entry
        family.description ||= entry.description
        family.logo = entry.logo
      }
      else {
        family.parts.push(entry)
      }
    }
    // A family with no bundle mod has no logo of its own in the repo, so overrides.json names one.
    if (!family.logo && extra.logo && await writeLogo(join(modsRoot, extra.logo), join(logoDir, `${family.id}.webp`))) {
      family.logo = `/logos/${family.id}.webp`
    }
    if (!family.description) problems.push(`${key} has no description`)
    if (!family.logo) problems.push(`${key} has no logo`)
    families.push(family)
  }

  // Every family needs Lib, so it gets its own page rather than a place among them.
  const libProps = properties(join(modsRoot, 'AssortedLib', 'gradle.properties'))
  const lib = {
    id: libProps.mod_id,
    dir: 'lib',
    name: libProps.mod_name,
    shortName: shortName(libProps.mod_name || ''),
    slug: 'lib',
    description: libProps.mod_description || '',
    curseforgeSlug: libProps.curseforge_slug || '',
    modrinthSlug: libProps.modrinth_id || '',
    logo: `/logos/${libProps.mod_id}.webp`,
    route: '/lib',
    github: 'https://github.com/AssortedMods/AssortedLib'
  }
  if (!lib.id) problems.push('AssortedLib has no mod_id')
  await writeLogo(join(modsRoot, 'AssortedLib', 'common', 'src', 'main', 'resources', 'logo.png'), join(logoDir, `${lib.id}.webp`))

  if (!checkOnly) {
    mkdirSync(dirname(dataFile), { recursive: true })
    writeFileSync(dataFile, JSON.stringify({ families, lib }, null, 2) + '\n')
  }
  const parts = families.reduce((n, f) => n + f.parts.length, 0)
  console.log(`${families.length} families, ${parts} mods`)
  if (problems.length) {
    console.log(`${problems.length} problem(s):`)
    for (const p of problems) console.log('  - ' + p)
    process.exitCode = 1
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
