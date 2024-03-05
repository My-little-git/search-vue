<script setup>

import ProductCard from "@/components/ProductCard.vue";
import {useRouter} from "vue-router";

const router = useRouter()

// Получаем продукты, которые передаём в компонент
const { products } = defineProps(['products'])


</script>

<template>

  <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-5">

    <!--  Рендерим карточки продуктов, передавая каждой карточке данные о продукте,
    а также вешаем событие для перехода на роут (страницу) продукта -->
    <ProductCard v-for="product in products"
                 :key="product.id"
                 :product="product"
                 @click="router.push({name: 'product', params: {id: product.id}})"/>

  </div>
</template>