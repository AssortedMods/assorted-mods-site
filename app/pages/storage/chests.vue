<template>
  <PartPage
    family="storage"
    part="chests"
  >
    <p>
      A material chest works exactly like a vanilla one and holds a great deal more. They do not
      pair into doubles. Every chest can be crafted with any of the
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
      installed every chest can also be locked.
    </p>
    <img src="\mods\storage\better_storage.png">

    <SectionHeading name="materials">
      Materials and Levels
    </SectionHeading>
    <p>
      Chests come in a set of materials, and the material decides how much one holds. Stone is the
      smallest and netherite the largest.
    </p>
    <p>
      Materials are also grouped into storage levels, from 0 to 5. A normal vanilla chest is a
      level 0 and a netherite chest is a level 5. Every chest has a line on its tooltip showing its
      storage level to make it a bit easier to know what the next one in line is.
    </p>
    <p>
      Everything Assorted Core adds has a place in that order too, which gives tin, silver, ruby and
      the rest somewhere useful to go.
    </p>

    <SectionHeading name="upgrading">
      Upgrading
    </SectionHeading>
    <p>
      To upgrade a chest to the next material have the previous storage level chest in your
      inventory and surround it with a material of the next tier. Anything inside and any lock on it
      are kept. With
      <NuxtLink
        class="page-link"
        to="/storage/level-upgrades"
      >
        Assorted Level Upgrades
      </NuxtLink>
      installed you can also upgrade a chest in place without breaking it.
    </p>
    <Recipe id="assortedchests:chest_iron" />
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Storage | Chests'
})
</script>
