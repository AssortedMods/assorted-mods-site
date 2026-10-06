<template>
  <PartPage
    family="tech"
    part="sensors"
  >
    <p>
      Sensors are block types that scan the area they are facing and will become powered if they see
      an entity of their type in view of their range. You are able to adjust the range of the sensor
      by right-clicking and shift-right clicking on them with an empty hand.
    </p>
    <GalleryShot name="sensors" />
    <p>
      You can also view the range by right clicking on them with a redstone torch. The area will be
      green if there are no blocks blocking the range and red if so.
    </p>
    <PageFigure
      src="/figures/tech/sensor-range.webp"
      caption="Two sensors showing their ranges, green where the view is clear and red where the sand blocks it."
    />
    <p>There are many different types of sensors each one follows the same recipe pattern.</p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedsensors:iron_sensor" />
      <Recipe id="assortedsensors:emerald_sensor" />
    </div>
    <SectionHeading name="types">
      Types
    </SectionHeading>
    <p>
      The current list of sensor types are below, some use entity_type tags to check if any given
      entity is within the current tag.
    </p>
    <ul class="list-disc list-inside">
      <li>Wood - Any entity</li>
      <li>Stone - Living entities</li>
      <li>Iron - Player entities</li>
      <li>Mossy Cobblestone - Monster entities</li>
      <li>
        Prismarine - Water Animals and any entities in the entity_type tag
        (<b>assortedsensors:sensors/water</b>)
      </li>
      <li>Gold - Item entities</li>
      <li>Emerald - Villager entities</li>
      <li>Netherrack - Any entities in the entity_type tag (<b>assortedsensors:sensors/nether</b>)</li>
      <li>Cobweb - Any entities in the entity_type tag (<b>assortedsensors:sensors/arthropods</b>)</li>
      <li>End Stone - Any entities in the entity_type tag (<b>assortedsensors:sensors/end</b>)</li>
      <li>Hay Bale - Any entities in the entity_type tag (<b>assortedsensors:sensors/pets</b>)</li>
      <li>Feather - Any entities in the entity_type tag (<b>assortedsensors:sensors/flying</b>)</li>
    </ul>
    <SectionHeading name="gps">
      GPS Sensors
    </SectionHeading>
    <p>
      Right click a block with a GPS to store the space in front of it. Sneak and use it in the air
      to forget it.
    </p>
    <Recipe id="assortedsensors:gps" />
    <p>
      A GPS sensor watches the position a GPS stored rather than the space in front of it. Right click it and put the GPS in the slot at the top
      right. From its screen you choose whether it detects players, mobs or items, and can narrow it
      to one player, one kind of mob or one item.
    </p>
    <GalleryShot name="watching" />
    <GalleryShot name="gps-sensor" />
    <p>
      The upgraded GPS sensor can sit farther from the position it watches and has an adjustable
      range. Its filter takes a list of up to 6 entries, and an entry starting with <b>#</b> is a
      tag, like <b>#minecraft:undead</b> for every undead mob or <b>#minecraft:logs</b> for every
      log.
    </p>
    <GalleryShot name="upgraded-gps-sensor" />
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedsensors:gps_sensor" />
      <Recipe id="assortedsensors:upgraded_gps_sensor" />
    </div>

    <SectionHeading name="config">
      Config
    </SectionHeading>
    <p>
      These are in the <i class="text-gray-600">assortedsensors-common</i> config file.
    </p>
    <ul class="list-disc list-outside mx-6">
      <li><i>gps.gpsSensorRange</i> is how far away the spot a GPS sensor watches can be. 7 blocks by default.</li>
      <li><i>gps.upgradedGpsSensorRange</i> is the same for the upgraded GPS sensor. 11 blocks by default.</li>
      <li><i>gps.upgradedGpsSensorMaxRadius</i> is how big an area around its spot the upgraded GPS sensor can watch. 4 blocks by default.</li>
    </ul>
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Tech | Sensors'
})
</script>
