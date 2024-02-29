<script setup>

import {storeToRefs} from "pinia";
import {useProductsStore} from "@/stores/products.js";

const { search } = storeToRefs(useProductsStore())

</script>

<template>

  <form>
    <input
        v-model="search"
        class="w-80 border-2 border-blue-600 px-3 py-2 rounded-xl"
        type="text">
  </form>

</template>