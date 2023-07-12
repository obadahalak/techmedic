certificate<script setup>

let props = defineProps(['certificate']);

const  baseurlimage=import.meta.env.VITE_BASE_URL_IMAGE;
</script>
<template>
   
    <div class="w-1/2 ">
        <div class="Header-title bg-purple text-white p-1 rounded-r-2xl w-11/12 sticky -mb-4    ">
            <div class=" flex w-full p-1">

                <p class="ml-5 font-semibold truncate">{{ props.certificate.title }}</p>
            </div>
        </div>
        <router-link :to="{ name: 'certificatePage', params: { id: `${props.certificate.id}` } }">

            <img  class="h-50 object-contain" :src="`${props.certificate.image}`" alt="">
        </router-link>
    </div>
</template>