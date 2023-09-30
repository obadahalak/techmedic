<script setup>
import DefaultView from './View.vue'
import FooterItems from '@/components/Footer/footer-items.vue'
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
