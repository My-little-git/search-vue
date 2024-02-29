import {createRouter, createWebHistory, onBeforeRouteLeave} from "vue-router";
import {routes} from './routes.js'

export const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to) => {
    document.title = to.meta.title
})