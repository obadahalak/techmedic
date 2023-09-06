<script setup>

let props = defineProps(['product']);
const baseImageUrl = import.meta.env.VITE_BASE_URL_IMAGE;
</script>
<template>
  
  <div class="mb-10">

    <img class="w-52" :src="`${props.product.image}`" alt="" />

    <div class="mt-4 w-52">
      <p class="text-lg font-bold">{{ props.product.name }}</p>
      <div class="mt-2">
        <p class="font-light text-gray-700 h-24 overflow-hidden">
          {{ props.product.description }}
        </p>
      </div>
    </div>
  </div>
</template>