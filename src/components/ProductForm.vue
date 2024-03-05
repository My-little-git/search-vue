<script setup>

import {storeToRefs} from "pinia";
import {useProductsStore} from "@/stores/products.js";
import {watch} from "vue";
import {useRoute, useRouter} from "vue-router";

// Связываем передающийся поиск
const search = defineModel('search')

const route = useRoute()
const router = useRouter()

// search.value = route.query.search || ''
//
// watch(search, () => {
//   router.replace({query: {search: search.value}})
// })

</script>

<template>

  <form>
    <input
        v-model="search"
        class="w-80 border-2 border-blue-600 px-3 py-2 rounded-xl"
        type="text">
  </form>

</template>