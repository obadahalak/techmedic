<script setup>
import { onMounted } from 'vue'
import TopCompanies from '@/components/Home/TopCompanies.vue'
import TopProducts from '@/components/Home/TopProducts.vue'
import { useHome } from '@/store/Home'
import SimpleSlider from '@/components/base/SimpleSlider.vue'

const homeStore = useHome()
onMounted(() => {
  homeStore.getCompanies()
  homeStore.getProducts()
  homeStore.getBanners()
})
</script>

<template>
  <div v-show="homeStore.bannners.length > 0">
    <VContainer>
      <SimpleSlider :data="homeStore.bannners" />
      <div class="mt-8">
        <TopCompanies />
      </div>
    </VContainer>
    <TopProducts />
  </div>
</template>
