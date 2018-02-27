const nodeExternals = require('webpack-node-externals')

module.exports = {
  /*
  ** Head elements
  ** Adds Roboto font and Material Icons
  */
  head: {
    title: 'AppVenture',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'url', property: 'og:url', name: 'og:url', content: 'https://www.appventure.com' },
      { hid: 'title', property: 'og:title', name: 'og:title', content: 'AppVenture' }
    ],
    link: [
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
      { rel: 'icon', type: 'image/svg', href: '/favicon.ico' }
    ],
    script: [
      { type: 'text/javascript', src: 'https://use.fontawesome.com/6492ecb9b0.js' }
    ]
  },
  /*
  ** Adds Vuetify & eslint into vendor.bundle.js
  */
  build: {
    vendor: ['vuetify'],
    extractCSS: true,
    extend (config, ctx) {
      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ]
      }
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  /**
   * Custom route names for pages
   */
  router: {
    extendRoutes (routes, resolve) {
      routes.push(
        {
          path: '/tournaments/:date/:slug',
          name: 'tournaments',
          component: resolve(__dirname, 'pages/tournaments/_date/_slug.vue')
        },
        {
          path: '/tournaments/search',
          name: 'search',
          component: resolve(__dirname, 'pages/tournaments/_search.vue')
        },
        {
          path: '/tournaments/category',
          name: 'filterByCat',
          component: resolve(__dirname, 'pages/tournaments/_filterByCat.vue')
        },
        {
          path: '/tournaments/all',
          name: 'allTournaments',
          component: resolve(__dirname, 'pages/tournaments/_allTournaments.vue')
        },
        {
          path: '/results/:date/:slug',
          name: 'results',
          component: resolve(__dirname, 'pages/results/_date/_slug.vue')
        }
      )
    }
  },
  /*
  ** Loads plugins into the app
  */
  plugins: [
    '~/plugins/vuetify',
    '~/plugins/preLoad',
    '~/plugins/maps',
    '~/plugins/vueCroppa'
  ],
  /*
  ** Loads CSS globally
  */
  css: [
    '~/assets/app.styl',
    '@/assets/styles/main.scss'
  ]
}
