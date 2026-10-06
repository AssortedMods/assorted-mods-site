<template>
  <PartPage
    family="tools"
    part="machetes"
  >
    <p>
      A machete is a lighter, quicker sword that also cuts through leaves, vines, wool, cactus and
      the rest of the undergrowth at its material's speed. What it cuts is the block tag
      <b>assortedmachetes:mineable/machete</b>.
    </p>
    <GalleryShot name="machetes" />
    <p>
      There is a machete for every material, from wood up to netherite, and for each of the extra
      materials in
      <NuxtLink
        class="page-link"
        to="/tools/gear-sets"
      >
        Gear Sets
      </NuxtLink>.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      <Recipe id="assortedmachetes:wood_machete" />
      <Recipe id="assortedmachetes:stone_machete" />
      <Recipe id="assortedmachetes:gold_machete" />
      <Recipe id="assortedmachetes:iron_machete" />
      <Recipe id="assortedmachetes:diamond_machete" />
      <Recipe id="assortedmachetes:netherite_machete_smithing" />
    </div>

    <SectionHeading name="config">
      Config
    </SectionHeading>
    <p>
      Machetes uses the tool materials every Assorted mod shares. Their values are explained on the
      <NuxtLink
        class="page-link"
        to="/tools/gear-sets#tiers"
      >
        Gear Sets
      </NuxtLink> page.
    </p>
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Tools | Machetes'
})
</script>
