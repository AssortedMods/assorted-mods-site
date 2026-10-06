<template>
  <GalleryClip
    v-if="gallery.lead"
    :clip="gallery.lead"
    class="mb-8"
  />
</template>

<script setup lang="ts">
const gallery = useModGallery()
</script>
