
<script setup>
import { useCompany } from "../../stores/company";

const baseImageUrl = import.meta.env.VITE_BASE_URL_IMAGE;
</script>
<template>
    
    
    <div v-for="company in useCompany().data" :key="company.id" >
        <div class=" bg-green text-white p-1 w-11/12 sticky -mb-4   " style="border-radius: 0px 40px 40px 0px;">


            <p class="p-1 ml-5 font-semibold truncate">{{ company.name }}</p>

        </div>
        <router-link :to="{ name: 'companyPage', params: { id: `${company.id}` } }">
                <div class="bg-gray-100 rounded-md shadow-sm">

                    <img class="w-72 h-60 object-contain " :src="`${baseImageUrl}${company.logo}`" alt="">
                </div>
        </router-link>
    </div>
</template>     