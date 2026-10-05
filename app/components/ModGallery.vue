<template>
  <div v-if="gallery">
    <template v-if="gallery.clips.length">
      <SectionHeading name="in-action">
        In Action
      </SectionHeading>
      <figure
        v-for="clip in gallery.clips"
        :key="clip.src"
        class="my-4"
      >
        <img
          class="rounded-lg max-w-xl w-full"
          :src="clip.src"
          :alt="clip.caption"
          loading="lazy"
        >
        <figcaption class="text-gray-400 text-sm mt-2">
          {{ clip.caption }}
        </figcaption>
      </figure>
    </template>
    <template v-if="gallery.shots.length">
      <SectionHeading name="gallery">
        Gallery
      </SectionHeading>
      <div class="grid grid-cols-2 lg:grid-cols-3 gap-3">
        <figure
          v-for="(shot, index) in gallery.shots"
          :key="shot.src"
        >
          <!-- Small on the page so the gallery stays short. The link is the fallback with no JavaScript. -->
          <a
            :href="shot.src"
            :title="shot.caption"
            class="gallery-link block cursor-zoom-in"
            @click.prevent="open(index)"
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

    <Teleport to="body">
      <div
        v-if="current"
        class="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-start px-16 sm:px-24 py-4 cursor-zoom-out overflow-hidden overscroll-contain"
        role="dialog"
        aria-modal="true"
        :aria-label="current.title"
        @click="close"
      >
        <button
          class="gallery-button top-4 right-4"
          type="button"
          aria-label="Close"
          title="Close"
          @click.stop="close"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
          ><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
        <template v-if="gallery.shots.length > 1">
          <button
            class="gallery-button left-4 top-[40vh]"
            type="button"
            aria-label="Previous picture"
            title="Previous"
            @click.stop="step(-1)"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            ><path d="M15 5l-7 7 7 7" /></svg>
          </button>
          <button
            class="gallery-button right-4 top-[40vh]"
            type="button"
            aria-label="Next picture"
            title="Next"
            @click.stop="step(1)"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            ><path d="M9 5l7 7-7 7" /></svg>
          </button>
        </template>

        <!-- A fixed box for the picture, so the caption under it starts at the same height for every picture. -->
        <div class="h-[80vh] w-full flex items-center justify-center">
          <Transition
            :name="forward ? 'gallery-next' : 'gallery-previous'"
            mode="out-in"
          >
            <img
              :key="current.src"
              class="max-w-full max-h-full rounded-lg"
              :src="current.src"
              :alt="current.caption"
            >
          </Transition>
        </div>
        <div class="mt-3 max-w-3xl text-center">
          <p class="text-gray-200 font-bold">
            {{ current.title }}
          </p>
          <p class="text-gray-400 mt-1">
            {{ current.caption }}
          </p>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'

const props = defineProps<{
  family: string
  /** The mod's folder in its repo. */
  dir: string
}>()

const gallery = computed(() => getGallery(props.family, props.dir))
const opened = ref<number | null>(null)
/** Which way the last step went, so the new picture slides in from that side. */
const forward = ref(true)
const current = computed(() => opened.value === null ? null : gallery.value?.shots[opened.value] ?? null)

// The page behind stays where it is while a picture is up.
watch(opened, (now) => {
  document.documentElement.style.overflow = now === null ? '' : 'hidden'
})

function open(index: number) {
  opened.value = index
}

function close() {
  opened.value = null
}

function step(by: number) {
  const count = gallery.value?.shots.length ?? 0
  if (opened.value === null || !count) return
  forward.value = by > 0
  opened.value = (opened.value + by + count) % count
}

function onKey(event: KeyboardEvent) {
  if (opened.value === null) return
  if (event.key === 'Escape') close()
  else if (event.key === 'ArrowLeft') step(-1)
  else if (event.key === 'ArrowRight') step(1)
}

onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKey)
  document.documentElement.style.overflow = ''
})
</script>

<style scoped>
@reference "~/assets/css/tailwind.css";

/* One look for close, previous and next: a round button with a light ring that stands off the dark backdrop. */
.gallery-button {
  @apply absolute z-10 flex items-center justify-center w-12 h-12 rounded-full cursor-pointer text-white bg-gray-800 border-2 border-gray-300;
  transition: background-color 0.15s, transform 0.15s;
}
.gallery-button:hover {
  @apply bg-blue-600 border-white;
  transform: scale(1.08);
}
.gallery-button:focus-visible {
  @apply outline-2 outline-offset-2 outline-blue-400;
}
.gallery-button svg {
  @apply w-6 h-6;
  fill: none;
  stroke: currentColor;
  stroke-width: 2.5;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.gallery-next-enter-active,
.gallery-next-leave-active,
.gallery-previous-enter-active,
.gallery-previous-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}
.gallery-next-enter-from,
.gallery-previous-leave-to {
  opacity: 0;
  transform: translateX(2.5rem);
}
.gallery-next-leave-to,
.gallery-previous-enter-from {
  opacity: 0;
  transform: translateX(-2.5rem);
}
@media (prefers-reduced-motion: reduce) {
  .gallery-next-enter-active,
  .gallery-next-leave-active,
  .gallery-previous-enter-active,
  .gallery-previous-leave-active {
    transition: opacity 0.1s;
  }
  .gallery-next-enter-from,
  .gallery-next-leave-to,
  .gallery-previous-enter-from,
  .gallery-previous-leave-to {
    transform: none;
  }
}
</style>
