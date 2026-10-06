<template>
  <figure class="my-4">
    <img
      class="rounded-lg mx-auto max-w-full"
      :src="src"
      :alt="caption"
      loading="lazy"
    >
    <figcaption class="text-gray-400 text-sm mt-2 text-center max-w-2xl mx-auto">
      {{ caption }}
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
/** A picture that is not in the mod's gallery, like a screen or a tooltip, from public/figures. */
defineProps<{
  src: string
  caption: string
}>()
</script>
