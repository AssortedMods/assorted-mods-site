<template>
  <PartPage
    family="tech"
    part="elevators"
  >
    <SectionHeading name="elevator">
      Elevator
    </SectionHeading>
    <p>
      A moving platform that can go up and down from stop to stop, carrying anything standing on it
      and hurting anything it comes down on. Place up to 3 by 3 side by side and they travel
      together. Stand on it and jump to go up or sneak to go down.
    </p>
    <p>
      It stops at every landing, and at the ends of the shaft which is the bottom, or two blocks
      under the ceiling.
    </p>
    <Recipe id="assortedelevators:elevator" />

    <SectionHeading name="elevator_landing">
      Elevator Landing
    </SectionHeading>
    <p>
      Build one into the side of the shaft, one block above a floor, to make that floor a stop. A
      redstone pulse on the block will call the elevator to that floor. A comparator reading it gives
      15 while the car is there.
    </p>
    <Recipe id="assortedelevators:elevator_landing" />

    <SectionHeading name="instant_elevator">
      Instant Elevator
    </SectionHeading>
    <p>
      Stand on one and jump to be taken straight to the next instant elevator of the same color
      above, or sneak to go to the next one below. Hold jump to keep going up floor after floor.
    </p>
    <p>
      Dye one to change its color so you can go to different levels in the same column. There has to
      be room to stand on the one you are sent to.
    </p>
    <GalleryShot name="instant" />
    <Recipe id="assortedelevators:instant_elevator" />

    <SectionHeading name="camouflage">
      Camouflage
    </SectionHeading>
    <p>
      The camouflaged elevator can look like any solid block, and keeps its look from stop to stop.
      Right click a full block on it to disguise it and sneak and use it with an empty hand to take
      the disguise off. The block is not used up.
    </p>
    <p>
      The camouflaged elevator landing can be disguised as the wall it is built into the same way. It
      still calls the car and still tells a comparator when the car is there.
    </p>
    <p>
      The camouflaged instant elevator works the same way too. Dye it like any other instant
      elevator.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      <Recipe id="assortedelevators:camouflaged_elevator" />
      <Recipe id="assortedelevators:camouflaged_elevator_landing" />
      <Recipe id="assortedelevators:camouflaged_instant_elevator" />
    </div>

    <SectionHeading name="config">
      Config
    </SectionHeading>
    <p>
      These are in the <i class="text-gray-600">assortedelevators-common</i> config file.
    </p>
    <ul class="list-disc list-outside mx-6">
      <li><i>elevators.elevatorSpeed</i> is how many blocks the elevator moves each tick. 0.2 by default.</li>
      <li><i>elevators.elevatorMaxTravel</i> is the furthest the elevator goes in one trip when the shaft keeps going. 64 blocks by default.</li>
      <li><i>elevators.instantElevatorRange</i> is how far away the next instant elevator can be and still be reached. 64 blocks by default.</li>
    </ul>
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Tech | Elevators'
})
</script>
