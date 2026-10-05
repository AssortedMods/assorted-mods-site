<template>
  <PartPage
    family="world"
    part="floating-islands"
  >
    <img src="\mods\world\floating-islands.webp">
    <p>
      Islands hang high over the ground and take after the land below them.
    </p>
    <p>
      Getting up to one is the whole problem. Nothing grows a bridge for you.
    </p>

    <SectionHeading name="kinds">
      Kinds of Island
    </SectionHeading>
    <p>
      There are seventeen kinds, and which one you find depends on the biome under it. Some biomes
      have more than one, so a dark forest can have dark forest, pale garden or mushroom islands
      over it.
    </p>
    <ul class="list-disc list-outside mx-6">
      <li><b>Meadow</b> is a grassy island with flowers, over plains and meadows. Biomes with no kind of their own get these or forest islands.</li>
      <li><b>Forest</b> has oak and birch trees, over forests and plains.</li>
      <li><b>Cherry</b> has cherry trees, over cherry groves and meadows.</li>
      <li><b>Dark Forest</b> has dark oaks, over dark forests.</li>
      <li><b>Pale Garden</b> has pale oaks and pale moss, over pale gardens and dark forests.</li>
      <li><b>Snowy</b> is snow covered with spruce, over snowy biomes.</li>
      <li><b>Taiga</b> has spruce and ferns, over taigas, groves and windswept forests.</li>
      <li><b>Glacier</b> is snow over packed ice, over ice spikes, frozen peaks and frozen water.</li>
      <li><b>Rocky</b> is bare stone, over stony peaks, stony shores and windswept hills.</li>
      <li><b>Desert</b> is sand over sandstone with cactus and dead bushes, over deserts.</li>
      <li><b>Savanna</b> has acacia trees, over savannas.</li>
      <li><b>Badlands</b> is red sand over bands of terracotta, over badlands.</li>
      <li><b>Jungle</b> has jungle trees, ferns and melons, over jungles.</li>
      <li><b>Swamp</b> has swamp oaks hung with vines and blue orchids, over swamps.</li>
      <li><b>Mangrove</b> is mud with mangrove trees, over mangrove swamps.</li>
      <li><b>Lush</b> is moss with azalea, over jungles and swamps.</li>
      <li><b>Mushroom</b> is mycelium with huge mushrooms, over mushroom fields and dark forests.</li>
    </ul>

    <SectionHeading name="config">
      Config
    </SectionHeading>
    <p>
      These are in the <i class="text-gray-600">assortedfloatingislands-common</i> config file.
    </p>
    <ul class="list-disc list-outside mx-6">
      <li><i>floatingIslands.rarity</i> is how rare islands are. One in this many chunks gets one. 750 by default and 0 turns them off.</li>
      <li><i>floatingIslands.minSize</i> is the smallest an island can be, in blocks from its middle. 6 by default.</li>
      <li><i>floatingIslands.maxSize</i> is the biggest an island can be. 14 by default and it can go up to 15.</li>
      <li><i>floatingIslands.minHeight</i> is the least open air between an island and the ground under it. 16 blocks by default.</li>
      <li><i>floatingIslands.maxHeight</i> is the most open air between an island and the ground under it. 64 blocks by default.</li>
      <li><i>floatingIslands.ores</i> puts ores and patches of granite, diorite, andesite, gravel and dirt inside islands like the ground has. On by default.</li>
    </ul>
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'World | Floating Islands'
})
</script>
