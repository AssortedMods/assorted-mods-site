<template>
  <PartPage
    family="tools"
    part="ultimate-fist"
  >
    <p>
      The Ultimate Fist is an overpowered tool left behind by an ancient civilization. The fragments
      of which can be found across all three dimensions and are required to be able to craft it. All
      eight fragments and a nether star make the Ultimate Fist.
    </p>
    <GalleryShot name="chest" />
    <Recipe id="assortedultimatefist:ultimate_fist" />
    <GalleryShot name="crafting" />

    <p>
      The Ultimate Fist by default is absurdly powerful and can break blocks extremely fast and one
      shot many mobs. How strong it is can be changed in the config.
    </p>
    <GalleryShot name="mining" />

    <SectionHeading name="fragments">
      Fragments
    </SectionHeading>
    <table class="border-collapse border border-slate-500 table-fixed">
      <caption class="caption-bottom text-sm">
        The default fragment distribution across dimensions and chest loot.
      </caption>
      <thead>
        <tr>
          <th class="border border-slate-500 px-4">
            Dimension
          </th>
          <th class="border border-slate-500 px-4">
            Loot Tables
          </th>
          <th class="border border-slate-500 px-4 w-56">
            Fragment Pieces
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-slate-500 px-4">
            Overworld
          </td>
          <td class="border border-slate-500 px-4">
            <i>stronghold_corridor</i>, <i>stronghold_crossing</i>, <i>stronghold_library</i>,
            <i>woodland_mansion</i>, <i>underwater_ruin_big</i>, <i>underwater_ruin_small</i>, <i>ancient_city</i>
          </td>
          <td class="border border-slate-500 px-4 w-56">
            <ul class="list-disc list-inside">
              <li><strong>U</strong> Fragment</li>
              <li><strong>L</strong> Fragment</li>
              <li><strong>T</strong> Fragment</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td class="border border-slate-500 px-4">
            Nether
          </td>
          <td class="border border-slate-500 px-4">
            <i>nether_bridge</i>, <i>ruined_portal</i>
          </td>
          <td class="border border-slate-500 px-4 w-56">
            <ul class="list-disc list-inside">
              <li><strong>I</strong> Fragment</li>
              <li><strong>M</strong> Fragment</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td class="border border-slate-500 px-4">
            End
          </td>
          <td class="border border-slate-500 px-4">
            <i>end_city_treasure</i>
          </td>
          <td class="border border-slate-500 px-4 w-56">
            <ul class="list-disc list-inside">
              <li><strong>A</strong> Fragment</li>
              <li><strong>E</strong> Fragment</li>
              <li><strong>Unknown</strong> Fragment</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>

    <SectionHeading name="config">
      Config
    </SectionHeading>
    <p>
      These are in the <i class="text-gray-600">assortedultimatefist-common</i> config file. They are read once at startup, so changes need a
      restart.
    </p>
    <p>
      Its values are under <i>ultimate_fist.ultimate</i> and work the same way as the tool materials
      explained on the
      <NuxtLink
        class="page-link"
        to="/tools/gear-sets#tiers"
      >
        Gear Sets
      </NuxtLink> page. Some of them do nothing since it has no other tools or armor and can not be
      enchanted.
    </p>
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Tools | Ultimate Fist'
})
</script>
