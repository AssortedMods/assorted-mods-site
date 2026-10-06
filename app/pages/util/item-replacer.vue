<template>
  <PartPage
    family="util"
    part="item-replacer"
  >
    <p>
      When the stack in your hand runs out or your tool breaks, the same item from your inventory takes
      its place. It takes from your inventory before your hotbar, so your hotbar stays the way you set it
      up.
    </p>
    <p>
      A broken tool is swapped for one with the same enchantments and name if you have one, and the most
      worn one goes first so your tools get used up in order. Blocks, food and potions only swap for an
      exact match, so a Potion of Healing is never refilled with Poison.
    </p>
    <p>
      Finish a potion or a bowl of stew and a full one takes the place of the empty bottle or bowl.
    </p>
    <p>
      It only fills the slot when it ran out on its own. Dropping a stack, moving it to your offhand or
      moving it around in your inventory leaves the slot empty.
    </p>
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
