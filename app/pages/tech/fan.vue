<template>
  <PartPage
    family="tech"
    part="fan"
  >
    <p>
      Fans are blocks that allow you to push/pull or blow/suck entities. It does this by the power
      of AIR!
    </p>
    <Recipe id="assortedfan:fan" />

    <SectionHeading name="settings">
      Settings
    </SectionHeading>
    <p>
      Fans can be configured however you like by using the GUI that opens when you right click on a
      fan. From within the GUI you can adjust the mode `Blow/Suck` as well as adjust the range. The
      range that it is set to directly affects the speed at which entities are moved along.
    </p>
    <GalleryShot name="fan-settings" />
    <p>
      Fans can be turned off by powering them and when they no longer have a redstone power they
      will go back to whatever they were previously set to.
    </p>

    <SectionHeading name="config">
      Config
    </SectionHeading>
    <p>
      These are in the <i class="text-gray-600">assortedfan-common</i> config file.
    </p>
    <ul class="list-disc list-outside mx-6">
      <li><i>fans.fanSpeed</i> is how fast a fan pushes or pulls things. 0.13 by default.</li>
      <li><i>fans.fanModSpeed</i> is the extra speed a fan gets the higher its range is set. 0.065 by default.</li>
      <li><i>fans.fanMaxRange</i> is the highest range a fan can be set to. 32 blocks by default.</li>
    </ul>
    <p>
      These are in the <i class="text-gray-600">assortedfan-client</i> config file. They only change your own game, so everyone can set
      their own.
    </p>
    <ul class="list-disc list-outside mx-6">
      <li><i>fans.showFanParticles</i> shows the air coming out of a fan. On by default.</li>
    </ul>
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Tech | Fan'
})
</script>
