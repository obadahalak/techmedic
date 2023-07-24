<script setup>

let props = defineProps(['certificate']);

</script>
<template>
   
    <div class=" ">
        <div class="Header-title bg-purple text-white p-1 rounded-r-2xl w-11/12 sticky -mb-4    ">
            <div class=" flex w-full p-1">

                <p class="ml-5 font-semibold truncate">{{ props.certificate.title }}</p>
            </div>
        </div>
        
        <div class="bg-gray-100 rounded-md shadow-sm">
                <router-link :to="{ name: 'certificatePage', params: { id: `${props.certificate.id}` } }">

                <img  class="w-72 h-60 object-contain" :src="`${props.certificate.image}`" alt="">
            </router-link>
            </div>
    </div>
</template>