<template>
  <PartPage
    family="util"
    part="damage-numbers"
  >
    <p>
      Damage and healing pop off creatures as numbers, with what caused it beside them.
    </p>
    <p>
      A hit by a player will say the weapon, and a hit by a creature names the creature. Other damage
      shows where it came from, like fire, falling, drowning or an explosion.
    </p>
    <GalleryShot name="sources" />
    <p>
      This one only needs to be in your own game, so it works on any server.
    </p>

    <SectionHeading name="config">
      Config
    </SectionHeading>
    <p>
      These are in the <i class="text-gray-600">assorteddamagenumbers-client</i> config file. They only change your own game, so everyone can set
      their own.
    </p>
    <ul class="list-disc list-outside mx-6">
      <li><i>damageNumbers.showSource</i> shows what did the damage beside the number. On by default.</li>
      <li><i>damageNumbers.showHealing</i> shows healing as well as damage. On by default.</li>
      <li><i>damageNumbers.range</i> is how far away numbers still show. 24 blocks by default.</li>
      <li><i>damageNumbers.lifetime</i> is how long a number stays in ticks. 40 by default, which is 2 seconds.</li>
    </ul>
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Util | Damage Numbers'
})
</script>
