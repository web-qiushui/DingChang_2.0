// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import locale from 'element-ui/lib/locale/lang/en'
import store from './store/index.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(ElementUI, {locale})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
