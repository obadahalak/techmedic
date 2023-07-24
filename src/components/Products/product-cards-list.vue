<script setup>


import productCardItem from "./product-card-item.vue";
import { useProduct } from "../../stores/product";
import pagination from '@/components/base/pagination.vue'
const products = useProduct();

</script>
<template>
    <div class="grid lg:grid-cols-3  md:grid-cols-2  place-items-center gap-8  mt-10  ">
        
        <productCardItem  :products="products.data" />
    </div>
    <div class="flex justify-center my-20 ">
            <pagination 
            :meta="products.meta"
            :store="products"
            />
    </div>
</template>