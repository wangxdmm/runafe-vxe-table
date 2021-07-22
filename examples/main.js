import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import 'font-awesome/scss/font-awesome.scss'
import './assets/style/index.scss'
import './plugins'
import XEUtils from 'xe-utils'
import RsUI from '@runafe/runa-system'
import '@runafe/runa-system/lib/style.css'

// **************** （注意：该全局变量仅用于开发环境调试） ****************
if (process.env.NODE_ENV === 'development') {
  window.XEUtils = XEUtils
}
// **************** （注意：该全局变量仅用于开发环境调试） ****************

Vue.config.productionTip = false
Vue.config.devtools = true

Vue.use(RsUI, {
  'fields-setting': {
    fetch: (name, vm) => {
      vm.showLoading()
      return new Promise(resolve => {
        setTimeout(() => {
          vm.closeLoading()
          resolve({})
        }, 2000)
      })
    },

    update: (name, data) => {
      console.log(data)
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(true)
        }, 2000)
      })
    }
  }
})
Vue.use(ElementUI)
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
