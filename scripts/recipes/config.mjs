// Where the recipe exporter finds the mods and the game files it reads. Everything can be
// overridden with an environment variable so the script also runs on another checkout.
import { existsSync, readdirSync } from 'node:fs'
import { homedir } from 'node:os'
import { delimiter, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = fileURLToPath(new URL('.', import.meta.url))
export const siteRoot = resolve(here, '..', '..')

// The sibling mod checkouts. Each contributes its hand-written and datagen'd resources.
export const modsRoot = process.env.ASSORTED_MODS_ROOT || resolve(siteRoot, '..')
export const repos = ['AssortedLib', 'AssortedCore', 'AssortedCuisine', 'AssortedDecor', 'AssortedMobs', 'AssortedStorage', 'AssortedTech', 'AssortedTools', 'AssortedUtil', 'AssortedWorld']

// A family repo builds each of its mods from mods/<dir>; a repo that is one mod builds from its root.
export const mods = repos.flatMap((repo) => {
  const family = join(modsRoot, repo, 'mods')
  if (!existsSync(family)) return [join(modsRoot, repo)]
  return readdirSync(family).map(dir => join(family, dir)).filter(dir => existsSync(join(dir, 'common')))
})

export const minecraftVersion = process.env.MC_VERSION || '26.2'

const gradle = process.env.GRADLE_USER_HOME || join(homedir(), '.gradle')

function firstExisting(candidates) {
  return candidates.find(p => p && existsSync(p)) || null
}

// The vanilla client jar carries the container GUI textures, item tags and en_us lang.
export const clientJar = firstExisting([
  process.env.MC_CLIENT_JAR,
  join(gradle, 'caches', 'neoformruntime', 'artifacts', `minecraft_${minecraftVersion}_client.jar`),
  join(gradle, 'caches', 'fabric-loom', minecraftVersion, 'minecraft-client.jar')
])

// NeoForge's universal jar defines the conventional c: tags the recipes use.
function findNeoForgeJar() {
  if (process.env.NEOFORGE_JAR) return process.env.NEOFORGE_JAR
  const base = join(gradle, 'caches', 'modules-2', 'files-2.1', 'net.neoforged', 'neoforge')
  if (!existsSync(base)) return null
  const versions = readdirSync(base).filter(v => v.startsWith(minecraftVersion + '.')).sort()
  for (const version of versions.reverse()) {
    for (const hash of readdirSync(join(base, version))) {
      const jar = join(base, version, hash, `neoforge-${version}-universal.jar`)
      if (existsSync(jar)) return jar
    }
  }
  return null
}
export const neoforgeJar = findNeoForgeJar()

// Outputs inside the site.
export const recipeDataDir = join(siteRoot, 'app', 'data', 'recipes')
export const guiDataFile = join(siteRoot, 'app', 'data', 'gui.json')
export const iconDir = join(siteRoot, 'public', 'icons')
export const pagesDir = join(siteRoot, 'app', 'pages')
export const extraRecipesDir = join(here, 'extra')
export const iconOverridesDir = join(here, 'icon-overrides')

// The icon exports. `./gradlew :all:neoforge:runExportIcons` in a family repo renders every item its mods load
// into build/icons in one game; `:<dir>:neoforge:runExportIcons` does one mod into its neoforge/build/icons, and a
// repo that is one mod uses its own neoforge/build/icons. ICON_EXPORT_DIRS (path-separator delimited) overrides.
export const iconExportDirs = process.env.ICON_EXPORT_DIRS
  ? process.env.ICON_EXPORT_DIRS.split(delimiter).filter(Boolean)
  : [...repos.map(repo => join(modsRoot, repo, 'build', 'icons')), ...mods.map(mod => join(mod, 'neoforge', 'build', 'icons'))]

// Component-dependent icons the pages need (a coloured siding); the export runs read this file.
export const iconStacksFile = join(here, 'icon-stacks.json')
