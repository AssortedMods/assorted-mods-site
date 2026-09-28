<template>
  <PartPage
    family="tech"
    part="redstone"
  >
    <img src="\mods\tech\redstone.webp">

    <h2><a name="glowstone">Glowstone Torch</a></h2>
    <p>
      A glowstone torch lights up when it is powered and goes dark when it is not, the way a redstone
      lamp does, but you can still walk through it like any torch.
    </p>
    <Recipe id="assortedredstone:glowstone_torch" />

    <h2><a name="flip_flop">Flip Flop Torch</a></h2>
    <p>
      Works just like a flip-flop logic gate, provide it power and it holds it. Power it again and it no
      longer is providing power.
    </p>
    <Recipe id="assortedredstone:flip_flop_torch" />
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Tech | Redstone'
})
</script>
