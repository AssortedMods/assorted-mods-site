<template>
  <PartPage
    family="cuisine"
    part="dragon-fruit"
  >
    <p>Cacti sometimes drop a dragon fruit when they break. These Dragon Fruit can be eaten to regain a bit of hunger.</p>
    <img src="\mods\cuisine\dragon_fruit.png">

    <SectionHeading name="cutting">
      Cutting One Open
    </SectionHeading>
    <p>
      You can also just process the cut cactus you already have using a Knife. The knife comes from
      <NuxtLink to="/cuisine/kitchen">
        Assorted Kitchen
      </NuxtLink> or any other mod that adds one.
    </p>
    <Recipe id="assorteddragonfruit:dragon_fruit" />

    <SectionHeading name="config">
      Config
    </SectionHeading>
    <p>
      These are in the <i class="text-gray-600">assorteddragonfruit-common</i> config file.
    </p>
    <ul class="list-disc list-outside mx-6">
      <li><i>dragonFruit.dropChance</i> is the chance that breaking a cactus also drops dragon fruit. 0.33 by default and 0 turns it off.</li>
    </ul>
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Cuisine | Dragon Fruit'
})
</script>
