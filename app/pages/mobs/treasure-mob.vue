<template>
  <PartPage
    family="mobs"
    part="treasure-mob"
  >
    <p>
      Now and then a chest walks off on its own. Treasure mobs turn up inside mineshafts, temples,
      strongholds, trial chambers, ancient cities, mansions, bastions, fortresses and end cities, and
      in the structures of
      <NuxtLink
        class="page-link"
        to="/world/structures"
      >
        Assorted Structures
      </NuxtLink>
      when it is installed.
    </p>
    <p>
      Each one carries what that place's own chests would hold, anything from bread to diamonds, and
      drops all of it when it dies.
    </p>
    <img src="\mods\mobs\treasure_mob.png">

    <SectionHeading name="taming">
      Taming
    </SectionHeading>
    <p>
      A wild one keeps away from players, but gold nuggets lure it in. Feed it nuggets and it may
      decide to stay.
    </p>
    <p>
      A tamed treasure mob follows you and sits when told to. Sneak and use it to open it as a chest.
    </p>
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Mobs | Treasure Mob'
})
</script>
