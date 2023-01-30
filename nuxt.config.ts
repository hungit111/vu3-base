// https://nuxt.com/docs/api/configuration/nuxt-config

import svgLoader from 'vite-svg-loader'
import en from './locales/en.json'
import ja from './locales/ja.json'
export default defineNuxtConfig({
  // ssr: false,
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: 'My App',
      meta: [{ name: 'description', content: 'Demo.' }],
    },
  },
  build: {
    transpile: ['vue-toastification'],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: '@use "@/assets/scss/foundation/_variable.scss" as *;',
        },
      },
    },
    plugins: [svgLoader()],
  },
  hooks: {
    // 'pages:extend'(pages) {
    //   pages.push({
    //     name: 'customPage',
    //     path: '/',
    //     file: resolve(__dirname, 'pages/user/index.vue'),
    //   })
    // },
  },
  css: ['@/assets/css/tailwind.css', '@/assets/scss/index.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    // pinia plugin
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/tailwindcss',
    [
      '@nuxtjs/i18n',
      {
        //i18n options
        defaultLocale: 'ja',
        locales: ['en', 'ja'],
        vueI18n: {
          legacy: false,
          locale: 'ja',
          messages: { en, ja },
        },
      },
    ],
  ],
  components: {
    global: true,
    dirs: ['~/components'],
  },

  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '',
    // Keys within public are also exposed client-side
    public: {
      //setup in .env template
      apiBase: '',
    },
  },
})
