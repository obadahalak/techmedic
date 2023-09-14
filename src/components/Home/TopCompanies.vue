<script setup>
import { useHome } from '@/store/Home'

const homeStore = useHome()
</script>

<template>
  <p class="text-h6 font-weight-bold mb-6 text-uppercase ">
    Top companies:
  </p>
  <VRow
    v-for="company in homeStore.companies"
    :key="company.id"
    no-gutters
  >
    <VCol
      cols="12"
      sm="5"
    >
      <VSheet

        class="pa-2 ma-2"
      >
        <RouterLink :to="{ name: 'company', params: { id: company.id } }">
          <VImg

            class="rounded-md bg-grey-lighten-4 rounded-md "
            :src="company.logo"
            aspect-ratio="16/9"
            height="300"
          />
        </RouterLink>
      </VSheet>
    </VCol>
    <VCol
      cols="12"
      sm="7"
    >
      <VSheet class=" text-md-start text-sm-start text-center mt-sm-6">
        <p class="text-h6  font-weight-bold">
          {{ company.name }}
        </p>
      </VSheet>
    </VCol>
  </VRow>
</template>
