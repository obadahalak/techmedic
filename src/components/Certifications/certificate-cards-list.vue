<script setup>

import certifiacteCardItem from "./certificate-card-item.vue";
import pagination from "../base/pagination.vue";
import { useCertificate } from "@/stores/certificate.js"
import empty from "@/components/empty.vue";

const certificate = useCertificate();

</script>
<template>
    <empty />
    <div  class="grid lg:grid-cols-2  grid-cols-1 place-items-center gap-20 mt-10  my-10">

        <certifiacteCardItem v-for="certificateItem in certificate.data" :key="certificateItem.id" :certificate=certificateItem />

    </div>

    <div class="flex justify-center my-10">
        <pagination :store="certificate" :meta="certificate.meta" />
    </div>
</template> 