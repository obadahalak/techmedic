<script setup>
import { useCertificate } from "@/stores/certificate.js"
</script>
<template>
    <div v-if="useCertificate().empty" class="flex justify-center h-screen items-stretch ">
        <img src="@/assets/empty.png" alt="">
    </div>
</template>