<template>
  <div class="flex flex-col min-h-full">
    <nav
      class="
          fixed
          z-50
          w-full
          bg-gray-800
          top-0
          flex flex-wrap
          items-center
          justify-between
          px-2
          py-3
          navbar-expand-lg
          shadow-lg
        "
    >
      <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div
          class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
        >
          <NuxtLink
            class="
                text-sm
                font-bold
                leading-relaxed
                inline-block
                mr-4
                py-2
                whitespace-nowrap
                uppercase
                text-gray-300
              "
            to="/"
          >
            Assorted Mods
          </NuxtLink>
          <button
            class="
                cursor-pointer
                text-xl
                leading-none
                px-3
                py-1
                border border-solid border-transparent
                rounded-sm
                bg-transparent
                block
                lg:hidden
                outline-hidden
                focus:outline-hidden
              "
            type="button"
            @click="toggleMenu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="fill-current w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div
          class="lg:flex grow items-center"
          :class="menuOpened ? 'flex' : 'hidden'"
        >
          <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li class="nav-item">
              <a
                class="
                    px-3
                    py-2
                    flex
                    items-center
                    text-xs
                    uppercase
                    font-bold
                    text-gray-300
                    hover:text-gray-500
                  "
                href="https://github.com/AssortedMods"
              ><svg
                class="fill-current w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>GitHub</title>
                <path
                  d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"
                /></svg><span class="ml-2">GitHub</span></a>
            </li>
            <li class="nav-item">
              <a
                class="
                    px-3
                    py-2
                    flex
                    items-center
                    text-xs
                    uppercase
                    font-bold
                    text-gray-300
                    hover:text-gray-500
                  "
                href="https://twitter.com/grim3212"
              ><svg
                class="fill-current w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Twitter</title>
                <path
                  d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84"
                /></svg><span class="ml-2">Twitter</span></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container mx-auto pt-12 mb-auto">
      <div class="flex flex-wrap">
        <div class="w-full sm:w-3/12 lg:w-2/12 pr-4 tex-left sm:sticky sm:self-start sm:top-16">
          <div class="sidebar-scroll block overflow-y-auto pt-8 pb-4 sm:max-h-[calc(100vh-4rem)]">
            <div
              v-for="family in FAMILIES"
              :key="family.key"
              class="mb-6"
            >
              <NuxtLink
                class="
                    text-gray-300
                    hover:text-gray-500
                    text-xs
                    uppercase
                    font-bold
                    block
                    py-1
                    px-4
                    no-underline
                    toplevel-route
                  "
                :to="family.route"
              >
                {{ family.name }}
              </NuxtLink>
              <ul
                v-if="isOpen(family)"
                class="block flex-wrap list-none pl-0 mb-0 mt-2"
              >
                <li
                  v-for="part in family.parts"
                  :key="part.id"
                >
                  <NuxtLink
                    class="text-gray-300 hover:text-gray-500 text-sm block mb-2 mx-4 no-underline"
                    :to="part.route"
                  >
                    {{ part.shortName }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <div class="mb-6">
              <NuxtLink
                class="
                    text-gray-300
                    hover:text-gray-500
                    text-xs
                    uppercase
                    font-bold
                    block
                    py-1
                    px-4
                    no-underline
                    toplevel-route
                  "
                :to="LIB.route"
              >
                {{ LIB.name }}
              </NuxtLink>
              <ul
                v-if="route.path === LIB.route || route.path.startsWith(LIB.route + '/')"
                class="block flex-wrap list-none pl-0 mb-0 mt-2"
              >
                <li
                  v-for="page in LIB_PAGES"
                  :key="page.route"
                >
                  <NuxtLink
                    class="text-gray-300 hover:text-gray-500 text-sm block mb-2 mx-4 no-underline"
                    :to="page.route"
                  >
                    {{ page.name }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="w-full sm:w-9/12 lg:w-8/12 px-4 sm:pr-10 lg:pr-4">
          <div class="my-8">
            <slot />
          </div>
        </div>
        <div class="w-full lg:w-2/12 px-4 hidden lg:block" />
      </div>
    </div>

    <MyFooter />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Family } from '~/utils/mods'

const menuOpened = ref(false)
const route = useRoute()

// Only the family being read lists its mods, or 63 of them would bury the rest of the sidebar.
function isOpen(family: Family) {
  return route.path === family.route || route.path.startsWith(family.route + '/')
}

function toggleMenu() {
  menuOpened.value = !menuOpened.value
}
</script>

<style>
@reference "~/assets/css/tailwind.css";

.sidebar-scroll {
  scrollbar-width: thin;
  scrollbar-color: var(--color-gray-600) transparent;
}
.sidebar-scroll::-webkit-scrollbar {
  width: 6px;
}
.sidebar-scroll::-webkit-scrollbar-track {
  background: transparent;
}
.sidebar-scroll::-webkit-scrollbar-thumb {
  @apply bg-gray-600 rounded-full;
}
.router-link-exact-active:not(.toplevel-route) {
    @apply text-blue-600 border-l-2 border-solid border-blue-600 pl-1;
}
.toplevel-route.router-link-exact-active {
    @apply text-blue-600;
}
#content h1 {
  @apply text-gray-200 text-3xl py-2;
}
#content h2 {
  @apply text-gray-200 text-2xl py-2;
}
#content img {
  @apply mx-auto rounded-lg my-2;
}
#content {
  @apply text-gray-400;
}
#content .muted {
  @apply text-gray-600;
}
#content a:not(.page-link):not(.changelog):not(.heading-anchor):not(.gallery-link) {
  @apply text-blue-600 border-l-2 border-solid border-blue-600 pl-1;
}
#content a.page-link {
  @apply text-blue-600;
  &:hover {
    @apply text-blue-400;
  }
  &:visited {
    @apply text-purple-600;
  }
}
</style>
