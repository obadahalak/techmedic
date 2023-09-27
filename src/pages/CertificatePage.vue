<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useCertificate } from '@/store/certificate'

const certificateStore = useCertificate()

onMounted(() => {
  certificateStore.getById(useRouter().currentRoute.value.params.id)
})
</script>

<template>
  <VContainer
    v-if="certificateStore.item"
    class="mt-4"
  >
    <VImg
      :src="certificateStore.item.image"
      max-height="400"
      class="rounded-lg"
      lazy-src="@/assets/company-logo.webp"
    />

    <p class="text-h5 font-weight-medium text-center mt-4  text-decoration-underline">
      {{ certificateStore.item.title }}
    </p>
    <div class="mt-4">
      <p class="text-h6  font-weight-light mb-15">
        {{ certificateStore.item.description }}
      </p>
    </div>
  </VContainer>
</template>
