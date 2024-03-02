<script setup>

import {useRoute} from "vue-router";

const route = useRoute()

</script>

<template>

  <div class="container">{{ route.params.category }}</div>

</template>

<style scoped>

</style>