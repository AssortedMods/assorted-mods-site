<template>
  <PartPage
    family="core"
    part="ores"
  >
    <p>
      Assorted Ores adds many ores that can be found that contain metals or gems. The other Assorted
      mods use them in their recipes.
    </p>
    <h2><a name="metals">Metals</a></h2>
    <h3><b>Ores</b></h3>
    <p>
      <span class="muted">Every ore below has a deepslate variant and drops a raw ore instead of the
        block. Each raw ore can be crafted into a raw ore block.</span>
    </p>
    <ul class="list-disc list-inside">
      <li>Tin</li>
      <li>Silver</li>
      <li>Aluminum</li>
      <li>Nickel</li>
      <li>Platinum</li>
      <li>Lead</li>
    </ul>
    <p>
      All the metals listed can be used to create ingots, nuggets, dusts, gears, and storage blocks.
      Copper gets a nugget too. The grinding mill from Assorted Machines turns an ore into two dusts,
      and each one smelts back into an ingot.
    </p>
    <img src="\mods\core\metal_options.png">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedores:silver_ingot_storage_block" />
      <Recipe id="assortedores:silver_block" />
      <Recipe id="assortedores:silver_nugget" />
      <Recipe id="assortedores:silver_gear" />
    </div>
    <h2><a name="gems">Gems</a></h2>
    <ul class="list-disc list-inside">
      <li>Ruby</li>
      <li>Sapphire</li>
      <li>Topaz</li>
      <li>Peridot</li>
    </ul>
    <p>
      A gem ore mined without Silk Touch already drops its gem. Each gem can be used to create
      storage blocks of itself.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedores:topaz_block" />
      <Recipe id="assortedores:topaz_storage_block" />
    </div>
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Core | Ores'
})
</script>
