<template>
  <PartPage
    family="mobs"
    part="ice-pixie"
  >
    <p>
      Ice pixies live in snowy biomes and can be found during both day and night. They throw ice at any
      player they see, and they move faster on ice and snow.
    </p>
    <GalleryShot name="pixies" />

    <SectionHeading name="fire">
      Only Fire
    </SectionHeading>
    <p>
      Nothing hurts an ice pixie unless you are holding a torch or flint and steel when you hit it.
      Anything hot nearby will burn it too. Like torches, fire, campfires, magma, and lava.
    </p>
    <GalleryShot name="close" />

    <SectionHeading name="drops">
      Drops
    </SectionHeading>
    <p>
      Snowballs, and sometimes ice will drop when one is killed. They may also drop a
      frost rod when a mod adds them, such as
      <NuxtLink
        class="page-link"
        to="/tools/staffs"
      >
        Assorted Staffs
      </NuxtLink>.
    </p>
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Mobs | Ice Pixie'
})
</script>
