<script setup>

import ProductCard from "@/components/ProductCard.vue";
import {storeToRefs} from "pinia";
import {useProductsStore} from "@/stores/products.js";
import {useRoute} from "vue-router";
import {reactive, ref} from "vue";

const route = useRoute()
const productsStore = useProductsStore()

const product = ref({})

productsStore.getProduct(route.params.id)
    .then(productDummy => {
      product.value = productDummy
    })

</script>

<template>

  <div class="container">

    <ProductCard :product="product" />

  </div>

</template>

<style scoped>

</style>