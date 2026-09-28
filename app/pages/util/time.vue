<template>
  <PartPage
    family="util"
    part="time"
  >
    <p>
      Press H to slide down a clock with the day and time in the world. Press it again for the date and
      time where you are, press it again for both, and once more to hide it.
    </p>
    <img src="\mods\util\time.webp">
    <p>
      In the Nether the world's time cannot be told.
    </p>
    <img src="\mods\util\time-demo.webp">
    <p>
      You can change the key in the controls menu. The clock uses 24 hours by default and can be set
      to AM and PM in the config.
    </p>
    <p>
      This one only needs to be in your own game, so it works on any server.
    </p>
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Util | Time'
})
</script>
