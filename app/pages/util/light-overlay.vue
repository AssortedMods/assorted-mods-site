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
      You can change the key in the controls menu. The config sets how far around you it reaches, 16
      blocks by default, and can hide the green spots so only the unsafe ones show.
    </p>
    <p>
      This one only needs to be in your own game, so it works on any server.
    </p>
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Util | Light Overlay'
})
</script>
