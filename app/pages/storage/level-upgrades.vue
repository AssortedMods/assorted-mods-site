<template>
  <PartPage
    family="storage"
    part="level-upgrades"
  >
    <p>
      A level upgrade raises a container one material at a time, in place, without unpacking it.
      This way your items can stay inside. They work on the chests, barrels, hoppers and shulker
      boxes from the other Assorted Storage mods, and on the vanilla ones too.
    </p>

    <SectionHeading name="upgrades">
      Upgrades
    </SectionHeading>
    <p>
      Eight of a material around a piece of paper makes the level upgrade for that material. With
      <NuxtLink
        class="page-link"
        to="/storage/crates"
      >
        Assorted Crates
      </NuxtLink>
      installed you can use a Blank Upgrade in place of the paper.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedlevelupgrades:level_upgrade_iron" />
      <Recipe id="assortedlevelupgrades:level_upgrade_iron_from_blank_upgrade" />
    </div>

    <SectionHeading name="using">
      Using
    </SectionHeading>
    <p>
      Upgrades work by <b>shift-right clicking</b> on the block you want to upgrade. Each upgrade
      names the material it upgrades to, and its tooltip lists what level it will become. An upgrade
      will not skip a level, so working up from stone means working through the order.
    </p>
    <p>
      Every container and upgrade has a line on its tooltip indicating what its Storage Level is to
      make it a bit easier to know what the next one in line is. The storage levels range from
      <b>0 - 5</b>. A normal vanilla block being a <b>0</b> and a Netherite block being a level
      <b>5</b>.
    </p>
    <img src="\mods\storage\storage_level_tooltip.png">
    <p>
      Storage crates from
      <NuxtLink
        class="page-link"
        to="/storage/crates#level_upgrades"
      >
        Assorted Crates
      </NuxtLink>
      take level upgrades as well, where each one adds to how much the crate can hold.
    </p>
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Storage | Level Upgrades'
})
</script>
