<template>
  <PartPage
    family="core"
    part="machines"
  >
    <p>
      Assorted Machines adds two machines to process ores. One allows you to break ores and ingots
      down into the dust forms. The other allows you to smelt items together to create alloys.
    </p>
    <img src="\mods\core\machines.webp">
    <p>
      The machines added each have 4 tiers which determine how fast they process. The 4 tiers are
      Basic, Intermediate, Advanced, and Expert. <b>All machines are setup to support JEI.</b>
    </p>
    <h2><a name="machine_core">Machine Core</a></h2>
    <p>
      To get started building the machines you will first need to craft a machine core that is used
      as the base for all machines. It can be made with copper ingots, or with aluminum ingots when a
      mod like Assorted Ores adds them.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedmachines:machine_core" />
      <Recipe id="assortedmachines:machine_core_from_copper" />
    </div>

    <h2><a name="grinding_mill">Grinding Mill</a></h2>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedmachines:basic_grinding_mill" />
      <Recipe id="assortedmachines:intermediate_grinding_mill" />
      <Recipe id="assortedmachines:advanced_grinding_mill" />
      <Recipe id="assortedmachines:expert_grinding_mill" />
    </div>
    <p>
      The grinding mill can be used to break ores and ingots down farther. If using an ore it will
      usually double the output of what you would get if using a furnace. Though for most metals
      this will require you to smelt the output since it breaks it down into dust instead of ingots.
    </p>

    <p>
      The grinding mill requires an iron tier or better pickaxe in the tool slot. This will allow it
      to be able to break open the ores. Besides a tool you will need a fuel source to power it. This can be any
      fuel that furnaces can use. You are able to pipe in items via the top and sides with hoppers.
      You can use a hopper underneath the Grinding Mill to pull out the output.
    </p>

    <h3>Example Grinding Mill recipe:</h3>
    <div class="flex flex-wrap gap-4">
      <Recipe id="assortedmachines:iron_dust_from_ingot" />
      <Recipe id="assortedmachines:iron_dust" />
    </div>

    <h2><a name="alloy_forge">Alloy Forge</a></h2>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedmachines:basic_alloy_forge" />
      <Recipe id="assortedmachines:intermediate_alloy_forge" />
      <Recipe id="assortedmachines:advanced_alloy_forge" />
      <Recipe id="assortedmachines:expert_alloy_forge" />
    </div>

    <p>
      The alloy forge is used to create new metals by combining materials or metals together and
      heating them up. It usually requires the dust of most metals as it is easier to heat up than
      the full ingots.
    </p>
    <p>
      The alloy forge requires two inputs and a fuel source. The fuel can be any that the furnace
      supports. You are able to pipe in items via the top and sides with hoppers. You can use a
      hopper underneath the Alloy Forge to pull out the output.
    </p>

    <h2><a name="alloys">Alloys</a></h2>
    <p>
      Assorted Machines adds support for the Alloy Forge to create Bronze, Electrum, Invar, and
      Steel alloys. They are shown below. Each alloy can be used to create ingots, nuggets, dusts,
      gears, and storage blocks.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedmachines:bronze_ingot" />
      <Recipe id="assortedmachines:electrum_ingot" />
      <Recipe id="assortedmachines:invar_ingot" />
      <Recipe id="assortedmachines:steel_ingot" />
    </div>

    <h2><a name="dusts_and_gears">Dusts and Gears</a></h2>
    <p>
      Iron, gold, and copper also get a dust and a gear here. Every metal can be made into a gear.
      Machines and the other Assorted mods can be built out of them.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedmachines:iron_gear" />
      <Recipe id="assortedmachines:steel_gear" />
    </div>
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Core | Machines'
})
</script>
