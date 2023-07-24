<script setup>

let props = defineProps(['products']);
</script>
<template>
    <div v-for="product in props.products" :key="product.id" class="">

        <router-link :to="{ name: 'productPage', params: { id: `${product.id}` } }">

            <img :src="`${product.image}`" class="rounded-md  w-64 h-72  border-2" alt="">
        </router-link>
       
     
            <div class="flex">


                <p class=" mx-auto text-lg font-bold ">{{ product.name }}</p>
           
        </div>
    </div>
</template>