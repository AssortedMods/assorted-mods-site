<template>
  <PartPage
    family="world"
    part="plants"
  >
    <SectionHeading name="gunpowder_reed">
      Gunpowder Reed
    </SectionHeading>
    <p>
      Gunpowder Reed is a plant that grows like sugar cane but gives you gunpowder instead. It is a
      renewable source so you do not have to hunt creepers for it.
    </p>
    <GalleryShot name="gunpowder-reed" />
    <p>
      It follows the same rules as sugar cane. Plant it on dirt, sand, or another block sugar cane
      accepts with water next to the block underneath it, and it grows on its own up to 3 blocks
      tall. Without water it breaks straight away.
    </p>
    <p>
      The reed gives off a small amount of light and is almost immune to explosions, so a blast next
      to a patch will not clear it out.
    </p>
    <p>
      Patches generate naturally in every Overworld biome, along water the same way sugar cane does.
      Each patch is 2 to 4 blocks tall.
    </p>
    <p>
      If you would rather start a patch from what you already have, eight gunpowder around a sugar
      cane makes a Gunpowder Reed.
    </p>
    <Recipe id="assortedplants:gunpowder_reed" />
    <p>A single reed on its own turns back into one gunpowder.</p>
    <Recipe id="assortedplants:gunpowder" />

    <SectionHeading name="glowstone_seeds">
      Glowstone Seeds
    </SectionHeading>
    <p>
      A glowstone seed takes on the underside of a netherrack ceiling and ripens before bursting into a
      blob of glowstone.
    </p>
    <GalleryShot name="glowstone-seeds" />
    <Recipe id="assortedplants:glowstone_seeds" />

    <SectionHeading name="config">
      Config
    </SectionHeading>
    <p>
      These are in the <i class="text-gray-600">assortedplants-common</i> config file.
    </p>
    <ul class="list-disc list-outside mx-6">
      <li><i>glowstoneSeeds.plantHeight</i> is the highest you can plant glowstone seeds on a netherrack ceiling outside the Nether. 15 by default. In the Nether they grow at any height.</li>
    </ul>
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'World | Plants'
})
</script>
