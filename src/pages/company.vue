<script setup>
import { computed, onMounted } from 'vue';
import productCardsList from '../components/Products/product-cards-list.vue';
import { useCompany } from '../stores/company';
import { useRouter } from 'vue-router';
import { useProduct } from "../stores/product";



const products = useProduct();
const company = useCompany();

function fetchCompany() {

    const companyId = useRouter().currentRoute.value.params.id;
    company.getByid(companyId);
    products.getAll(`?company=${companyId}`);
    products.company_id = companyId;

}
onMounted(() => {

    fetchCompany();
});
function show() {
    if (company.item && products.data.length !== 0) return true;
    return false;
}

</script>

<template>
    <div v-show="show()">

        <div class=" ml-2 flex  w-1/2 lg:w-1/4 p-1 bg-green rounded-r-2xl text-white shadow-lg">

            <p class="ml-5 font-semibold truncate">{{ company.item?.name }}</p>
        </div>


        <product-cards-list />
    </div>
</template>