<script setup>
import Skeleteon from '@/layouts/Skeleteon.vue'
import { useHome } from '@/store/Home'

const homeStore = useHome()
</script>

<template>
  <div

    class="bg-grey-lighten-2 pb-8"
  >
    <p class="text-h6 font-weight-bold   text-uppercase pa-6 ">
      Top products:
    </p>
    <Skeleteon :loading="homeStore.products.length > 0" />

    <VRow
      v-if="homeStore.products.length > 0"
      no-gutters
      justify="center"
    >
      <VCol
        v-for="product in homeStore.products"
        :key="product.id"
        cols="12"
        sm="4"
        class="mb-8"
      >
        <VCard
          :to="{ name: 'product', params: { id: product.id } }"
          class="mx-auto"
          max-width="344"
          color="transparent"
          elevation="0"
        >
          <VCardItem>
            <VImg
              :src="product.image"
              lazy-src="@/assets/company-logo.webp"
              height="260"
              aspect-ratio="16/9"

              class="rounded-lg border"
            />

            <div class="text-h6 my-2 text-subtitle">
              {{ product.name }}
            </div>
            <div
              class="text-body  overflow-y-auto"
              style="max-height: 120px;"
            >
              {{ product.description }}
            </div>
          </VCardItem>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>
