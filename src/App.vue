<script setup>
import footerItems from '@/components/Footer/footer-items.vue'
import navbarHeader from '@/components/Header/navbar-header.vue'
import loader from '@/components/base/loader.vue'

</script>

<style>
@font-face {
  font-family: leelawad;
  src: url('assets/leelawad.woff');
}
</style>

<template>
  <div class="flex flex-col h-screen justify-between" style="font-family: leelawad;">

    <navbarHeader/>
    
    <loader/>
   
    <div class="mb-auto ">
      
      <RouterView />
    </div>

    <footerItems />
  </div>
</template>

