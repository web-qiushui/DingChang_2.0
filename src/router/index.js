import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home/index'
import Introduction from '@/views/Introduction/index'
import Business from '@/views/Business/index'
import Case from '@/views/Case/index'
import News from '@/views/News/index'
import Contact from '@/views/Contact/index'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: '',
        alias: '/home',
        component: Home
    }, {
        path: '/home',
        name: '',
        component: Home
    }, {
        path: '/introduction',
        name: '',
        component: Introduction
    }, {
        path: '/business',
        name: '',
        component: Business
    }, {
        path: '/case',
        name: '',
        component: Case
    }, {
        path: '/news',
        name: '',
        component: News,
        children: [{
            path: '1',
            component: News
        }, {
            path: '2',
            component: News
        }, {
            path: '3',
            component: News
        }]
    }, {
        path: '/contact',
        name: '',
        component: Contact
    }]
})