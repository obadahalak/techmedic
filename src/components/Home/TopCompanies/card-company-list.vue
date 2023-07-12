
<script setup>
import cardCompanyItem from './card-company-item.vue'
import { useHome } from '@/stores/home.js'
const home = useHome();


</script>
<template>
  <div class="flex my-10">
    <p class=" mt-10 text-lg font-bold">Top Companies</p>
    </div>
    <div class="space-y-10 ml-5">

      <cardCompanyItem   v-for="company in home.companies" :key="company.id" :company="company" />
    </div>

  <!-- </div> -->
</template>