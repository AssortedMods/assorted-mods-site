<template>
  <component
    :is="`h${level}`"
    :id="name"
    class="group scroll-mt-20"
  >
    <!-- Hangs in the margin left of the border, so the heading does not move when it shows. -->
    <a
      :href="`#${name}`"
      class="heading-anchor hidden sm:inline-block w-6 -ml-6 pr-2 text-right text-gray-500 hover:text-blue-400 no-underline opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity"
      :aria-label="copied ? 'Link copied' : 'Copy a link to this section'"
      :title="copied ? 'Link copied' : 'Copy a link to this section'"
      @click.prevent="copyLink"
    >{{ copied ? '✓' : '#' }}</a><a :name="name"><slot /></a>
  </component>
</template>

<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue'

const props = withDefaults(defineProps<{
  /** The anchor, as in /tools/buckets#config. */
  name: string
  level?: 2 | 3 | 4
}>(), { level: 2 })

const copied = ref(false)
let timer: ReturnType<typeof setTimeout> | undefined

async function copyLink() {
  const url = `${location.origin}${location.pathname}#${props.name}`
  history.replaceState(history.state, '', `#${props.name}`)
  document.getElementById(props.name)?.scrollIntoView({ behavior: 'smooth' })
  try {
    await navigator.clipboard.writeText(url)
  }
  catch {
    // No clipboard, as over plain http; the address bar still has the link.
    return
  }
  copied.value = true
  clearTimeout(timer)
  timer = setTimeout(() => copied.value = false, 1500)
}

onBeforeUnmount(() => clearTimeout(timer))
</script>
