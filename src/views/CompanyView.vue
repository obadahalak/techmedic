<script setup>
import { usePagiante } from '@/base/paginate'
import SimpleCard from '@/components/base/SimpleCard.vue'
import SimplePaginate from '@/components/base/SimplePaginate.vue'
import { useCompany } from '@/store/company'

const companyStore = useCompany()
const { load } = usePagiante(companyStore)
</script>

<template>
  <VContainer>
    <div class="mt-10 mb-10">
      <SimpleCard
        :data="companyStore.data"
        to="company"
      />
    </div>

    <SimplePaginate :load="load" />
  </VContainer>
</template>
