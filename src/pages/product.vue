<script setup>
import { onMounted, ref } from 'vue';
import { useProduct } from '../stores/product';
import sliderHeader from '../components/Header/slider-header.vue';
import { useRouter } from 'vue-router';
const product = useProduct();

const id = useRouter().currentRoute.value.params.id;
let current_slide = ref(0);
let images = ref(product.item.images);
onMounted(() => {

    product.getById(id).then(() => {


        images.value = product.item.images;
        images.value[0].active = true;
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
    <div v-show="product.item?.images">
        <div class="mb-20">

            <sliderHeader 
            class="lg:mx-20 object-contain "
            :images="images"
            @nextSlide="next"
            @prevSlide="prev"
            />
        </div>


        <div class="grid place-items-center  ">


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