<script setup>
import { Dropdown } from 'flowbite'
import { ref, onMounted } from 'vue'
import { useCompany } from '../../stores/company';
import { useProduct } from '../../stores/product';
import { useRouter } from 'vue-router';

let currentOption = ref('All categories')
const dropdown = ref()
const closeDropdown = ref(() => { })
const company = useCompany();
const product =useProduct();
const companyId = useRouter().currentRoute.value.params.id;

onMounted(() => {

    const $targetEl = document.getElementById('dropdown')
    const $triggerEl = document.getElementById('dropdown-button')
    const options = {}
    if ($targetEl) {
        dropdown.value = new Dropdown($targetEl, $triggerEl, options)
        closeDropdown.value = () => {
            dropdown.value.hide()
        }
    }
})
function updateCurrentItem(currentItem) {
   
    product.company_id=companyId;
    product.category_id=currentItem.id;
    product.getAll(`?company=${companyId}&category=${currentItem.id}`)
    currentOption.value = currentItem.name
    dropdown.value.hide()
}



</script>
<template>
    <div class="">
        <button id="dropdown-button" data-dropdown-toggle="dropdown"
            class="p-[10.7px] border-gray-200 flex-shrink-0 z-10 inline-flex items-center  text-sm font-medium text-center text-gray-900 bg-slate-500 rounded-l-lg dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white"
            type="button">
            <div class="w-28 h-5 overflow-hidden">
                <p class="overflow-hidden">{{ currentOption }}</p>
            </div>
            <svg aria-hidden="true" class="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
            </svg>
        </button>
        <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-200">
            <ul id="dropdownMenu" class="py-2 text-sm bg-slate-200 text-gray-700 dark:text-dark rounded-md"
                aria-labelledby="dropdown-button">
                
                <li v-show="company.item" v-for="category in company.item?.categories" @click="updateCurrentItem(category)">
                    <button type="button" :class="{ ' font-bold bg-slate-50': category == 'All types' }"
                        class="inline-flex w-full px-4 py-2 hover:bg-gray-600 hover:text-white">
                        {{ category.name }}
                    </button>
                </li>

            </ul>
        </div>
    </div>
</template>