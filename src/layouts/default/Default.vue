<script setup>
import DefaultBar from './AppBar.vue'
import DefaultView from './View.vue'
import FooterItems from '@/components/Footer/footer-items.vue'
import DrowerHeader from '@/layouts/default/DrawerHeader.vue'
</script>

<template>
  <VApp>
    <DrowerHeader>
      <DefaultBar />

      <DefaultView />
    </DrowerHeader>
  </VApp>
  <FooterItems />
</template>
