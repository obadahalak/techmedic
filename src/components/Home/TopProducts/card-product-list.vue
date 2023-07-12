
<script setup>
import cardProductItem from './card-product-item.vue';
import { useHome } from '@/stores/home.js'
const home = useHome();

</script>
<template>
  <div class="flex my-10">
    <p class="mt-10 text-lg font-bold">Top products</p>
  </div>

  <div class="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 place-items-center ">

    <cardProductItem v-for="product in  home.products" :key="product.id" :product="product" />

  </div>

 
</template>