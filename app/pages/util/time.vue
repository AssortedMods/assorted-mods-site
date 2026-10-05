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
      You can change the key in the controls menu.
    </p>
    <p>
      This one only needs to be in your own game, so it works on any server.
    </p>

    <SectionHeading name="config">
      Config
    </SectionHeading>
    <p>
      These are in the <i class="text-gray-600">assortedtime-client</i> config file. They only change your own game, so everyone can set
      their own.
    </p>
    <ul class="list-disc list-outside mx-6">
      <li><i>time.twentyFourHour</i> uses a 24 hour clock. On by default. Turn it off for AM and PM.</li>
    </ul>
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Util | Time'
})
</script>
