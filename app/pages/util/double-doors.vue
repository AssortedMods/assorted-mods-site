<template>
  <PartPage
    family="util"
    part="double-doors"
  >
    <p>
      You can have two doors side by side and opening one door will open the other. The same goes for
      a large group of trapdoors, and for fence gates stacked on or beside each other.
    </p>
    <p>
      Sneak to open just one. Doors, trapdoors and gates from other mods should work too.
    </p>

    <SectionHeading name="config">
      Config
    </SectionHeading>
    <p>
      These are in the <i class="text-gray-600">assorteddoubledoors-common</i> config file.
    </p>
    <ul class="list-disc list-outside mx-6">
      <li><i>doubleDoors.doors</i> opens both doors of a double door together. On by default.</li>
      <li><i>doubleDoors.trapdoors</i> opens every trapdoor of a hatch together. On by default.</li>
      <li><i>doubleDoors.fenceGates</i> opens fence gates next to or on top of each other together. On by default.</li>
      <li><i>doubleDoors.maxConnected</i> is the most trapdoors or fence gates one click opens. 16 by default.</li>
    </ul>
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Util | Double Doors'
})
</script>
