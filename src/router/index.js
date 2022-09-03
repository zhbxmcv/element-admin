import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/home/Home.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:  [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path:'/about',
            name: "About",
            component: ()=>import(/*webpackChunkName: "about"*/'../views/about/About.vue')
        }
    ]
})

export default router