export const routes = [
    {
        name: 'home',
        path: '/',
        component: () => import("@/views/HomeView.vue"),
        meta: {
            title: "Home"
        }
    },
    {
        name: 'catalog',
        path: '/catalog',
        component: () => import("@/views/CatalogView.vue"),
        meta: {
            title: "Catalog"
        }
    }
]