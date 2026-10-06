<template>
  <PartPage
    family="tech"
    part="redstone"
  >
    <SectionHeading name="glowstone">
      Glowstone Torch
    </SectionHeading>
    <p>
      A glowstone torch lights up when it is powered and goes dark when it is not, the way a redstone
      lamp does, but you can still walk through it like any torch.
    </p>
    <GalleryShot name="glowstone-torch" />
    <Recipe id="assortedredstone:glowstone_torch" />

    <SectionHeading name="flip_flop">
      Flip Flop Torch
    </SectionHeading>
    <p>
      Works just like a flip-flop logic gate, provide it power and it holds it. Power it again and it no
      longer is providing power.
    </p>
    <GalleryShot name="flip-flop" />
    <Recipe id="assortedredstone:flip_flop_torch" />
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Tech | Redstone'
})
</script>
