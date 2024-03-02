import {createRouter, createWebHistory} from "vue-router";
import {routes} from './routes.js'

export const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "active",
    linkExactActiveClass: 'exact-active'
})

router.beforeEach((to) => {
    document.title = to.meta.title
})