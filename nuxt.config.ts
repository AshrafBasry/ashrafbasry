// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
  ],

  // App Config
  app: {
    buildAssetsDir: '/ashrafbasry/_nuxt/',
    head: {
      title: 'Ashraf Basry',
      meta: [
        {
          name: 'description',
          content: 'Ashraf Basry\'s Profile',
        }
      ],
      link: [
        {
          rel: 'icon',
          href: '/favicon.ico',
        }
      ]
    }
  }
})
