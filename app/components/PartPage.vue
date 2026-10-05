<template>
  <div>
    <header class="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8 text-center sm:text-left text-gray-200">
      <img
        class="w-32 h-32 rounded-lg shrink-0"
        :src="mod.logo"
        :alt="mod.name"
      >
      <div class="grow">
        <NuxtLink
          :to="family.route"
          class="text-blue-500 hover:text-blue-400 text-sm uppercase font-bold"
        >
          {{ family.name }}
        </NuxtLink>
        <h1 class="text-gray-200 text-4xl font-extrabold tracking-tight mt-1">
          {{ mod.name }}
        </h1>
        <p class="text-gray-400 leading-relaxed mt-2">
          {{ mod.description }}
        </p>
        <p
          v-if="family.bundle"
          class="text-gray-500 text-sm mt-2"
        >
          Also included in
          <NuxtLink
            :to="family.route"
            class="text-blue-500 hover:text-blue-400"
          >{{ family.bundle.name }}</NuxtLink>.
        </p>
        <ModLinks
          class="sm:!place-content-start"
          :mod="mod"
          :github="family.github"
        />
      </div>
    </header>
    <div id="content">
      <slot />
      <br>
      <ModGallery
        :family="props.family"
        :dir="mod.dir"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  family: string
  /** The mod's slug, the last part of its route. */
  part: string
}>()

const family = computed(() => getFamily(props.family))
const mod = computed(() => getPart(props.family, props.part))
</script>
