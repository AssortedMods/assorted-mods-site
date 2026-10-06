<template>
  <PartPage
    family="tech"
    part="bridges"
  >
    <p>
      laser bridges sound pretty cool right?! Well here is a variety of different Laser bridges to
      choose from.
    </p>
    <GalleryShot name="bridges" />

    <SectionHeading name="bridges">
      Bridges
    </SectionHeading>
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      <Recipe id="assortedbridges:bridge_control_laser" />
      <Recipe id="assortedbridges:bridge_control_accel" />
      <Recipe id="assortedbridges:bridge_control_trick" />
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedbridges:bridge_control_death" />
      <Recipe id="assortedbridges:bridge_control_gravity" />
    </div>

    <p>
      There are 5 different types of bridges to choose from. For a description of what each one can
      do check below.
    </p>
    <ul class="list-disc list-inside">
      <li>
        <b>Laser</b> - Sends out bridge blocks that can be walked on top of for a popup bridge
      </li>
      <li>
        <b>Accel</b> - Sends out bridge blocks that can be walked on top of as well as provides a
        speed boost when walked on
      </li>
      <li>
        <b>Trick</b> - Sends out bridge blocks that have no collision so entities will fall through
        them
      </li>
      <li>
        <b>Death</b> - Sends out bridge blocks that have no collision so entities will fall through
        them and hurts entities that are inside
      </li>
      <li>
        <b>Gravity Lift</b> - Sends out bridge blocks that have no collision but when walked into
        will start sending entities in the direction they are facing.
      </li>
    </ul>

    <SectionHeading name="camo">
      Bridge Camo
    </SectionHeading>
    <p>
      If you right click on a bridge with a supported block the bridge blocks will be changed to
      look like that block. Shift Right-Click with an empty hand to clear the saved block.
    </p>
    <GalleryShot name="block-look" />

    <SectionHeading name="config">
      Config
    </SectionHeading>
    <p>
      These are in the <i class="text-gray-600">assortedbridges-common</i> config file.
    </p>
    <ul class="list-disc list-outside mx-6">
      <li><i>bridges.bridgeMaxLength</i> is how far a bridge can reach. 128 blocks by default.</li>
    </ul>
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Tech | Bridges'
})
</script>
