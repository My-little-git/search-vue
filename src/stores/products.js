import {defineStore} from "pinia";
import {computed, reactive, ref} from "vue";

export const useProductsStore = defineStore('products', () => {

    const search = ref('')

    const products = reactive([])

    const filteredProducts = computed(() => {
        return products.filter(product => new RegExp(`${search.value}`, 'i').test(product.title))
    })

    async function getProducts() {
        const response = await fetch(`https://dummyjson.com/products`)
        const { products: dummyProducts } = await response.json()
        products.splice(0, 0, ...dummyProducts)
    }

    // async function getProduct(id) {
    //     let product = findInProductsById(id)
    //     if (!product) {
    //         const response = await fetch(`https://dummyjson.com/products/${id}`)
    //         product = await response.json()
    //     }
    //     return product
    // }

    // function findInProductsById(id) {
    //     return products.find(product => product.id === +id)
    // }

    return {products, search, filteredProducts, getProducts}
})

