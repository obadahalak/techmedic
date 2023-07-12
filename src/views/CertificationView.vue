<script setup>
import { onMounted } from 'vue';
import certificateCardsList from '../components/Certifications/certificate-cards-list.vue';
import { useCertificate } from "@/stores/certificate.js"

const certificate = useCertificate();

onMounted(() => {
   certificate.getAll();
});

</script>

<template>
   <certificateCardsList v-if="certificate.show()" />
</template>

