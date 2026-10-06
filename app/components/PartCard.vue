<template>
  <div class="xl:w-1/3 md:w-1/2 p-3 w-full">
    <NuxtLink
      :to="mod.route"
      class="page-link block h-full"
    >
      <div class="group flex flex-col border border-gray-600 rounded-lg overflow-hidden hover:bg-gray-100 cursor-pointer h-full">
        <img
          v-if="shot"
          class="w-full aspect-video object-cover"
          :src="shot.src"
          :alt="shot.caption"
          :width="shot.width"
          :height="shot.height"
          loading="lazy"
        >
        <div class="flex gap-4 p-4">
          <img
            class="w-14 h-14 rounded-md shrink-0"
            :src="mod.logo"
            :alt="mod.name"
            loading="lazy"
          >
          <div>
            <h3 class="text-lg font-medium text-gray-200 group-hover:text-gray-900">
              {{ mod.shortName }}
            </h3>
            <p class="text-sm leading-relaxed text-gray-400 group-hover:text-gray-700">
              {{ mod.description }}
            </p>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ModDetails } from '~/utils/mods'

const props = defineProps<{
  family: string
  mod: ModDetails
}>()

const shot = computed(() => getGallery(props.family, props.mod.dir)?.shots[0] ?? null)
</script>
