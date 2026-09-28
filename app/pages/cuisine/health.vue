<template>
  <PartPage
    family="cuisine"
    part="health"
  >
    <img src="\mods\cuisine\health.webp">

    <h2><a name="sweets">Sweets</a></h2>
    <p>
      Powdered sugar makes sweets, and powdered sweets make some candy. Powdered sweets are also in
      the recipe for the <a href="#packs">super health pack</a>.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedhealth:powered_sugar" />
      <Recipe id="assortedhealth:sweets" />
      <Recipe id="assortedhealth:powered_sweets" />
    </div>

    <h2><a name="packs">Bandages and Packs</a></h2>
    <p>
      These three can instantly heal you. Each one takes a moment to apply, and being hit interrupts it. None of them do anything
      while you are already on full health.
    </p>
    <p>
      The bandage is the cheapest one and heals the least, the health pack is in the middle, and the
      super pack needs powdered sweets but is the most powerful.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedhealth:bandage" />
      <Recipe id="assortedhealth:healthpack" />
      <Recipe id="assortedhealth:healthpack_super" />
    </div>
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Cuisine | Health'
})
</script>
