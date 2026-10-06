<template>
  <Teleport to="body">
    <div
      v-if="current"
      class="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-start px-16 sm:px-24 py-4 cursor-zoom-out overflow-hidden overscroll-contain"
      role="dialog"
      aria-modal="true"
      :aria-label="current.title"
      @click="gallery.close"
    >
      <button
        class="gallery-button top-4 right-4"
        type="button"
        aria-label="Close"
        title="Close"
        @click.stop="gallery.close"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
        ><path d="M6 6l12 12M18 6L6 18" /></svg>
      </button>
      <template v-if="count > 1">
        <button
          class="gallery-button left-4 top-[40vh]"
          type="button"
          aria-label="Previous picture"
          title="Previous"
          @click.stop="gallery.step(-1)"
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
          @click.stop="gallery.step(1)"
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
          :name="gallery.forward.value ? 'gallery-next' : 'gallery-previous'"
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
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, watch } from 'vue'

const gallery = useModGallery()
const count = computed(() => gallery.gallery?.shots.length ?? 0)
const current = computed(() => gallery.opened.value === null ? null : gallery.gallery?.shots[gallery.opened.value] ?? null)

// The page behind stays where it is while a picture is up.
watch(gallery.opened, (now) => {
  document.documentElement.style.overflow = now === null ? '' : 'hidden'
})

function onKey(event: KeyboardEvent) {
  if (gallery.opened.value === null) return
  if (event.key === 'Escape') gallery.close()
  else if (event.key === 'ArrowLeft') gallery.step(-1)
  else if (event.key === 'ArrowRight') gallery.step(1)
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
