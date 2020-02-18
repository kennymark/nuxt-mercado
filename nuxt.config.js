
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Mercado' || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    './assets/css/main.css',
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue2-filters', ssr: false },
    { src: '~/plugins/vuelidate', ssr: false },
    { src: '~/plugins/element-ui', ssr: false },
    { src: '~/plugins/vuex-persist', ssr: false }

  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-68267074-3'
    }],
    '@nuxtjs/tailwindcss',
    '@nuxtjs/global-components',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    'nuxt-webfontloader',
  ],

  webfontloader: {
    google: {
      families: ['Rubik:400,500,700&display=swap'] //Loads Lato font with weights 400 and 700
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
    // transpile: [''],
    // was causing issues in prod
    // extractCSS: true, 
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
    // linkActiveClass: 'font-bold',
    linkExactActiveClass: 'font-medium'

  }
}
