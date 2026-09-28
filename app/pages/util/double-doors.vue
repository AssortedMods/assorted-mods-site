<template>
  <PartPage
    family="util"
    part="double-doors"
  >
    <p>
      You can have two doors side by side and opening one door will open the other. The same goes for
      a large group of trapdoors, and for fence gates stacked on or beside each other.
    </p>
    <img src="\mods\util\double-doors.webp">
    <p>
      Sneak to open just one. Doors, trapdoors and gates from other mods should work too.
    </p>
    <img src="\mods\util\double-doors-demo.webp">

    <h2><a name="config">Config</a></h2>
    <p>
      The server decides which of doors, trapdoors and fence gates open together, and how many
      trapdoors or gates one click can open. It is 16 by default.
    </p>
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Util | Double Doors'
})
</script>
