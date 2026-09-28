<template>
  <div class="flex flex-wrap place-content-center gap-x-6">
    <template
      v-for="link in links"
      :key="link.name"
    >
      <a
        v-if="link.url"
        :class="linkClass"
        :href="link.url"
        target="_blank"
        rel="noopener"
      >
        <BrandIcon
          :name="link.name"
          :brand="link.name !== 'github'"
        />
        {{ link.label }}
      </a>
      <span
        v-else
        :class="[linkClass, 'opacity-40 cursor-default']"
        title="Not published there yet"
      >
        <BrandIcon :name="link.name" />
        {{ link.label }} soon
      </span>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ModDetails } from '~/utils/mods'

const props = defineProps<{
  /** The mod whose store pages to link, or null for a family with no bundle. */
  mod: ModDetails | null
  github?: string
}>()

const linkClass = 'inline-flex items-center text-sm px-1 py-1 mt-4 rounded-sm hover:bg-gray-300 hover:text-teal-500'

const links = computed(() => {
  const out: { name: 'github' | 'curseforge' | 'modrinth', label: string, url: string | null }[] = []
  if (props.github) out.push({ name: 'github', label: 'GitHub', url: props.github })
  if (props.mod) {
    out.push({ name: 'curseforge', label: 'CurseForge', url: curseforgeUrl(props.mod) })
    out.push({ name: 'modrinth', label: 'Modrinth', url: modrinthUrl(props.mod) })
  }
  return out
})
</script>
