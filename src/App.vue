<script setup>

import CatalogView from "@/views/CatalogView.vue";
import ProductList from "@/components/ProductList.vue";
import ProductForm from "@/components/ProductForm.vue";
</script>

<template>
  <header class="container py-6 text-2xl space-x-4">

    <a href="/">Главная</a>
    <a href="/catalog">Каталог</a>

  </header>

  <main>

    <div class="container">

      <ProductForm class="mb-6" />
      <ProductList />

    </div>

  </main>
</template>