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
  home.getBanners().then((response) => {

    images.value = home.bannners;
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

    setInterval(() => {

      if (isLastSlide());
      inactiveAllImages()
      images.value[current_slide.value]['active'] = true;
      current_slide.value++;


    }, 4000);
  });
});




</script>

<template>
  <div v-show="home.show()">
  
    <div v-show="home.bannners && images" class="w-full h-80 relative ">

      <div class="flex justify-center relative ">
        <div class="absolute slider-item  w-full" v-for="image in images">

          <img class="   h-96	mx-auto w-[95%]" :src="image.src" v-show="image.active == true">
        </div>
        <div class="absolute inset-0  ">
          <div class="flex items-center  justify-between h-96">


            <button class="btn lg:mx-10 mx-4 " @click="prev()">&#10094;</button>
            <button class="btn lg:mx-10 mx-4" @click="next()">&#10095;</button>

          </div>
        </div>
      </div>
    </div>



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

<style scoped>
.btn {

  padding: 16px;
  color: black;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
}
</style>