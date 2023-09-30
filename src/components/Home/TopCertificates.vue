<script setup>
import Skeleteon from '@/layouts/Skeleteon.vue'
import { useHome } from '@/store/Home'

const homeStore = useHome()
</script>

<template>
  <p class="text-h6 font-weight-bold mb-4 text-uppercase ">
    Top certificates:
  </p>
  <Skeleteon :loading="homeStore.certificates.length > 0" />
  <VRow v-if="homeStore.certificates.length > 0">
    <VCol
      v-for="certificate in homeStore.certificates"
      :key="certificate.id"
      cols="12"
      lg="4"
      md="6"
      sm="6"
    >
      <VSheet

        class="pa-2 ma-2 "
      >
        <RouterLink :to="{ name: 'certificate', params: { id: certificate.id } }">
          <VImg

            class="rounded-md border-sm "
            lazy-src="@/assets/company-logo.webp"
            :src="certificate.image"
            aspect-ratio="16/9"
            height="260"
            alt="certificate iamge"
          />
        </RouterLink>
        <p class="text-h6  mt-2 text-center font-weight-bold">
          {{ certificate.title }}
        </p>
      </VSheet>
    </VCol>
  </VRow>
</template>
