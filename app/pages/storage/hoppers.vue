<template>
  <PartPage
    family="storage"
    part="hoppers"
  >
    <p>
      A material hopper moves items the way a vanilla one does but has far more room, and can vary
      in speed depending on the material. The higher storage level the hopper is made out of the
      faster it is. Every hopper can be crafted with any of the
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
      </NuxtLink>.
    </p>
    <img src="\mods\storage\hoppers.webp">

    <h2><a name="materials">Materials and Levels</a></h2>
    <p>
      Hoppers come in a whole set of materials, and the material decides how much one holds. Stone
      is the smallest and netherite the largest.
    </p>
    <p>
      Materials are also grouped into storage levels, from 0 to 5. A normal vanilla hopper is a
      level 0 and a netherite hopper is a level 5. Every hopper has a line on its tooltip showing
      its storage level.
    </p>

    <h2><a name="upgrading">Upgrading</a></h2>
    <p>
      To upgrade a hopper to the next material have the previous storage level hopper in your
      inventory and surround it with a material of the next tier. With
      <NuxtLink
        class="page-link"
        to="/storage/chests"
      >
        Assorted Chests
      </NuxtLink>
      installed you can also make a material hopper straight from a chest of that material, the same
      way a vanilla hopper is made. With
      <NuxtLink
        class="page-link"
        to="/storage/level-upgrades"
      >
        Assorted Level Upgrades
      </NuxtLink>
      installed you can also upgrade a hopper in place without breaking it.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedhoppers:hopper_iron" />
      <Recipe id="assortedhoppers:hopper_iron_chest" />
    </div>

    <h2><a name="locking">Locking</a></h2>
    <p>
      With
      <NuxtLink
        class="page-link"
        to="/storage/locks"
      >
        Assorted Locks
      </NuxtLink>
      installed hoppers can be locked. This will allow locked hoppers to pull and push to locked
      storages whereas without it is not possible for connected storages to get items in and out.
      Locking a hopper with the correct lock that matches the pull/push block will let it be able to
      access it.
    </p>
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Storage | Hoppers'
})
</script>
