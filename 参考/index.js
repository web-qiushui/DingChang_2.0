import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import WorkbeachPage from '@/components/WorkBeach'
import LogoutPage from '@/components/LogoutPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      alias: '/home',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/Workbeach',
      name: 'WorkbeachPage',
      component: WorkbeachPage
    },
    {
      path: '/Logout',
      name: 'LogoutPage',
      component: LogoutPage
    }
  ]
})
