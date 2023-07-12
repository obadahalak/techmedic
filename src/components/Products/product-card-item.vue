<script setup>

let props = defineProps(['products']);
</script>
<template>
    <div  v-for="product in props.products" :key="product.id" class="lg:w-10/12  w-1/2">

    <router-link :to="{name:'productPage',params:{id:`${product.id}`}}" >
        <!-- {{ product.image }} -->
            <img :src="`${product.image}`" class="rounded-md " alt="">
        </router-link>
        <div class="flex justify-center ">
            <div class="mt-2">


                <!-- <p class=" text-sm  ">{{ product.name }}</p> -->
            </div>
        </div>
        <div class="flex justify-center ">
            <div class="">


                <p class=" text-lg font-bold ">{{ product.name }}</p>
            </div>
        </div>
    </div>
</template>