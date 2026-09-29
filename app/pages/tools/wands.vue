<template>
  <PartPage
    family="tools"
    part="wands"
  >
    <p>
      This mod adds 3 types of Magic Wands (Building Wands, Mining Wands, and Breaking Wands). Each
      wand type has its own special modes that do special things based on what mode the wand is
      currently in. Each wand will have a tooltip with what mode it currently is in. If you want to
      cycle through the allowed modes click <b>Z</b> by default. A chat message with the new mode
      should appear. The key sits under Assorted Mods in Controls.
    </p>
    <img src="\mods\tools\wands.webp">
    <p>
      To get started right click a block and click on another block if the current mode and area
      used on is allowed then it will perform <i>magic</i>. A wand will tell you when you have picked
      too much, when the corners do not match, or when you do not have the blocks to finish the job.
      Nothing happens until it can be done properly. There are also a few other things in the
      mods config that change different things. Go experiment and have fun! :D
    </p>
    <SectionHeading name="basic">
      Basic Wands
    </SectionHeading>
    <p>
      These are the 3 types of regular wands available. The Breaking Wand is for destruction and
      will not give any drops. The Mining Wand helps mine and will make blocks drop. The Building
      Wand helps you build with different modes for different ways to fill in the area given.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      <Recipe id="assortedwands:building_wand" />
      <Recipe id="assortedwands:breaking_wand" />
      <Recipe id="assortedwands:mining_wand" />
    </div>
    <SectionHeading name="reinforced">
      Reinforced Wands
    </SectionHeading>
    <p>
      These are the 3 types of reinforced wands available. These wands allow you to work more by
      giving the wands more uses as well as adding extras to the possible modes. Filling a cave,
      flooding a space with water, or pouring lava into one, and surface mining, all need a
      reinforced wand.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      <Recipe id="assortedwands:reinforced_building_wand" />
      <Recipe id="assortedwands:reinforced_breaking_wand" />
      <Recipe id="assortedwands:reinforced_mining_wand" />
    </div>

    <SectionHeading name="config">
      Config
    </SectionHeading>
    <p>
      These are in the <i class="text-gray-600">assortedwands-common</i> config file. They are read once at startup, so changes need a
      restart.
    </p>
    <ul class="list-disc list-outside mx-6">
      <li><i>wands.freeBuildMode</i> lets the building wands build without using up any blocks. Off by default.</li>
      <li><i>wands.bedrockBreaking</i> lets the breaking wands break bedrock. Off by default.</li>
      <li><i>wands.easyMiningObsidian</i> lets the mining wands mine obsidian. Off by default.</li>
    </ul>
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Tools | Wands'
})
</script>
