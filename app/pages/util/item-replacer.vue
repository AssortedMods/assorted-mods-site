<template>
  <PartPage
    family="util"
    part="item-replacer"
  >
    <p>
      When the stack in your hand runs out or your tool breaks, another from your inventory takes its
      place.
    </p>
    <img src="\mods\util\item-replacer.webp">
    <p>
      It only fills the slot when it ran out on its own. Dropping a stack, moving it to your offhand or
      moving it around in your inventory leaves the slot empty.
    </p>
    <img src="\mods\util\item-replacer-demo.webp">
    <p>
      This one only needs to be in your own game. It swaps the items the same way you would by hand,
      so it works on any server.
    </p>
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Util | Item Replacer'
})
</script>
