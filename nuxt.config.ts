import tailwindcss from '@tailwindcss/vite'
import redirects from './redirects.json'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    'nuxt-link-checker',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],
  devtools: { enabled: true },
  app: {
    rootId: 'app'
  },
  css: ['~/assets/css/tailwind.css'],
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://assortedmods.com',
    name: 'Assorted Mods',
    indexable: true
  },
  // Old pages moved when the mods split into smaller ones; redirects.json maps each to its new home.
  routeRules: Object.fromEntries(
    Object.entries(redirects).map(([from, to]) => [from, { redirect: { to, statusCode: 301 } }])
  ),
  compatibilityDate: '2026-09-13',
  nitro: {
    prerender: {
      crawlLinks: true,
      // The old paths are listed so the static site still has a page at each that sends you on.
      routes: ['/', ...Object.keys(redirects)]
    }
  },
  vite: {
    plugins: [tailwindcss()]
  },
  eslint: {
    config: {
      stylistic: {
        indent: 2,
        quotes: 'single',
        semi: false,
        commaDangle: 'only-multiline'
      }
    }
  },
})
