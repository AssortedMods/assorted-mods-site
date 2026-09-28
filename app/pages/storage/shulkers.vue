<template>
  <PartPage
    family="storage"
    part="shulkers"
  >
    <p>
      Material shulker boxes keep their contents when broken, the same as the vanilla, and can end
      up being much larger. Every shulker box can be crafted with any of the
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
      installed every shulker box can also be locked.
    </p>
    <img src="\mods\storage\shulkers.webp">

    <h2><a name="materials">Materials and Levels</a></h2>
    <p>
      Shulker boxes come in a whole set of materials, and the material decides how much one holds.
      Stone is the smallest and netherite the largest.
    </p>
    <p>
      Materials are also grouped into storage levels, from 0 to 5. A normal vanilla shulker box is
      a level 0 and a netherite shulker box is a level 5. Every shulker box has a line on its
      tooltip showing its storage level.
    </p>
    <p>Material shulker boxes can be dyed the same way as a vanilla one.</p>

    <h2><a name="upgrading">Upgrading</a></h2>
    <p>
      To upgrade a shulker box to the next material have the previous storage level shulker box in
      your inventory and surround it with a material of the next tier. Anything inside and any lock
      on it are kept. With
      <NuxtLink
        class="page-link"
        to="/storage/level-upgrades"
      >
        Assorted Level Upgrades
      </NuxtLink>
      installed you can also upgrade a shulker box in place without breaking it.
    </p>
    <Recipe id="assortedshulkers:shulker_box_iron" />
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Storage | Shulkers'
})
</script>
