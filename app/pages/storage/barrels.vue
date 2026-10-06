<template>
  <PartPage
    family="storage"
    part="barrels"
  >
    <p>
      Barrels hold the same as their chest and open without needing space above them. Every barrel
      can be crafted with any of the
      <NuxtLink
        class="page-link"
        to="/core/ores"
      >
        materials
      </NuxtLink> from
      <NuxtLink
        class="page-link"
        to="/core"
      >
        Assorted Core
      </NuxtLink>. With
      <NuxtLink
        class="page-link"
        to="/storage/locks"
      >
        Assorted Locks
      </NuxtLink>
      installed every barrel can also be locked.
    </p>
    <GalleryShot name="barrels" />

    <SectionHeading name="materials">
      Materials and Levels
    </SectionHeading>
    <p>
      Barrels come in a set of materials, and the material decides how much one holds. Stone is the
      smallest and netherite the largest.
    </p>
    <p>
      Materials are also grouped into storage levels, from 0 to 5. A normal vanilla barrel is a
      level 0 and a netherite barrel is a level 5. Every barrel has a line on its tooltip showing
      its storage level.
    </p>
    <GalleryShot name="diamond-barrel" />

    <SectionHeading name="upgrading">
      Upgrading
    </SectionHeading>
    <p>
      To upgrade a barrel to the next material have the previous storage level barrel in your
      inventory and surround it with a material of the next tier. Anything inside and any lock on it
      are kept. With
      <NuxtLink
        class="page-link"
        to="/storage/level-upgrades"
      >
        Assorted Level Upgrades
      </NuxtLink>
      installed you can also upgrade a barrel in place without breaking it.
    </p>
    <Recipe id="assortedbarrels:barrel_iron" />
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Storage | Barrels'
})
</script>
