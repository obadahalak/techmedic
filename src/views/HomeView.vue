<script setup>
import { computed, onMounted, reactive, ref } from 'vue'
import sliderHeader from '../components/Header/slider-header.vue'
import cardCompanyList from '../components/Home/TopCompanies/card-company-list.vue'
import cardProductList from '../components/Home/TopProducts/card-product-list.vue'
import { useHome } from '../stores/home.js'
const home = useHome();
let current_slide = ref(0);

let images = ref(home.bannners);


onMounted(() => {
  home.getCompanies();
  home.getProducts();
  home.getBanners().then(() => {

    images.value = home.bannners;
    images.value[0].active=true;
    setInterval(() => {

      if (isLastSlide());
      inactiveAllImages()
      images.value[current_slide.value]['active'] = true;
      current_slide.value++;


    }, 4000);
  });
});


function inactiveAllImages() {
  images.value.filter((i) => {
    i.active = false;
  });
}


function isLastSlide() {

  if (current_slide.value == images.value.length) {
    current_slide.value = 0;
    return true;
  }
}
function isFirstSlide() {
  if (current_slide.value == 0) {
    current_slide.value = images.value.length;
    return true;
  }
}

function next() {
  isLastSlide()

  inactiveAllImages();
  images.value[current_slide.value].active = true;
  current_slide.value += 1;
}
function prev() {
  isFirstSlide()
  inactiveAllImages()
  current_slide.value -= 1;
  images.value[current_slide.value].active = true;
}


</script>

<template>
  <div v-show="home.show()">

    <sliderHeader 
    v-show="home.bannners && images"
    :images="images"
    @nextSlide="next"
    @prevSlide="prev"
      />



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

