<template>
  <div>
    <ModHome :family="family" />
    <figure
      v-if="hero"
      class="max-w-4xl mx-auto px-5 mb-10"
    >
      <img
        class="rounded-lg w-full"
        :src="hero.src"
        :alt="hero.caption"
        :width="hero.width"
        :height="hero.height"
      >
      <figcaption class="text-gray-400 text-sm mt-2 text-center">
        {{ hero.caption }}
      </figcaption>
    </figure>
    <div class="flex flex-wrap -m-3 px-2 pb-10">
      <PartCard
        v-for="part in details.parts"
        :key="part.id"
        :family="props.family"
        :mod="part"
      />
    </div>
    <!-- #content gives it the same headings and links as a mod's page. -->
    <section
      id="content"
      class="max-w-6xl mx-auto px-5 pb-10"
    >
      <SectionHeading name="config">
        Config
      </SectionHeading>
      <p>
        Config files are in the config folder. They are .toml files on NeoForge and .json files on
        Fabric. Each mod's page lists what is in its own file.
      </p>
      <p class="mt-2">
        Any of the mods above can be turned off in the
        <i class="text-gray-600">{{ details.id }}-parts</i> config file. Its items leave the creative
        menu and its recipes, manual pages, world generation and spawns stop. Anything already in a
        world stays.
      </p>
      <p class="mt-2">
        A few more go for every Assorted mod and are on the
        <NuxtLink
          class="page-link"
          :to="LIB.route + '#config'"
        >
          {{ LIB.name }}
        </NuxtLink> page.
      </p>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  family: string
}>()

const details = computed(() => getFamily(props.family))
// The family's "everything" shot. The rest of its gallery is the first shot of each mod, shown on the cards.
const hero = computed(() => getGallery(props.family, props.family)?.shots[0] ?? null)
</script>
