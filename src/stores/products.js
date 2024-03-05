import {defineStore} from "pinia";
import {computed, reactive, ref} from "vue";

export const useProductsStore = defineStore('products', () => {

    const products = reactive([])

    // Загрузка товаров с API
    async function getProducts() {
        const response = await fetch(`https://dummyjson.com/products`)
        const { products: dummyProducts } = await response.json()
        products.splice(0, 0, ...dummyProducts)
    }

    // Получение товара
    async function getProduct(id) {
        let product
        product = getProductInProducts(id)

        if (!product) {
            const response = await fetch(`https://dummyjson.com/products/${id}`)
            product = await response.json()
        }

        return product
    }

    // Получение товара из стора
    function getProductInProducts(id) {
        return products.find(product => product.id === +id)
    }

    // Загрузка продуктов при первом использовании этого хранилища
    getProducts()

    // Возврат всех свойств и методов для возможности их получения из других файлов
    return {products, getProducts, getProduct}
})

