<template>
  <section class="text-gray-200">
    <div class="max-w-6xl mx-auto px-5 py-10">
      <div class="flex flex-wrap w-full mb-6 flex-col items-center text-center">
        <img
          v-if="family.logo"
          class="w-32 h-32 rounded-lg mb-4"
          :src="family.logo"
          :alt="family.name"
        >
        <h2
          class="title-font mb-2 text-4xl font-extrabold leading-10 tracking-tight text-left sm:text-5xl sm:leading-none md:text-6xl"
        >
          {{ family.name }}
        </h2>
        <p class="lg:w-1/2 w-full leading-relaxed text-base">
          {{ family.description }}
        </p>
        <p
          v-if="family.bundle"
          class="lg:w-1/2 w-full leading-relaxed text-sm text-gray-400 mt-2"
        >
          {{ family.name }} includes every mod below. Each one can also be downloaded on its own.
        </p>
      </div>
      <ModLinks
        :mod="family.bundle"
        :github="family.github"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  family: string
}>()

const family = computed(() => getFamily(props.family))
</script>
