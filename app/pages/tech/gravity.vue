<template>
  <PartPage
    family="tech"
    part="gravity"
  >
    <p>
      Have you wanted to control the movement of entities in a range. Then you can with these blocks
      below! All gravity blocks can be Right-Clicked to adjust the range that it has. If you would
      like to see the current range you can Right-Click on them with a Redstone Torch in your hand
      to toggle the bounds.
    </p>
    <GalleryShot name="ranges" />

    <SectionHeading name="attractor">
      Attractor
    </SectionHeading>
    <p>
      The Attractor as the name suggests pulls entities towards it when provided with a redstone
      signal. The directional variant only pulls entities in the range in the direction the block is
      placed.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedgravity:attractor" />
      <Recipe id="assortedgravity:attractor_directional" />
    </div>

    <SectionHeading name="repulsor">
      Repulsor
    </SectionHeading>
    <p>
      The Repulsor as the name suggests pushes entities away from it when provided with a redstone
      signal. The directional variant only pushes entities in the range in the direction the block
      is placed.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedgravity:repulsor" />
      <Recipe id="assortedgravity:repulsor_directional" />
    </div>

    <SectionHeading name="gravitor">
      Gravitor
    </SectionHeading>
    <p>
      The Gravitor is a block that when powered makes entities float inside the range. The
      directional variant only floats entities in the range in the direction the block is placed.
    </p>
    <GalleryShot name="gravity" />
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedgravity:gravitor" />
      <Recipe id="assortedgravity:gravitor_directional" />
    </div>

    <SectionHeading name="gravity_boots">
      Gravity Boots
    </SectionHeading>
    <p>
      Gravity Boots if they are on a player will stop the effects of all of the gravity blocks
      from doing anything to the player. They also will negate the Gravity Lift from
      <NuxtLink
        class="page-link"
        to="/tech/bridges"
      >
        Bridges
      </NuxtLink>.
    </p>
    <Recipe id="assortedgravity:gravity_boots" />

    <SectionHeading name="config">
      Config
    </SectionHeading>
    <p>
      These are in the <i class="text-gray-600">assortedgravity-common</i> config file.
    </p>
    <ul class="list-disc list-outside mx-6">
      <li><i>gravity.attractRepulseSpeed</i> is how fast the attractor and repulsor move things. 0.13 by default.</li>
      <li><i>gravity.attractRepulseModSpeed</i> is the extra speed they get the higher their range is set. 0.065 by default.</li>
      <li><i>gravity.gravitorSpeed</i> is how fast the gravitor lifts things up. 0.1 by default.</li>
      <li><i>gravity.gravityMaxRange</i> is the highest range the gravity blocks can be set to. 15 blocks by default.</li>
    </ul>
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Tech | Gravity'
})
</script>
