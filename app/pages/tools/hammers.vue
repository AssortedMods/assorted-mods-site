<template>
  <PartPage
    family="tools"
    part="hammers"
  >
    <p>
      Hammers are new tools that on use will destroy the block in one hit but not drop the items. So if you have a huge mountain of dirt to get rid of this will be very helpful.
    </p>
    <img src="\mods\tools\hammers.webp">
    <p>
      There is a hammer for every material, from wood up to netherite, and for each of the extra
      materials in
      <NuxtLink
        class="page-link"
        to="/tools/gear-sets"
      >
        Gear Sets
      </NuxtLink>.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      <Recipe id="assortedhammers:wood_hammer" />
      <Recipe id="assortedhammers:stone_hammer" />
      <Recipe id="assortedhammers:gold_hammer" />
      <Recipe id="assortedhammers:iron_hammer" />
      <Recipe id="assortedhammers:diamond_hammer" />
      <Recipe id="assortedhammers:netherite_hammer" />
      <Recipe id="assortedhammers:netherite_hammer_smithing" />
    </div>
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Tools | Hammers'
})
</script>
