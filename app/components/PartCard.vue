<template>
  <div class="xl:w-1/3 md:w-1/2 p-3 w-full">
    <NuxtLink
      :to="mod.route"
      class="page-link"
    >
      <div class="group flex gap-4 border border-gray-600 p-4 rounded-lg hover:bg-gray-100 cursor-pointer h-full">
        <img
          class="w-16 h-16 rounded-md shrink-0"
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
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type { ModDetails } from '~/utils/mods'

defineProps<{
  mod: ModDetails
}>()
</script>
