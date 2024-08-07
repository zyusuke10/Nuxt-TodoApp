export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
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
  runtimeConfig: {
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseKey: process.env.SUPABASE_KEY
  }
})