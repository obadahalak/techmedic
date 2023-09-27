<script setup>
import { VSkeletonLoader } from 'vuetify/labs/VSkeletonLoader'

const props = defineProps({ loading: { default: false, type: Boolean } })
</script>

<template>
  <div
    v-if="!props.loading"
    class="d-flex"
  >
    <VCol
      v-for="_ in 3"
      :key="_"
      cols="12"
      lg="4"
      md="6"
      sm="6"
    >
      <VSkeletonLoader
        class="mx-auto border-sm"
        max-width="300"
        type="image, article"
      />
    </VCol>
  </div>
</template>
