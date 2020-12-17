import axios from 'axios'

// dotenv
require('dotenv').config()
const { API_URL, API_KEY, BASE_URL } = process.env

// path
const baseUrl = process.env.BASE_URL

// meta
const lang = 'ja'
const siteName = 'rbell'
const siteDesc = 'rbellは普段勉強したことを備忘録として記すためのサイトです。'

// images
const iconImages = '/image/icon/'
const ogpImages = baseUrl + '/image/ogp/'

export default {
  server: {
    port: 8000,
    host: '0.0.0.0',
  },

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#',
      lang,
    },
    titleTemplate: `%s | ${siteName}`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      {
        name: 'google-site-verification',
        content: '_E99yXu5fG2d3hzRXelPs7VlIDFbaRGoESk4wp95eRs',
      },

      // SEO関連
      {
        hid: 'description',
        name: 'description',
        content: siteDesc,
      },

      // OGP関連
      { hid: 'og:site_name', property: 'og:site_name', content: siteName },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: baseUrl },
      { hid: 'og:title', property: 'og:title', content: siteName },
      { hid: 'og:description', property: 'og:description', content: siteDesc },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${ogpImages}ogp.png`,
      },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: iconImages + '/favicon.ico' },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    { src: '~/assets/sass/app.scss', lang: 'scss' },
    '~/assets/css/style',
    { src: '~/node_modules/highlight.js/styles/hybrid.css', lang: 'css' },
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/filter.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/google-analytics'],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-fontawesome',
    'nuxt-webfontloader',
    ['@nuxtjs/moment', ['ja']],
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  // google analytics
  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID,
    },
  },

  // blog generate
  generate: {
    async routes() {
      const pages = await axios
        .get(process.env.API_URL + 'blog?limit=100', {
          headers: { 'X-API-KEY': process.env.API_KEY },
        })
        .then((res) =>
          res.data.contents.map((content) => ({
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
    BASE_URL,
  },

  // fontawesome
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab'],
      },
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
