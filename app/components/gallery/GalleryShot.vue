<template>
  <figure class="my-4">
    <!-- The link is the fallback with no JavaScript. -->
    <a
      :href="shot.src"
      :title="shot.title"
      class="gallery-link block cursor-zoom-in max-w-2xl mx-auto"
      @click.prevent="gallery.open(index)"
    >
      <img
        class="rounded-lg w-full"
        :src="shot.src"
        :alt="shot.caption"
        :width="shot.width"
        :height="shot.height"
        loading="lazy"
      >
    </a>
    <figcaption class="text-gray-400 text-sm mt-2 text-center max-w-2xl mx-auto">
      {{ shot.caption }}
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
const props = defineProps<{
  /** The shot's file name without its number, like "pyramid" for 4-pyramid.webp. */
  name: string
}>()

const gallery = useModGallery()
const { shot, index } = placeShot(props.name)
</script>
