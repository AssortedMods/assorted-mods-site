<template>
  <PartPage
    family="world"
    part="terrain"
  >
    <h2><a name="randomite">Randomite</a></h2>
    <img src="\mods\world\randomite.png">
    <p>
      Randomite looks like one more ore in the wall and drops as any of them. What it gives is decided
      when it breaks, not when it generates, so two blocks side by side rarely drop the same. The
      default list it can drop is below.
    </p>
    <ul class="list-disc list-inside">
      <li>Coal</li>
      <li>Iron Ore</li>
      <li>Gold Ore</li>
      <li>Diamond</li>
      <li>Redstone</li>
      <li>Lapis Lazuli</li>
      <li>Slime Ball</li>
      <li>Emerald</li>
      <li>Quartz</li>
      <li>Egg</li>
      <li>Ancient Debris</li>
    </ul>

    <h2><a name="desert_wells">Desert Wells</a></h2>
    <p>
      Desert wells are not just a well. The shaft under them runs ten to thirty blocks down through the
      sandstone to a chest, and the deeper the swim the better what is waiting at the bottom.
    </p>

    <h2><a name="fuller_world">A Fuller World</a></h2>
    <img src="\mods\world\terrain.webp">
    <p>
      Wild fields of wheat, carrots, potatoes or beetroot grow on the plains, watered by holes dug in
      among the rows. Melons come up in loose patches around as well. Stray saplings and the stumps of
      felled trees are scattered through the woods.
    </p>
    <p>
      The desert has more variety with fields of cactus and pits sunk into the sand in terraces.
    </p>
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'World | Terrain'
})
</script>
