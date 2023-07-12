<script setup>

import { useCompany } from "../../stores/company";
import companyCardItem from "./company-card-item.vue";

useCompany().getAll();

</script>
<template>
    <div class="grid lg:grid-cols-2  grid-cols-1 place-items-center gap-20 mt-10  my-10">


        <companyCardItem />

    </div>
</template>