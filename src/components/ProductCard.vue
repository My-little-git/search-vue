<script setup>

// Получение объекта с данными о продукте которые мы передаём из других компонентов с помощью v-bind (:)
const { product } = defineProps(['product'])

</script>

<template>

  <div class="rounded-xl border-2 border-blue-600 overflow-hidden">
    <img class="w-full h-32 object-cover" :src="product.thumbnail" alt="">
    <div class="p-4">
      <div class="text-2xl">{{ product.price }} ₽</div>
      <div class="text-xl">{{ product.title }}</div>
      <div class="text-sm">{{ product.category }}</div>
    </div>
  </div>

</template>