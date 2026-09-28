<template>
  <PartPage
    family="tools"
    part="multitools"
  >
    <p>
      Multitools are one combined tool to do all the work of the parts it is made out of. This will
      help save hotbar space so you only need one tools rather than 5.
    </p>
    <img src="\mods\tools\multitools.webp">
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      <Recipe id="assortedmultitools:wooden_multitool" />
      <Recipe id="assortedmultitools:stone_multitool" />
      <Recipe id="assortedmultitools:golden_multitool" />
      <Recipe id="assortedmultitools:iron_multitool" />
      <Recipe id="assortedmultitools:diamond_multitool" />
      <Recipe id="assortedmultitools:netherite_multitool" />
    </div>
    <p>
      You are able to upgrade from Diamond MultiTool to Netherite MultiTool using a block of
      Netherite.
    </p>
    <Recipe id="assortedmultitools:netherite_multitool_smithing" />

    <h2><a name="config">Config</a></h2>
    <p>
      A multitool lasts longer than a single tool of its material. Its durability is the material's
      <i>maxUses</i> times <i>multitools.&lt;material&gt;.durabilityModifier</i>, which is 1.5 by
      default. That lives in the <i class="text-gray-600">assortedmultitools-common</i> config file.
      The material values themselves are shared by every Assorted mod and are explained on the
      <NuxtLink
        class="page-link"
        to="/tools/gear-sets"
      >
        Gear Sets
      </NuxtLink> page.
    </p>
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Tools | Multitools'
})
</script>
