<script setup>

import ProductCard from "@/components/ProductCard.vue";
import {storeToRefs} from "pinia";
import {useProductsStore} from "@/stores/products.js";
import {useRoute} from "vue-router";
import {reactive, ref} from "vue";


// Получение значения параметра id из адресной строки

const route = useRoute()
const id = route.params.id

const product = ref({})

// Деструктуризированное получение метода для получения продукта по id
const { getProduct } = useProductsStore()

// Получение продукта по id при загрузке этого компонента (загружается при переходе на товар)
// Используется then потому что метод возвращает Promise
getProduct(id)
    .then(dummyProduct => product.value = dummyProduct)


</script>

<template>

  <div class="container">

    <!--  Передача компоненту продукта данных о продукте для отрисовки их при загрузке  -->
    <ProductCard :product="product" />

  </div>

</template>