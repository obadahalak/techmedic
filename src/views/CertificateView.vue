<script setup>
import { useCertificate } from '@/store/certificate.js'

import { usePagiante } from '@/base/paginate'
import SimpleCard from '@/components/base/SimpleCard.vue'
import SimplePaginate from '@/components/base/SimplePaginate.vue'

const certificateStore = useCertificate()

const { load } = usePagiante(certificateStore)
</script>

<template>
  <VContainer>
    <div class="mt-4 mb-10">
      <SimpleCard
        v-if="certificateStore.data.length > 0"
        :data="certificateStore.data"
        to="certificate"
      />
    </div>

    <SimplePaginate :load="load" />
  </VContainer>
</template>
