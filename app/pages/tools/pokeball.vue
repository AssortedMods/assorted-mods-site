<template>
  <PartPage
    family="tools"
    part="pokeball"
  >
    <p>
      Pokeballs are amazing items that when thrown and hit a mob capture the mob inside. When thrown
      again the mob will be released. Be aware these do not tame the mob and that this saves the
      mobs data when captured and will be released exactly as before. A hostile mob let out of a
      pokeball is still hostile, and still remembers you so be careful.
    </p>
    <GalleryShot name="tooltip" />
    <Recipe id="assortedpokeball:pokeball" />
    <SectionHeading name="displaying">
      Displaying
    </SectionHeading>
    <p>
      If you would like to be able to display your captured mobs you can do so via the
      Cage that
      <NuxtLink
        class="page-link"
        to="/decor/displays"
      >
        Assorted Displays
      </NuxtLink> adds.
      The exact mob will be displayed even if it is a baby or some variant the one stored in the
      Pokeball will be shown.
    </p>
  </PartPage>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Tools | Pokeball'
})
</script>
