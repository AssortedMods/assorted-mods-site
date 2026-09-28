<template>
  <PartPage
    family="util"
    part="damage-numbers"
  >
    <p>
      Damage and healing pop off creatures as numbers, with what caused it beside them.
    </p>
    <img src="\mods\util\damage-numbers.webp">
    <p>
      A hit by a player will say the weapon, and a hit by a creature names the creature. Other damage
      shows where it came from, like fire, falling, drowning or an explosion.
    </p>
    <img src="\mods\util\damage-numbers-demo.webp">
    <p>
      The config can hide the cause or the healing numbers, and change how far away numbers show and
      how long they stay.
    </p>
    <p>
      This one only needs to be in your own game, so it works on any server.
    </p>
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Util | Damage Numbers'
})
</script>
