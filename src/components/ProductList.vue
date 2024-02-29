<script setup>

import ProductCard from "@/components/ProductCard.vue";
import {useProductsStore} from "@/stores/products.js";
import {storeToRefs} from "pinia";

const productsStore = useProductsStore()
productsStore.getProducts()

const { filteredProducts } = storeToRefs(productsStore)

</script>

<template>

  <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-5">

    <ProductCard v-for="product in filteredProducts"
                 :key="product.id"
                 :product="product"/>

  </div>
</template>