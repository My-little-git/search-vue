<script setup>

</script>

<template>
  <header class="container py-6 text-2xl space-x-4">

    <RouterLink to="/">Главная</RouterLink>
    <RouterLink to="/catalog">Каталог</RouterLink>

  </header>

  <main>

    <RouterView />

  </main>
</template>