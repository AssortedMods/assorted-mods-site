<template>
  <PartPage
    family="tech"
    part="grates"
  >
    <p>
      A grate you can walk across that items drop straight through. Players and mobs stand on it,
      but any item dropped on it falls through.
    </p>
    <img src="\mods\tech\grates.webp">
    <p>
      There is one for iron, gold, copper and every metal
      <NuxtLink
        class="page-link"
        to="/core"
      >
        Assorted Core
      </NuxtLink>
      adds.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedgrates:iron_item_grate" />
      <Recipe id="assortedgrates:gold_item_grate" />
    </div>

    <h2><a name="copper">Copper Item Grates</a></h2>
    <p>
      A copper grate weathers where it stands, through exposed, weathered and oxidized, like any
      other copper.
    </p>
    <p>
      An axe scrapes a stage back off it, and a honeycomb waxes it to hold the stage it is at.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedgrates:copper_item_grate" />
      <Recipe id="assortedgrates:waxed_copper_item_grate_from_honeycomb" />
    </div>
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Tech | Grates'
})
</script>
