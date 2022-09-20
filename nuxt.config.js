export default {
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Rafif Fathi',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Rafif Fathi designs interfaces, graphics and products.',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    script: [
      {
        src: 'https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'css', href: 'https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css' }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~plugins/vue-typed-js', ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/apollo',
  ],

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint:
          process.env.BACKEND_URL || 'http://localhost:1337/graphql',
      },
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      title: 'Rafif Fathi - Visual Designer',
      author: 'Rafif Fathi',
      description: 'Rafif Fathi designs interfaces, graphics and products.',
      theme_color: '#00ADC7',
      lang: 'en',
      ogHost: 'rafifthi.netlify.app'
    },
    manifest: {
      name: 'Rafif Fathi - Visual Designer',
      short_name: 'Rafif Fathi',
      theme_color: '#00ADC7',
      description: 'Rafif Fathi designs interfaces, graphics and products.',
      lang: 'en',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
}
