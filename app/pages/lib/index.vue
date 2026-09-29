<template>
  <LibPage>
    <p>
      Every Assorted mod needs Assorted Lib. It has the code they all share and the
      <NuxtLink
        class="page-link"
        to="/lib/instruction-manual"
      >
        Instruction Manual
      </NuxtLink> they write their pages in. It does not add much else on its own.
    </p>

    <SectionHeading name="config">
      Config
    </SectionHeading>
    <p>
      These go for every Assorted mod you have installed. Config files are in the config folder.
      They are .toml files on NeoForge and .json files on Fabric.
    </p>
    <p>
      These are in the <i class="text-gray-600">assortedlib-common</i> config file.
    </p>
    <ul class="list-disc list-outside mx-6">
      <li>
        <i>creative.hideUncraftableItems</i> hides items from the creative menu when nothing
        installed adds their material, like a tin chest without a mod that adds tin. Off by default.
      </li>
      <li>
        <i>migration.carryOverMovedIds</i> keeps your recipe book, advancements, structures and
        unopened chest loot in worlds from before the mods were split up. On by default.
      </li>
    </ul>
    <p>
      These are in the <i class="text-gray-600">assortedlib-client</i> config file. They only change
      your own game, so everyone can set their own.
    </p>
    <ul class="list-disc list-outside mx-6">
      <li>
        <i>manual.showPageIndicator</i> shows a check mark by the crosshair when what you are looking
        at has a manual page. On by default.
      </li>
    </ul>
    <p>
      Each family also has its own file to turn any of its mods off, and the tool mods share one for
      their materials. Those are on the family pages and the
      <NuxtLink
        class="page-link"
        to="/tools/gear-sets#tiers"
      >
        Gear Sets
      </NuxtLink> page.
    </p>
  </LibPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Lib'
})
</script>
