<script setup>

import ProductList from "@/components/ProductList.vue";
import ProductForm from "@/components/ProductForm.vue";
import {onBeforeRouteLeave} from "vue-router";

onBeforeRouteLeave(() => {
  return confirm('Вы уверены что хотите покинуть страницу?')
})

</script>

<template>

  <div class="container">

    <ProductForm class="mb-6" />
    <ProductList />

  </div>

</template>