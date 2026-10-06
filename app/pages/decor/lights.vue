<template>
  <PartPage
    family="decor"
    part="lights"
  >
    <p>
      Lights adds some extra lighting options to give you some variety to choose from. These come
      in the form of Illumination tubes and plates, Fluro blocks and lanterns.
    </p>
    <SectionHeading name="illumination_tube">
      Illumination Tube
    </SectionHeading>
    <p>
      These act like torches but a bit brighter. They also can be placed on all sides of a block
      including underneath. These do not give off any particles while placed.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedlights:illumination_tube_iron" />
      <Recipe id="assortedlights:illumination_tube" />
    </div>

    <SectionHeading name="illumination_plate">
      Illumination Plate
    </SectionHeading>
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
    <GalleryShot name="tubes" />
    <div class="flex flex-wrap gap-4">
      <Recipe id="assortedlights:illumination_plate" />
      <Recipe id="assortedlights:illumination_plate_iron" />
    </div>

    <SectionHeading name="fluro_tube">
      Fluro
    </SectionHeading>
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
    <GalleryShot name="fluro" />

    <SectionHeading name="lanterns">
      Lanterns
    </SectionHeading>
    <p>
      There are also Lanterns that are added to provide a bit of variety in interior lighting
      options. <i>All Lanterns crafting can use any Candle or any Torch</i>.
    </p>
    <GalleryShot name="lanterns" />
    <SectionHeading
      name="paper_lantern"
      :level="3"
    >
      Paper
    </SectionHeading>
    <Recipe id="assortedlights:paper_lantern" />
    <SectionHeading
      name="bone_lantern"
      :level="3"
    >
      Bone
    </SectionHeading>
    <Recipe id="assortedlights:bone_lantern" />
    <SectionHeading
      name="iron_lantern"
      :level="3"
    >
      Iron
    </SectionHeading>
    <Recipe id="assortedlights:iron_lantern" />
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Decor | Lights'
})
</script>
