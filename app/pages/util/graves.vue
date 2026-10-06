<template>
  <PartPage
    family="util"
    part="graves"
  >
    <p>
      When you die, everything you carried and all of your experience goes into a grave where you
      died. Items with Curse of Vanishing still vanish.
    </p>
    <p>
      You get a message in chat with where your grave is. If there is no room for a grave nearby your
      things drop on the ground like normal.
    </p>
    <GalleryShot name="death-message" />

    <SectionHeading name="restore">
      Getting It Back
    </SectionHeading>
    <p>
      Right click your grave to get everything back where it was, in the same slots.
    </p>
    <GalleryShot name="restored" />
    <p>
      Breaking it spills it all on the ground instead. Explosions, pistons and bosses cannot move or
      break a grave.
    </p>

    <SectionHeading name="config">
      Config
    </SectionHeading>
    <p>
      These are in the <i class="text-gray-600">assortedgraves-common</i> config file.
    </p>
    <ul class="list-disc list-outside mx-6">
      <li><i>graves.keepAllExperience</i> puts all of your experience in the grave. On by default. Turn it off and experience drops the normal way.</li>
      <li><i>graves.ownerOnly</i> makes it so only the player who died, or someone in creative, can open or break a grave. Off by default.</li>
      <li><i>graves.searchRadius</i> is how far from where you died it looks for room for a grave. 4 blocks by default.</li>
    </ul>
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Util | Graves'
})
</script>
