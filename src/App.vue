<script setup>
import footerItems from '@/components/Footer/footer-items.vue'
import navbarHeader from '@/components/Header/navbar-header.vue'
import loader from '@/components/base/loader.vue'

</script>

<template>
  <div class="flex flex-col h-screen justify-between">

    <navbarHeader/>
    
    <loader/>
   
    <div class="mb-auto ">
      
      <RouterView />
    </div>

    <footerItems />
  </div>
</template>

