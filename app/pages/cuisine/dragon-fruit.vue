<template>
  <PartPage
    family="cuisine"
    part="dragon-fruit"
  >
    <p>Cacti sometimes drop a dragon fruit when they break. These Dragon Fruit can be eaten to regain a bit of hunger.</p>
    <img src="\mods\cuisine\dragon_fruit.png">

    <h2><a name="cutting">Cutting One Open</a></h2>
    <p>
      You can also just process the cut cactus you already have using a Knife. The knife comes from
      <NuxtLink to="/cuisine/kitchen">
        Assorted Kitchen
      </NuxtLink> or any other mod that adds one.
    </p>
    <Recipe id="assorteddragonfruit:dragon_fruit" />
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Cuisine | Dragon Fruit'
})
</script>
