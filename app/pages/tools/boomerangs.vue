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
    <SectionHeading name="wooden">
      Wooden Boomerangs
    </SectionHeading>
    <p>
      Wooden boomerangs can be thrown with right click and once it hits its maximum distance it will
      return to you.
    </p>
    <Recipe id="assortedboomerangs:wood_boomerang" />
    <SectionHeading name="diamond">
      Diamond Boomerangs
    </SectionHeading>
    <p>
      Diamond boomerangs by default can be thrown farther and do more damage to entities. They work
      exactly like wooden ones but can be changed in the config to be able to follow where you are
      looking.
    </p>
    <Recipe id="assortedboomerangs:diamond_boomerang" />

    <SectionHeading name="config">
      Config
    </SectionHeading>
    <p>
      These are in the <i class="text-gray-600">assortedboomerangs-common</i> config file.
    </p>
    <ul class="list-disc list-outside mx-6">
      <li><i>boomerangs.woodBoomerangRange</i> is how far the wood boomerang goes before it comes back. 20 blocks by default.</li>
      <li><i>boomerangs.woodBoomerangDamage</i> is how much damage the wood boomerang does. 1 by default.</li>
      <li><i>boomerangs.diamondBoomerangRange</i> is how far the diamond boomerang goes before it comes back. 30 blocks by default.</li>
      <li><i>boomerangs.diamondBoomerangDamage</i> is how much damage the diamond boomerang does. 5 by default.</li>
      <li><i>boomerangs.diamondBoomerangFollows</i> makes the diamond boomerang follow where you are looking. Off by default.</li>
      <li><i>boomerangs.turnAroundItem</i> makes boomerangs come back after they pick up an item. Off by default.</li>
      <li><i>boomerangs.turnAroundMob</i> makes boomerangs come back after they hit a mob. Off by default.</li>
      <li><i>boomerangs.breaksTorches</i> lets boomerangs break torches. Off by default.</li>
      <li><i>boomerangs.breaksPlants</i> lets boomerangs break plants and other weak blocks. Off by default.</li>
      <li><i>boomerangs.hitsButtons</i> lets boomerangs press buttons and flip levers. On by default.</li>
      <li><i>boomerangs.turnAroundButton</i> makes boomerangs come back after they hit a button or lever. On by default.</li>
    </ul>
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Tools | Boomerangs'
})
</script>
