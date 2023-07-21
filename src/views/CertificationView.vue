<script setup>
import { onMounted } from 'vue';
import certificateCardsList from '../components/Certifications/certificate-cards-list.vue';
import empty from '@/pages/empty.vue'
import { useCertificate } from "@/stores/certificate.js"

const certificate = useCertificate();

onMounted(() => {
   certificate.getAll();
});

</script>

<template>
   <div v-if="certificate.data">
      <certificateCardsList v-if="certificate.show()" />
      <empty v-if="!certificate.show()"/>
   </div>

</template>

