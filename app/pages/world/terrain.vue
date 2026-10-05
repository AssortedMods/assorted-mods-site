<template>
  <PartPage
    family="world"
    part="terrain"
  >
    <SectionHeading name="randomite">
      Randomite
    </SectionHeading>
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

    <SectionHeading name="desert_wells">
      Desert Wells
    </SectionHeading>
    <p>
      Desert wells are not just a well. The shaft under them runs ten to thirty blocks down through the
      sandstone to a chest, and the deeper the swim the better what is waiting at the bottom.
    </p>
    <p>
      These take the place of the desert wells Minecraft has. Wherever they can show up the plain well
      is left out, so you never find the two side by side. Nothing is lost by that. Every well still
      has two blocks of suspicious sand just under the water with the same finds a plain well has, so
      the pottery sherds that only come from wells are all still there.
    </p>

    <SectionHeading name="fuller_world">
      A Fuller World
    </SectionHeading>
    <img src="\mods\world\terrain.webp">
    <p>
      Wild fields of wheat, carrots, potatoes or beetroot grow on the plains, watered by holes dug in
      among the rows. Melons come up in loose patches around as well. Stray saplings and the stumps of
      felled trees are scattered through the woods.
    </p>
    <p>
      The desert has more variety with fields of cactus and pits sunk into the sand in terraces.
    </p>

    <SectionHeading name="config">
      Config
    </SectionHeading>
    <p>
      These are in the <i class="text-gray-600">assortedterrain-common</i> config file.
    </p>
    <p>
      For the rarity ones, one in this many chunks gets one. Bigger is rarer and 0 turns them off.
    </p>
    <ul class="list-disc list-outside mx-6">
      <li><i>desertWells.rarity</i> is how rare the deep desert wells are. 900 by default.</li>
      <li><i>desertWells.replaceVanilla</i> takes vanilla's desert well out wherever these can show up so the two are not side by side. On by default.</li>
      <li><i>worldGenExpanded.cropFieldRarity</i> is how rare crop fields are. 250 by default.</li>
      <li><i>worldGenExpanded.cropFieldSize</i> is how far a crop field reaches from its middle. 6 blocks by default.</li>
      <li><i>worldGenExpanded.cactusFieldRarity</i> is how rare cactus fields are. 350 by default.</li>
      <li><i>worldGenExpanded.cactusFieldSize</i> is how far a cactus field reaches from its middle. 8 blocks by default.</li>
      <li><i>worldGenExpanded.sandPitRarity</i> is how rare sand pits are. 400 by default.</li>
      <li><i>worldGenExpanded.sandPitSize</i> is how far a sand pit reaches from its middle. 7 blocks by default. How deep it goes follows from that.</li>
      <li><i>worldGenExpanded.saplingRarity</i> is how rare stray saplings are. 300 by default.</li>
      <li><i>worldGenExpanded.treeStumpRarity</i> is how rare tree stumps are. 300 by default.</li>
      <li><i>worldGenExpanded.melonRarity</i> is how rare patches of melons are. 300 by default.</li>
    </ul>
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'World | Terrain'
})
</script>
