export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nop Nuxt Demo',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Router property -  https://nuxtjs.org/docs/2.x/features/file-system-routing#the-router-property
  router: {
    middleware: [],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/dotenv',
    '@nop-app/nuxt-nop',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  nop: {
    settings: {
      token: process.env.NOP_TOKEN,
    },
    enabledRoutes: ['posts-new'],
  },
}
