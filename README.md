# Assorted Mods

Documentation site for the "Assorted" Minecraft mod series by Grim3212, published at
[assortedmods.com](https://assortedmods.com).

Built with [Nuxt 4](https://nuxt.com/docs/getting-started/introduction) and prerendered to static
files.

## Setup

Needs Node 26, pinned in `.nvmrc` (`nvm use` if you use nvm). The deploy workflow reads the same file,
and `@types/node` follows the same major.

```bash
yarn install
```

## Development server

Runs on `http://localhost:3000`:

```bash
yarn dev
```

## Build

```bash
yarn generate   # static site into .output/public
yarn preview    # serve the built site locally
yarn lint
```

## Mods

Each family (Assorted Tech and so on) has a page at `/<family>`, and each of its mods has its own
page at `/<family>/<mod>` built on the `PartPage` component. The list of families and mods, their
names, descriptions, download pages and logos come from the mod repos:

```bash
yarn mods          # regenerate app/data/mods.json and public/logos
yarn mods --check  # only report what is missing
```

It reads each repo's root `gradle.properties` (`family_name`, `assorted_mods`) and every mod's own
`gradle.properties` (`mod_name`, `mod_description`, `curseforge_slug`, `modrinth_id`). A download link
shows as "soon" until the mod has that id. `scripts/mods/overrides.json` holds what gradle.properties
does not, like a nicer Modrinth slug or a family with no bundle. Rerun it when a mod gets its store
pages or a new logo. When a page moves, add the old path to `redirects.json` so links keep working.

## Recipes

Recipes on the pages are `<Recipe id="assortedmachines:machine_core" />` components. They read
`app/data/recipes/<namespace>/<path>.json` and the item icons in `public/icons`, both generated
from the mods' datagen output and icon exports by:

```bash
yarn recipes          # regenerate app/data/recipes and public/icons
yarn recipes --check  # only report what would change and any problems
```

The script scans the pages for every `<Recipe id>`, reads the recipe from each mod in the sibling
repos (`../Assorted*/mods/*/common/src/generated/server`), resolves tags and names, and copies the
icons out of the mods' icon exports. The icons are rendered by the game itself: in a mod
checkout,

```bash
./gradlew :all:neoforge:runExportIcons
```

(or `:<mod>:neoforge:runExportIcons` for a single mod)

starts the client with the `IconExporter` from AssortedLib armed, which joins a throwaway flat
world, draws every loaded item the way the inventory does (models, block entity renderers,
tints, lighting) into the repo's `build/icons` and quits. Rerun it in a mod whenever its models
or textures change, then `yarn recipes`. Items whose icon depends on components (the coloured
sidings) are listed in `scripts/recipes/icon-stacks.json`, which `yarn recipes` maintains and the
export runs read, so a new variant takes one more export run after the page referencing it is
added. The recipe backgrounds in `public/icons/gui` are the real container GUI textures
(crafting table, furnaces, stonecutter, smithing table, grinding mill, alloy forge) cropped to
the recipe area, with the slot positions written to `app/data/gui.json`;
`scripts/recipes/gui.mjs` is where a new station gets added. It needs the mod repos next to this
one and the Minecraft client jar plus NeoForge jar from the gradle cache (built once by any mod
build). `scripts/recipes/config.mjs` lists the environment variables that override those
locations. Special recipe types the game does not describe in JSON (bag dyeing, locking an
ender chest) live in `scripts/recipes/extra`, and a PNG dropped into
`scripts/recipes/icon-overrides/<namespace>/<item>.png` replaces an exported icon.

Both outputs are committed, so a deploy does not need the mods or the game.

## Deploy

The site is hosted as a static S3 website in the `www.assortedmods.com` bucket. To build and publish
in one step:

```bash
yarn deploy
```

That runs `nuxt generate`, then syncs `.output/public` to the bucket in two passes: the hashed
`_nuxt` bundles with a one year immutable cache, then everything else with a five minute cache.
Both passes use `--delete`, so files removed from the site are removed from the bucket.

It needs the AWS CLI installed and credentials that can write to the bucket, for example through
`aws configure` or `AWS_PROFILE`.

The same deploy is available in GitHub Actions as a manual run: **Actions -> Deploy -> Run
workflow**. It needs `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` set as repository secrets.
