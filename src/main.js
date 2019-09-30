// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'

import store from './store'
import i18n from './lang'

import * as filters from './filters'

import ElementUI from 'element-ui'
import BannerComponent from './components/3DBanner/index.vue'

// import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)

Vue.use(BannerComponent);

Object.keys(filters).forEach((key) => {
    Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    i18n,
    components: { App },
    template: '<App/>',
    render: h => h(App)
})