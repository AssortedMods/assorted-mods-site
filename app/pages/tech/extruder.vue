<template>
  <PartPage
    family="tech"
    part="extruder"
  >
    <p>
      The extruder is a tunnelling machine. Place it, then right click it to fuel it, choose its
      direction and start or stop it. Punching it with an empty hand also starts or stops it. It
      moves in a straight line, mining whatever the material it is made of can mine, and lays a
      block from its top slots behind itself at every step.
    </p>
    <p>
      Its screen has the fuel slot, the direction and start buttons, and the slots for the blocks it
      lays behind itself.
    </p>
    <GalleryShot name="screen" />
    <SectionHeading name="materials">
      Materials
    </SectionHeading>
    <p>
      An extruder is made from a pickaxe, shovel and axe of one material and mines only what those
      tools can mine. There is one for every material that
      <NuxtLink
        class="page-link"
        to="/core"
      >
        Assorted Core
      </NuxtLink>
      supports, using the tools from
      <NuxtLink
        class="page-link"
        to="/tools/gear-sets"
      >
        Assorted Gear Sets
      </NuxtLink>
      for the materials vanilla does not have. The shovel and axe can go on either side.
    </p>
    <p>
      The wood extruder starts the chain. Every other extruder is made from an extruder of the level
      below surrounded by its own tools, and each level is faster, more efficient and has more
      inventory slots than the one before.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      <Recipe id="assortedextruder:wood_extruder" />
      <Recipe id="assortedextruder:stone_extruder" />
      <Recipe id="assortedextruder:iron_extruder" />
      <Recipe id="assortedextruder:diamond_extruder" />
      <Recipe id="assortedextruder:netherite_extruder" />
    </div>
    <SectionHeading name="levels">
      Levels
    </SectionHeading>
    <ul class="list-disc list-inside">
      <li>Level 0 - Wood, Gold</li>
      <li>Level 1 - Stone, Copper, Tin, Aluminum</li>
      <li>Level 2 - Iron, Amethyst, Nickel, Lead, Bronze, Invar, Ruby, Sapphire, Topaz, Peridot</li>
      <li>Level 3 - Diamond, Emerald, Silver, Platinum, Electrum, Steel</li>
      <li>Level 4 - Netherite</li>
    </ul>

    <SectionHeading name="config">
      Config
    </SectionHeading>
    <p>
      These are in the <i class="text-gray-600">assortedextruder-common</i> config file.
    </p>
    <ul class="list-disc list-outside mx-6">
      <li><i>extruder.moveSpeed</i> is how many blocks the extruder moves each tick before its material changes it. 0.1 by default.</li>
      <li><i>extruder.fuelPerMinedBlock</i> is the fuel it uses for every block it mines. 400 by default, plus one every tick it runs.</li>
      <li><i>extruder.fuelPerExtrudedBlock</i> is the fuel it uses for every block it places behind itself. 200 by default.</li>
    </ul>
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Tech | Extruder'
})
</script>
