<template>
  <figure class="my-4">
    <img
      class="rounded-lg mx-auto max-w-full max-h-[32rem]"
      :src="clip.src"
      :alt="clip.caption"
      loading="lazy"
    >
    <figcaption class="text-gray-400 text-sm mt-2 text-center max-w-2xl mx-auto">
      {{ clip.caption }}
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
import type { GalleryClip } from '~/utils/gallery'

const props = defineProps<{
  /** The clip's name after "clip-", like "breaking" for clip-breaking.webp. The page's main clip is placed for it. */
  name?: string
  /** A clip already in hand, as GalleryLead and GalleryGrid pass it. */
  clip?: GalleryClip
}>()

const clip = props.clip ?? placeClip(props.name!)
</script>
