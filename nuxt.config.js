
export default {
  mode: 'universal',
  server: {
    port: 4500,
  },

  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  },

  head: {
    title: 'Mercado',
    titleTemplate: '%s - Nuxt Mercado',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'script', src: 'https://js.stripe.com/v3/' },
    ]
  },

  loading: {
    color: '#68d391',
    height: '5px',
    continuous: true
  },

  css: [
    './assets/css/main.css',
    'element-ui/lib/theme-chalk/index.css'
  ],

  plugins: [
    '~/plugins/vue2-filters',
    '~/plugins/vuelidate',
    { src: '~/plugins/element-ui', mode: 'client' },
    { src: '~/plugins/defaults', mode: 'client' },
    { src: '~/plugins/vuex-persist', mode: 'client' }
  ],

  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-68267074-3'
    }],
    '@nuxtjs/global-components',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/tailwindcss',
    'nuxt-webfontloader',
  ],


  webfontloader: {
    google: {
      families: ['Rubik:400,500,700&display=swap']
    }
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  purgeCSS: {
    enabled: false,
    whitelistPatterns: [/^el-/],
  },


  router: {
    linkExactActiveClass: 'text-green-500'
  }
}
