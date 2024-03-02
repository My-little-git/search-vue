<script setup>

</script>

<template>
  <header class="container py-6 text-2xl space-x-4">

    <!--  Описание ссылок  -->
    <RouterLink to="/">Главная</RouterLink>
    <RouterLink to="/catalog">Каталог</RouterLink>

  </header>

  <main>

    <!--  Объявление компонента который будет изображать нужный view при нужном роуте,
     которые определяются в файле routes  -->
    <RouterView />

  </main>
</template>