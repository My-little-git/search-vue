<script setup>

import ProductCard from "@/components/ProductCard.vue";
import {useProductsStore} from "@/stores/products.js";
import {storeToRefs} from "pinia";;
import {useRouter} from "vue-router";

const router = useRouter()

// Получение отфильтрованных продуктов для отрисовки
// Используем storeToRefs чтобы сохранить реактивность (чтобы если в сторе данные поменялись, то продукты перерендерились)
const { filteredProducts } = storeToRefs(useProductsStore())

</script>

<template>

  <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-5">

    <!--  Рендерим карточки продуктов, передавая каждой карточке данные о продукте,
    а также вешаем событие для перехода на роут (страницу) продукта -->
    <ProductCard v-for="product in filteredProducts"
                 :key="product.id"
                 :product="product"
                 @click="router.push({name: 'product', params: {id: product.id}})"/>

  </div>
</template>