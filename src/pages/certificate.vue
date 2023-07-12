<script setup>
import { computed, onMounted } from 'vue';
import { useCertificate } from '../stores/certificate';
import { useRoute } from 'vue-router';
import { useGlobal } from '@/stores/global';

const route = useRoute();

const certificate = useCertificate();
onMounted(() => {

    useCertificate().getById(route.params['id']);
});

const showImage = computed(() => {
  
    return certificate.item.image !== '' && !useGlobal().loading;
});
</script>


<template>

    
        <div class="grid place-items-center  ">
            <img class="  lg:h-80  h-4/6 rounded-md  object-scale-down	 border	" v-show="showImage"
                :src="certificate.item.image" alt="">
            <img class="lg:w-1/2  lg:h-80 w-10/12 h-4/6 rounded-md " v-show="!showImage" src="@/assets/d.png"
                alt="">


        </div>
        <div class="ml-12 mt-10">


            <div class="mt-10">
                <p class="text-lg font-bold">{{ certificate.item.title }}</p>
                <ul class=" ml-5">
                    <li class="w-10/12 text-gray-900 my-6">

                        <div class="flex">

                            <svg class="mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                viewBox="0 0 12 12">
                                <g transform="rotate(90 6 6)">
                                    <path fill="purple"
                                        d="M6.786 1.459a.903.903 0 0 0-1.572 0L1.122 8.628C.774 9.238 1.211 10 1.91 10h8.18c.698 0 1.135-.762.787-1.372l-4.092-7.17Z" />
                                </g>
                            </svg>

                            <p class="text-md ">
                                {{ certificate.item.description }}
                            </p>
                        </div>
                    </li>

                </ul>
            </div>
            <hr class="w-10/12">
        </div>
    
</template>
