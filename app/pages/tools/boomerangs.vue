<template>
  <PartPage
    family="tools"
    part="boomerangs"
  >
    <p>
      Boomerangs as you would think can be thrown and then will return to you after they reach their
      maximum distance. They hurt what they pass through on the way, and they might even pickup some
      items on the way.
    </p>
    <img src="\mods\tools\boomerangs.webp">
    <h2><a name="wooden">Wooden Boomerangs</a></h2>
    <p>
      Wooden boomerangs can be thrown with right click and once it hits its maximum distance it will
      return to you.
    </p>
    <Recipe id="assortedboomerangs:wood_boomerang" />
    <h2><a name="diamond">Diamond Boomerangs</a></h2>
    <p>
      Diamond boomerangs by default can be thrown farther and do more damage to entities. They work
      exactly like wooden ones but can be changed in the config to be able to follow where you are
      looking.
    </p>
    <Recipe id="assortedboomerangs:diamond_boomerang" />
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Tools | Boomerangs'
})
</script>
