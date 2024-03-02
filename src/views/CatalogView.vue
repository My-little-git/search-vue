<script setup>

import ProductList from "@/components/ProductList.vue";
import ProductForm from "@/components/ProductForm.vue";
import {onBeforeRouteLeave} from "vue-router";

// Функция которая выполняет переданную функцию до перехода на следующую страницу
// При возврате false отменяет переход
// При возврате объекта роута (напр. {name: 'product'}) переходит на этот роут
// Иначе переходит на тот роут на который вы переходили изначально
onBeforeRouteLeave(() => {
  return confirm('Вы уверены что хотите покинуть страницу?')
})

</script>

<template>

  <div class="container">

    <div class="grid">
      <RouterLink to="/catalog/phones">Телефоны</RouterLink>
      <RouterLink to="/catalog/refregirators">Холодильники</RouterLink>
    </div>

    <ProductForm class="mb-6" />
    <ProductList />

  </div>

</template>