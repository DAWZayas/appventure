const nodeExternals = require('webpack-node-externals')

module.exports = {
  /*
  ** Head elements
  ** Add Roboto font and Material Icons
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
  ** Add Vuetify into vendor.bundle.js
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
  router: {
    extendRoutes (routes, resolve) {
      routes.push({
        path: '/tournaments/:date/:slug',
        name: 'tournaments',
        component: resolve(__dirname, 'pages/tournaments/_id.vue')
      })
    }
  },
  /*
  ** Load Vuetify into the app
  */
  plugins: ['~/plugins/vuetify'],
  /*
  ** Load Vuetify CSS globally
  */
  css: [
    '~/assets/app.styl',
    '@/assets/styles/main.scss'
  ]
}
