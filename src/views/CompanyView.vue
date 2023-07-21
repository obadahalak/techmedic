<script setup>
import companyCardsList from '../components/Companies/company-cards-list.vue';
import { useGlobal } from '@/stores/global';
import { useCompany } from '../stores/company';
import empty from '../pages/empty.vue';
import { onMounted } from 'vue';

const company = useCompany();
onMounted(() => {

    company.getAll();

});
</script>

<template>
    <div v-if="company.data">
        <company-cards-list :class="{ 'opacity-50': useGlobal().loading }" v-show="company.show()" />
        <empty v-show="!company.show()" />
    </div>
</template>