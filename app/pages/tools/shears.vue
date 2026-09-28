<template>
  <PartPage
    family="tools"
    part="shears"
  >
    <p>
      This mod adds Shears with any default material seen below as well as all of the extra
      materials in
      <NuxtLink
        class="page-link"
        to="/tools/gear-sets"
      >
        Gear Sets
      </NuxtLink>. These extra Shears work
      the exact same way that vanilla Shears work except that their durability is dependent on the
      material that they are made out of.
    </p>
    <img src="\mods\tools\shears.webp">
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      <Recipe id="assortedshears:wood_shears" />
      <Recipe id="assortedshears:stone_shears" />
      <Recipe id="assortedshears:gold_shears" />
      <Recipe id="assortedshears:diamond_shears" />
      <Recipe id="assortedshears:netherite_shears" />
    </div>
    <p>You are able to upgrade from Diamond Shears to Netherite Shears using a Netherite ingot.</p>
    <Recipe id="assortedshears:netherite_shears_smithing" />

    <h2><a name="enchantments">Enchantments</a></h2>
    <p>
      Assorted Shears adds one extra enchantment for Shears, <b>Coral Cutter</b>.
      This enchantment allows Shears to be able to pick up Coral without the need of a separate tool
      with Silk Touch.
    </p>
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Tools | Shears'
})
</script>
