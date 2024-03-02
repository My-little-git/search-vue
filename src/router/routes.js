
// Описание роутов и их экспорт для использования в других файлах при импорте
export const routes = [

    // import - метод асинхронной подгрузки компонента для текущего роута
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
    },

    // :category - параметр который можно получить в компонентах с помощью route.params.category
    // (\\D+) - скобки после параметра это регулярное выражение для валидации перехода
    // (конкретно здесь все символы кроме цифр и от одного символа)
    {
        name: 'category',
        path: '/catalog/:category(\\D+)',
        component: () => import("@/views/CategoryView.vue"),
        meta: {
            title: "Category"
        }
    },
    {
        name: 'product',
        path: '/catalog/:id(\\d+)',
        component: () => import("@/views/ShowView.vue"),
        meta: {
            title: "Product"
        }
    }
]