<template>
  <div>
    <ModHome :family="family" />
    <slot />
    <div class="flex flex-wrap -m-3 px-2 pb-10">
      <PartCard
        v-for="part in details.parts"
        :key="part.id"
        :mod="part"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  family: string
}>()

const details = computed(() => getFamily(props.family))
</script>
