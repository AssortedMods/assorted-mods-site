<template>
  <div class="xl:w-1/3 md:w-1/2 p-4 w-full">
    <NuxtLink
      :to="details.route"
      class="block h-full"
    >
      <div class="group flex flex-col border border-gray-300 rounded-lg overflow-hidden hover:bg-gray-100 cursor-pointer h-full">
        <img
          v-if="shot"
          class="w-full aspect-video object-cover"
          :src="shot.src"
          :alt="shot.caption"
          :width="shot.width"
          :height="shot.height"
          loading="lazy"
        >
        <div class="flex gap-4 p-6">
          <img
            v-if="details.logo"
            class="w-20 h-20 rounded-md shrink-0"
            :src="details.logo"
            :alt="details.name"
          >
          <div>
            <h2 class="text-lg font-medium title-font mb-2 group-hover:text-gray-900">
              {{ details.name }}
            </h2>
            <p class="leading-relaxed text-base group-hover:text-gray-700">
              {{ details.description }}
            </p>
            <p class="text-sm text-gray-400 mt-2 group-hover:text-gray-600">
              {{ details.parts.length }} mods
            </p>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  family: string
}>()

const details = computed(() => getFamily(props.family))
const shot = computed(() => getGallery(props.family, props.family)?.shots[0] ?? null)
</script>
