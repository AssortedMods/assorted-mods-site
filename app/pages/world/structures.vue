<template>
  <PartPage
    family="world"
    part="structures"
  >
    <p>
      Structures from a past civilization are scattered across the world. Some still hold treasures
      that were left behind while others have been picked clean.
    </p>
    <p>
      Every structure can be configured if you would like to change how often it spawns. They all
      follow the same pattern for making adjustments.
    </p>
    <h2><a name="runes">Runes</a></h2>
    <p>
      Every structure has a chance of holding one of the 16 types of <b>Runes</b>. Each one gives a
      different status effect to whoever stands on or uses it. You will need to find them all to
      figure out which ones are the best.
    </p>
    <img src="\mods\world\runes.png">
    <h2><a name="pyramid">Pyramids</a></h2>
    <p>
      Pyramids are large structures that have started to decay over the years. Most have many levels
      but can be very rewarding.
    </p>
    <img src="\mods\world\pyramid.png">
    <h2><a name="fountain">Fountains</a></h2>
    <p>
      Fountains are large stone structures surrounded by flowing water. They can contain spawners and
      rare loot.
    </p>
    <img src="\mods\world\fountain.png">
    <h2><a name="snowball">Snowballs</a></h2>
    <p>Snowballs are massive snow and ice structures. They closely resemble massive snowmen.</p>
    <img src="\mods\world\snowball.png">
    <h2><a name="waterdome">Water Domes</a></h2>
    <p>
      Water Domes are found on the bottom of the ocean and can contain Runes. Some rare ones are made
      of uncommon materials.
    </p>
    <img src="\mods\world\water_dome.png">
    <h2><a name="spire">Spires</a></h2>
    <p>
      Spires are natural structures that reach towards the sky. These can contain runes and very
      rarely are 'death spires'.
    </p>
    <img src="\mods\world\spires.png">
    <h2><a name="decayedruins">Decayed Ruins</a></h2>
    <p>
      Ruins have decayed greatly over the years but can still contain treasures of old.
    </p>
    <img src="\mods\world\ruins.png">
    <h2><a name="sandstonepillars">Sandstone Pillars</a></h2>
    <p>
      Sandstone pillars stand out of the dunes in the desert. Some hide suspicious sand or a rune worth
      digging for.
    </p>
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'World | Structures'
})
</script>
