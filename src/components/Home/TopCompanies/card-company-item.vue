<script setup>

let props= defineProps(['company']);

const baseImageUrl = import.meta.env.VITE_BASE_URL_IMAGE;
</script>
<template>
   
     
    <div  class="flex shadow-sm ">
      <div>
        <router-link :to="{name:'companyPage',params:{id:`${company.id}`}}" >

        <img
          class="lg:w-52 lg:h-52 md:w-52 md:h-52 w-32 h-36 object-cover"
          :src="`${baseImageUrl}${company.logo}`"
          alt=""
        />
        </router-link>
      </div>
      <div class="p-2 ml-5 lg:ml-10 lg:mt-2 w-1/2 ">
        <p class="font-bold text-lg lg:text-2xl ">{{ props.company.name }}</p>
       
      </div>
    </div>
  
</template>