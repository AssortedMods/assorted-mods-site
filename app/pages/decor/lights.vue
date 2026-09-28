<template>
  <PartPage
    family="decor"
    part="lights"
  >
    <p>
      Lights adds some extra lighting options to give you some variety to choose from. These come
      in the form of Illumination tubes and plates, Fluro blocks and lanterns.
    </p>
    <h2><a name="illumination_tube">Illumination Tube</a></h2>
    <p>
      These act like torches but a bit brighter. They also can be placed on all sides of a block
      including underneath. These do not give off any particles while placed.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedlights:illumination_tube_iron" />
      <Recipe id="assortedlights:illumination_tube" />
    </div>

    <h2><a name="illumination_plate">Illumination Plate</a></h2>
    <p>
      Illumination Plates are very similar to Illumination Tubes. You can place them on all sides of
      a block and they do not give off any particles. You are also able to waterlog them. These can
      also be used in conjunction with
      <NuxtLink
        class="page-link"
        to="/decor/roads"
      >
        Roadways
      </NuxtLink>.
    </p>
    <img src="\mods\decor\illumination_plate.png">
    <div class="flex flex-wrap gap-4">
      <Recipe id="assortedlights:illumination_plate" />
      <Recipe id="assortedlights:illumination_plate_iron" />
    </div>

    <h2><a name="fluro_tube">Fluro</a></h2>
    <p>
      These are the size of a regular block and are as bright as the basic Illumination Tube. These
      can be crafted with any of the 16 dyes available and follow the pattern as seen above with the
      3 examples. You are also able to paint these using <NuxtLink
        class="page-link"
        to="/decor/paint"
      >
        Paint Rollers
      </NuxtLink>.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      <Recipe id="assortedlights:fluro_white" />
      <Recipe id="assortedlights:fluro_blue" />
      <Recipe id="assortedlights:fluro_pink" />
    </div>
    <img src="\mods\decor\fluro.png">

    <h2><a name="lanterns">Lanterns</a></h2>
    <p>
      There are also Lanterns that are added to provide a bit of variety in interior lighting
      options. <i>All Lanterns crafting can use any Candle or any Torch</i>.
    </p>
    <br>
    <h3><a name="paper_lantern">Paper</a></h3>
    <Recipe id="assortedlights:paper_lantern" />
    <h3><a name="bone_lantern">Bone</a></h3>
    <Recipe id="assortedlights:bone_lantern" />
    <h3><a name="iron_lantern">Iron</a></h3>
    <Recipe id="assortedlights:iron_lantern" />
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Decor | Lights'
})
</script>
