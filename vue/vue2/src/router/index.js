import Vue from 'vue'
import Router from "vue-router"



Vue.use(Router)


export default new Router ({
    routes:[
        {
            path: '/',
            redirect: 'login',
            component: () => import('@/components/Login')
        },
        {
            path: '/home',
            component: () => import('@/components/Home')
        },
        {
            path: '/login',
            // name: 'Login',
            component: () => import('@/components/Login')
        }
    ],
    mode: 'history'
})


