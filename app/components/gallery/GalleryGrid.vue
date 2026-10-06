<template>
  <div v-if="clips.length || shots.length">
    <template v-if="clips.length">
      <SectionHeading name="in-action">
        In Action
      </SectionHeading>
      <GalleryClip
        v-for="clip in clips"
        :key="clip.src"
        :clip="clip"
      />
    </template>
    <template v-if="shots.length">
      <SectionHeading name="gallery">
        Gallery
      </SectionHeading>
      <div class="grid grid-cols-2 lg:grid-cols-3 gap-3">
        <figure
          v-for="{ shot, index } in shots"
          :key="shot.src"
        >
          <!-- Small on the page so the gallery stays short. The link is the fallback with no JavaScript. -->
          <a
            :href="shot.src"
            :title="shot.caption"
            class="gallery-link block cursor-zoom-in"
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
          <figcaption class="text-gray-300 text-sm mt-1">
            {{ shot.title }}
          </figcaption>
        </figure>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
const gallery = useModGallery()
const { shots, clips } = useUnplaced()
</script>
