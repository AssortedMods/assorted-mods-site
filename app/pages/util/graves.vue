<template>
  <PartPage
    family="util"
    part="graves"
  >
    <p>
      When you die, everything you carried and all of your experience goes into a grave where you
      died. Items with Curse of Vanishing still vanish.
    </p>
    <img src="\mods\util\graves.webp">
    <p>
      You get a message in chat with where your grave is. If there is no room for a grave nearby your
      things drop on the ground like normal.
    </p>

    <h2><a name="restore">Getting It Back</a></h2>
    <p>
      Right click your grave to get everything back where it was, in the same slots.
    </p>
    <img src="\mods\util\graves-demo.webp">
    <p>
      Breaking it spills it all on the ground instead. Explosions, pistons and bosses cannot move or
      break a grave.
    </p>

    <h2><a name="config">Config</a></h2>
    <p>
      The server decides how graves work. It can leave experience to drop the normal way, make it so
      only the player who died can open or break their grave, and change how far from where you died
      it looks for room.
    </p>
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Util | Graves'
})
</script>
