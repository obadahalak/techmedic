<script setup>
import { useHome } from '@/store/Home'

const homeStore = useHome()
</script>

<template>
  <div
    v-if="homeStore.products.length > 0"
    class="bg-grey-lighten-2"
  >
    <p class="text-h6 font-weight-bold  text-uppercase pa-6 ">
      Top products:
    </p>
    <VRow
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
              :width="300"
              height="300"
              aspect-ratio="16/9"
              cover
              class="rounded-lg"
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
