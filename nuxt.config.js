import axios from 'axios'

// dotenv
require('dotenv').config()
const { API_URL, API_KEY } = process.env

export default {
  server: {
    port: 8000,
    host: '0.0.0.0',
  },

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [{ src: '~/assets/sass/app.scss', lang: 'scss' }, '~/assets/css/style'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/filter.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-fontawesome',
    'nuxt-webfontloader',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  // blog generate
  generate: {
    async routes() {
      const pages = await axios
        .get(process.env.API_URL + 'blog?limit=100', {
          headers: { 'X-API-KEY': process.env.API_KEY },
        })
        .then((res) =>
          require.data.contents.map((content) => ({
            route: `/blog/${content.id}`,
            payload: content,
          }))
        )
      return pages
    },

    fallback: true,
  },

  env: {
    API_URL,
    API_KEY,
  },

  // fontawesome
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas'],
      },
    ],
  },

  // google fonts
  webfontloader: {
    google: {
      families: ['M+PLUS+1p'],
    },
  },
}
