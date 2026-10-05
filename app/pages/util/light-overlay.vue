<template>
  <PartPage
    family="util"
    part="light-overlay"
  >
    <p>
      Press F7 to show the block light on the ground around you. Press it again to turn it off.
    </p>
    <img src="\mods\util\light-overlay.webp">
    <p>
      Red is where a monster can spawn at any time, yellow where one can only at night or in a storm,
      and green where one never can.
    </p>
    <img src="\mods\util\light-overlay-demo.webp">
    <p>
      You can change the key in the controls menu.
    </p>
    <p>
      This one only needs to be in your own game, so it works on any server.
    </p>

    <SectionHeading name="config">
      Config
    </SectionHeading>
    <p>
      These are in the <i class="text-gray-600">assortedlightoverlay-client</i> config file. They only change your own game, so everyone can set
      their own.
    </p>
    <ul class="list-disc list-outside mx-6">
      <li><i>lightOverlay.radius</i> is how many blocks around you the overlay reaches. 16 by default.</li>
      <li><i>lightOverlay.showSafe</i> shows the green spots where monsters never spawn. On by default. Turn it off to only see the unsafe spots.</li>
    </ul>
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Util | Light Overlay'
})
</script>
