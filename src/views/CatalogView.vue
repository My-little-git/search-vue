<script setup>

import ProductList from "@/components/ProductList.vue";
import ProductForm from "@/components/ProductForm.vue";
import {onBeforeRouteLeave} from "vue-router";
import {computed, ref, watch} from "vue";
import {storeToRefs} from "pinia";
import {useProductsStore} from "@/stores/products.js";

const { products } = storeToRefs(useProductsStore())

/* Фильтрация */

const search = ref('')

// Получение отфильтрованных продуктов на основе изменения поисковой строки
const filteredProducts = computed(() => {
  return products.value.filter(product => new RegExp(`${search.value}`, 'i').test(product.title))
})

/* Пагинация */

const activePage = ref(1)
const perPage = 6

// Подсчёт количества страниц
const pagesQty = computed(() => {
  return Math.ceil(filteredProducts.value.length / perPage)
})

// Пагинация продуктов в зависимости от активной страницы
const paginatedProducts = computed(() => {
  const startIndex = (activePage.value - 1) * perPage
  const endIndex = startIndex + perPage
  return filteredProducts.value.slice(startIndex, endIndex)
})

const isFirstPage = computed(() => {
  return activePage.value === 1
})

const isLastPage = computed(() => {
  return activePage.value === pagesQty.value
})

// Сброс страниц при изменении фильтров
watch(search, () => {
  activePage.value = 1
})

</script>

<template>

  <div class="container">

    <ProductForm class="mb-6" v-model:search="search" />
    <ProductList class="mb-3" :products="paginatedProducts" />
    <div class="flex justify-center mb-8 space-x-2">
      <!--  Уменьшение страницы если активная не первая   -->
      <button @click="!isFirstPage && activePage--" class="p-2 border-2 border-blue-600 rounded-md text-blue-600 hover:bg-blue-600 hover:text-white">Назад</button>

      <!--   Перебор всех страниц и изменение активной при нажатии   -->
      <button v-for="page in pagesQty"
           @click="activePage = page"
           :key="page"
           :class="{'bg-blue-600 text-white': page === activePage}"
           class="w-12 flex items-center justify-center text-lg h-12 border-2 border-blue-600 rounded-md text-blue-600 hover:bg-blue-600 hover:text-white">{{ page }}</button>

      <!--  Увеличение страницы если активная не последняя   -->
      <button @click="!isLastPage && activePage++" class="p-2 border-2 border-blue-600 rounded-md text-blue-600 hover:bg-blue-600 hover:text-white">Вперед</button>
    </div>

  </div>

</template>