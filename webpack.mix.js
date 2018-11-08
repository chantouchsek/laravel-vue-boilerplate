const path = require('path')
const mix = require('laravel-mix')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const webpack = require('webpack')
const { version } = require('./package.json')
const OfflinePlugin = require('offline-plugin')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.config.vue.esModule = true

mix
  .js('resources/js/app.js', 'public/js')
  .sass('resources/sass/app.scss', 'public/css')

  .sourceMaps()

if (process.platform === 'darwin') {
  mix.disableNotifications()
}

if (mix.inProduction()) {
  mix.version()

  mix.extract([
    'vue',
    'vform',
    'axios',
    'vuex',
    'jquery',
    'popper.js',
    'vue-i18n',
    'vue-meta',
    'js-cookie',
    'bootstrap',
    'vue-router',
    'sweetalert2',
    'vuex-router-sync',
    '@fortawesome/vue-fontawesome',
    '@fortawesome/fontawesome-svg-core',
    'bootstrap-vue',
    'chart.js',
    'lodash',
    'popper.js',
    'select2',
    'vue-chartjs',
    'vue-loading-spinner',
    'vue-notification',
    'vue-sweetalert2',
    'vuejs-datepicker'
  ])
}

mix.options({
  hmrOptions: {
    host: process.env.MIX_HMR_HOST,
    port: process.env.MIX_HMR_PORT
  },
  uglify: { parallel: true }
})

mix.webpackConfig({
  plugins: [
    // new BundleAnalyzerPlugin()
    new webpack.DefinePlugin({ __VERSION: JSON.stringify(version) }),
    new OfflinePlugin({
      publicPath: '/',
      appShell: '/',
      responseStrategy: 'network-first',
      externals: [
        '/',
        '/manifest.json',
        '/favicon.png'
      ],
      ServiceWorker: {
        entry: path.resolve(__dirname, 'resources/js/sw.js'),
        output: 'sw.js',
        minify: mix.inProduction()
      }
    })
  ],
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      '~': path.join(__dirname, './resources/js'),
      '@': path.resolve(__dirname, 'resources/js/'),
      'static': path.resolve(__dirname, 'resources/static/')
    }
  },
  output: {
    chunkFilename: 'js/[name].[chunkhash].js',
    publicPath: mix.config.hmr ? '//localhost:8080' : '/'
  }
})

mix.extend('vueOptions', (webpackConfig, vueOptions, ...args) => {
  const vueLoader = webpackConfig.module.rules.find(loader => loader.loader === 'vue-loader')

  vueLoader.options = require('webpack-merge').smart(vueLoader.options, vueOptions)
})

mix.vueOptions({
  transformToRequire: {
    'img': 'src',
    'image': 'xlink:href',
    'b-img': 'src',
    'b-img-lazy': ['src', 'blank-src'],
    'b-card': 'img-src',
    'b-card-img': 'img-src',
    'b-carousel-slide': 'img-src',
    'b-embed': 'src'
  }
})
