<script setup>
import navbarHeader from '../components/Header/navbar-header.vue';
import companyCardsList from '../components/Companies/company-cards-list.vue';
import navbarHeaderSearch from '../components/Header/navbar-header-search.vue';
import {useGlobal} from '@/stores/global';
</script>

<template>

      
     
      
    <company-cards-list  :class=" {'opacity-50' : useGlobal().loading} " />
    
</template>