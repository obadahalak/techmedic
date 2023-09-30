<script setup>
import { useHome } from '@/store/Home'
import Skeleteon from '@/layouts/Skeleteon.vue'

const homeStore = useHome()
</script>

<template>
  <p class="text-h6 font-weight-bold mb-4  text-uppercase ">
    Top companies:
  </p>
  <Skeleteon :loading="homeStore.companies.length > 0" />

  <VRow v-if="homeStore.companies.length > 0">
    <VCol
      v-for="company in homeStore.companies"
      :key="company.id"
      cols="12"
      lg="4"
      md="6"
      sm="6"
    >
      <VSheet

        class="pa-2 ma-2 "
      >
        <RouterLink :to="{ name: 'company', params: { id: company.id } }">
          <VImg
            class="rounded-md border-sm "
            lazy-src="@/assets/company-logo.webp"
            :src="company.logo"
            aspect-ratio="16/9"
            height="260"
            alt="company image"
          />
        </RouterLink>
        <p class="text-h6 mt-2 text-center font-weight-bold">
          {{ company.name }}
        </p>
      </VSheet>
    </VCol>
  </VRow>
</template>
