<template>
  <PartPage
    family="mobs"
    part="sea-creatures"
  >
    <p>
      Four water based mobs that live in rivers, lakes and oceans, and in snowy and frozen biomes.
    </p>
    <img src="\mods\mobs\sea_creatures.png">

    <h2><a name="seal">Seal and Walrus</a></h2>
    <p>
      Both can be found out on the ice and snow of snowy and frozen biomes. Both follow anyone holding a fish and breed for one, and both drop fish currently.
    </p>
    <p>
      A seal harms nothing, and bolts for the sea if it is hit. A walrus is as peaceful until one is
      hit. Then every walrus in earshot charges, a good deal faster than it lumbers, and into the sea
      after whoever did it.
    </p>
    <img src="\mods\mobs\seals.png">

    <h2><a name="narwhal">Narwhal</a></h2>
    <p>
      The unicorn of the cold seas. Narwhals swim cold and frozen oceans, under the ice too, and now
      and then one comes up and stands its tusk out of the water. They want nothing of anyone. Using the horn of a narwhal you can craft a sword.
    </p>
    <img src="\mods\mobs\narwhal.png">
    <Recipe id="assortedseacreatures:narwhal_sword" />

    <h2><a name="sea_otter">Sea Otter</a></h2>
    <p>
      Sea otters float on their backs in rivers and along milder coasts, and dive to get about. Afloat
      one cracks open sea shells and leaves one behind every so often, and it drops a few when it
      dies. I hear they like fish.
    </p>
    <img src="\mods\mobs\sea_otter.png">
    <p>
      Sea shells make a set of armor and a shovel.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedseacreatures:shell_helmet" />
      <Recipe id="assortedseacreatures:shell_chestplate" />
      <Recipe id="assortedseacreatures:shell_leggings" />
      <Recipe id="assortedseacreatures:shell_boots" />
      <Recipe id="assortedseacreatures:shell_shovel" />
    </div>
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Mobs | Sea Creatures'
})
</script>
