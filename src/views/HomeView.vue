<script setup>
import { onMounted } from 'vue'
import sliderHeader from '../components/Header/slider-header.vue'
import cardCompanyList from '../components/Home/TopCompanies/card-company-list.vue'
import cardProductList from '../components/Home/TopProducts/card-product-list.vue'
import { useHome } from '../stores/home.js'
const home = useHome();
onMounted(() => {
  home.getCompanies();
  home.getProducts();
  home.getBanners();
});

</script>

<template>
    <div v-show="home.show()">
      
    <sliderHeader :images="home.bannners"  />
    <div class="mt-20 lg:ml-20 md:ml-10  ml-5  ">
      <cardCompanyList />
    </div>
    <div class="bg-gray-100">

      <div class="mt-20 lg:ml-20 md:ml-10 ml-5  ">
        <cardProductList />
      </div>
    </div>
  </div>
</template>
