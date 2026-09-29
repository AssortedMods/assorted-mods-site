<template>
  <PartPage
    family="world"
    part="structures"
  >
    <p>
      Structures from a past civilization are scattered across the world. Some still hold treasures
      that were left behind while others have been picked clean.
    </p>
    <p>
      A lot of them can be changed in the config, like how rare they are and what shows up in them.
    </p>
    <SectionHeading name="runes">
      Runes
    </SectionHeading>
    <p>
      Every structure has a chance of holding one of the 16 types of <b>Runes</b>. Each one gives a
      different status effect to whoever stands on or uses it. You will need to find them all to
      figure out which ones are the best.
    </p>
    <img src="\mods\world\runes.png">
    <SectionHeading name="pyramid">
      Pyramids
    </SectionHeading>
    <p>
      Pyramids are large structures that have started to decay over the years. Most have many levels
      but can be very rewarding.
    </p>
    <img src="\mods\world\pyramid.png">
    <SectionHeading name="fountain">
      Fountains
    </SectionHeading>
    <p>
      Fountains are large stone structures surrounded by flowing water. They can contain spawners and
      rare loot.
    </p>
    <img src="\mods\world\fountain.png">
    <SectionHeading name="snowball">
      Snowballs
    </SectionHeading>
    <p>Snowballs are massive snow and ice structures. They closely resemble massive snowmen.</p>
    <img src="\mods\world\snowball.png">
    <SectionHeading name="waterdome">
      Water Domes
    </SectionHeading>
    <p>
      Water Domes are found on the bottom of the ocean and can contain Runes. Some rare ones are made
      of uncommon materials.
    </p>
    <img src="\mods\world\water_dome.png">
    <SectionHeading name="spire">
      Spires
    </SectionHeading>
    <p>
      Spires are natural structures that reach towards the sky. These can contain runes and very
      rarely are 'death spires'.
    </p>
    <img src="\mods\world\spires.png">
    <SectionHeading name="decayedruins">
      Decayed Ruins
    </SectionHeading>
    <p>
      Ruins have decayed greatly over the years but can still contain treasures of old.
    </p>
    <img src="\mods\world\ruins.png">
    <SectionHeading name="sandstonepillars">
      Sandstone Pillars
    </SectionHeading>
    <p>
      Sandstone pillars stand out of the dunes in the desert. Some hide suspicious sand or a rune worth
      digging for.
    </p>

    <SectionHeading name="config">
      Config
    </SectionHeading>
    <p>
      These are in the <i class="text-gray-600">assortedstructures-common</i> config file.
    </p>
    <ul class="list-disc list-outside mx-6">
      <li><i>common.runeChance</i> is the chance of a rune in a ruin or spire. 0.15 by default.</li>
      <li><i>structures.waterDomeChestChance</i> is the chance a water dome has loot chests. 0.6 by default.</li>
      <li><i>structures.waterDomeSuspiciousGravelChance</i> is the chance a water dome has suspicious gravel on its floor. 0.5 by default.</li>
      <li><i>structures.waterDomePieceMod</i> is how many extra pieces get added to a water dome. 8 by default.</li>
      <li><i>spires.spireRadius</i> is how wide spires are. 7 by default.</li>
      <li><i>spires.spireHeight</i> is how tall spires are. 40 by default.</li>
      <li><i>spires.deathSpireChance</i> is the chance a spire is a death spire. 0.001 by default.</li>
      <li><i>worldGenExpanded.sandstonePillarRarity</i> is how rare sandstone pillars are. One in this many chunks gets one. 325 by default and 0 turns them off.</li>
      <li><i>worldGenExpanded.sandstonePillarSuspiciousSandChance</i> is the chance a sandstone pillar has suspicious sand in it. 0.35 by default.</li>
      <li><i>worldGenExpanded.sandstonePillarRuneChance</i> is the chance a sandstone pillar has a rune in it. 0.15 by default.</li>
    </ul>
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'World | Structures'
})
</script>
