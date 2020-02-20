
export default {
  // mode: 'universal',
  mode: 'spa',

  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  },
  head: {
    title: 'Mercado' || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'script', src: 'https://js.stripe.com/v3/' },
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }

    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#68d391', height: '10px'
  },

  loadingIndicator: {

    color: '#000',
    background: '#fff'
  },

  css: [
    './assets/css/main.css',
    '~/node_modules/element-ui/lib/theme-chalk/index.css'
  ],

  plugins: [
    '~/plugins/vue2-filters',
    '~/plugins/vuelidate',
    { src: '~/plugins/vuex-persist', ssr: false }
  ],

  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-68267074-3'
    }],
    '@nuxtjs/tailwindcss',
    '@nuxtjs/global-components',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    'nuxt-webfontloader',
    'nuxt-element-ui'
  ],

  // elementUI: {
  //   // components: [
  //   //   'Drawer', 'DatePicker', 'Icon', 'Select', 'Option', 'Input', 'Alert', 'Steps', 'Step', ' Notification',
  //   // ],
  //   locale: 'en',
  // },
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
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  generate: {
    fallback: true,
    devtools: true,
    routes: [

    ]
  },
  router: {
    linkExactActiveClass: 'font-medium text-green-400 '
  }
}
