import Vue from 'vue'
import store from '~/store'
import router from '~/router'
import i18n from '~/plugins/i18n'
import App from '~/components/App'

/* ============
 * Axios
 * ============
 *
 * Promise based HTTP client for the browser and node.js.
 * Because Vue Resource has been retired, Axios will now been used
 * to perform AJAX-requests.
 *
 * https://github.com/mzabriskie/axios
 */
import Axios from 'axios'

import '~/plugins'
import '~/components'

Vue.config.productionTip = false

Vue.config.debug = process.env.NODE_ENV !== 'production'

Axios.defaults.baseURL = process.env.MIX_API_LOCATION

Axios.defaults.headers.common.Accept = 'application/json'

// Bind Axios to Vue.
Vue.$http = Axios
Object.defineProperty(Vue.prototype, '$http', {
  get () {
    return Axios
  }
})

/* eslint-disable no-new */
new Vue({
  i18n,
  store,
  router,
  ...App
})
