
<script setup>
import { useCompany } from "../../stores/company";

const baseImageUrl = import.meta.env.VITE_BASE_URL_IMAGE;
</script>
<template>
    
    
    <div v-for="company in useCompany().data" :key="company.id" class="w-1/2 ">
        <div class=" bg-green text-white p-1 w-11/12 sticky -mb-4   " style="border-radius: 0px 40px 40px 0px;">


            <p class="p-1 ml-5 font-semibold truncate">{{ company.name }}</p>

        </div>
        <router-link :to="{ name: 'companyPage', params: { id: `${company.id}` } }">

            <img class="" :src="`${baseImageUrl}${company.logo}`" alt="">
        </router-link>
    </div>
</template>