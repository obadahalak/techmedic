<script setup>
import { onMounted, ref } from 'vue';
import { useProduct } from '../stores/product';
import sliderHeader from '../components/Header/slider-header.vue';
import { useRouter } from 'vue-router';
import { Carousel } from 'flowbite-vue';
const product = useProduct();

const  baseurlimage=import.meta.env.VITE_BASE_URL_IMAGE;
const id = useRouter().currentRoute.value.params.id;

onMounted(() => {
    // alert(id);
    product.getById(id);
   
});




</script>


<template>
    
    <div v-show="product.item?.images">

            <sliderHeader :images="product.item?.images"  />
       
        
    <div  class="grid place-items-center  ">
      

        <div class="lg:mt-5">

            <p class="text-2xl font-bold">{{ product.item?.name }}</p>
        </div>
    </div>
    <div class="ml-12 mt-10">
        <p class="text-lg font-bold">{{ product.item?.category?.name }}</p>
        <div class="p-2 w-10/12 flex  justify-between">
            <div class="lg:w-1/2">
                
                <p class="text-gray-700">{{ product.item?.description }}</p>
            </div>
            <div>
                
            </div>
        </div>
        <div class="flex  w-10/12 ">

            <p class=" text-lg font-bold ml-auto mb-2">{{ product.item?.price }}</p>
        </div>
        <hr class="w-10/12 my-10">


    </div>
    </div>
</template>