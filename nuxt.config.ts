export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxt/eslint'
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
})