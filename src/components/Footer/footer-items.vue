<script setup>
import AboutUsFooter from './AboutUs-footer.vue'
import ContactUsFooter from './ContactUs-footer.vue'
import ContactWithUsFooter from './ContactWithUs-footer.vue'
import ExplorerFooter from './Explorer-footer.vue'
import { useGlobal } from '@/store/global.js'
</script>

<template>
  <VRow
    v-if="!useGlobal().loading"
    class="bg-purple-dark pb-8 "
  >
    <VCol
      cols="12"
      md="6"
      lg="3"
    >
      <AboutUsFooter />
    </VCol>
    <VCol>
      <ExplorerFooter />
    </VCol>

    <VCol
      cols="12"
      md="6"
      lg="3"
    >
      <ContactUsFooter />
    </VCol>

    <VCol
      cols="12"
      md="6"
      lg="3"
    >
      <ContactWithUsFooter />
    </VCol>
  </VRow>
</template>
