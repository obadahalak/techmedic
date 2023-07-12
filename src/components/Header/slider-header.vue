<script setup>
import { useHome } from "../../stores/home";
import { Carousel } from 'flowbite-vue'
import { onMounted } from "vue";

const props=defineProps(['images']);
  

</script>

<template>

<div class="mx-4">

  <Carousel      :pictures="props.images"></Carousel>

</div>
  </template>

<style scoped>


</style>