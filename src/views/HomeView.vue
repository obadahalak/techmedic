<script setup>
// import { onMounted } from 'vue'
import TopCompanies from '@/components/Home/TopCompanies.vue'
import TopProducts from '@/components/Home/TopProducts.vue'
import { useHome } from '@/store/Home'
import SimpleSlider from '@/components/base/SimpleSlider.vue'
import TopCertificates from '@/components/Home/TopCertificates.vue'

const homeStore = useHome()

// onMounted(() => {
homeStore.getBanners()
homeStore.allServices()

// })
</script>

<template>
  <div>
    <VContainer>
      <SimpleSlider :data="homeStore.bannners" />
      <div class="mt-12">
        <TopCompanies />
      </div>
      <div class="mt-8">
        <TopCertificates />
      </div>
    </VContainer>
    <TopProducts />
  </div>
</template>
