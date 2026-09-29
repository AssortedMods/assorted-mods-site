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
