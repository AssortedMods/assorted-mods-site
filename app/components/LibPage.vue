<template>
  <div>
    <header class="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8 text-center sm:text-left text-gray-200">
      <img
        class="w-32 h-32 rounded-lg shrink-0"
        :src="icon || LIB.logo"
        :alt="title || LIB.name"
        :class="{ pixelated: icon }"
      >
      <div class="grow">
        <NuxtLink
          v-if="title"
          :to="LIB.route"
          class="text-blue-500 hover:text-blue-400 text-sm uppercase font-bold"
        >
          {{ LIB.name }}
        </NuxtLink>
        <h1 class="text-gray-200 text-4xl font-extrabold tracking-tight mt-1">
          {{ title || LIB.name }}
        </h1>
        <p class="text-gray-400 leading-relaxed mt-2">
          {{ description || LIB.description }}
        </p>
        <ModLinks
          v-if="!title"
          class="sm:!place-content-start"
          :mod="LIB"
          :github="LIB.github"
        />
      </div>
    </header>
    <div id="content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  /** A page of Lib's own, like the manual. Left out for Lib's main page. */
  title?: string
  description?: string
  /** Drawn in place of Lib's logo. */
  icon?: string
}>()
</script>

<style scoped>
.pixelated {
  image-rendering: pixelated;
}
</style>
