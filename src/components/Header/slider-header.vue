<script setup>
import { Carousel } from 'flowbite-vue'
const props = defineProps(['images']);


</script>

<template>
  <div class="mx-4">

    <Carousel :pictures="props.images"></Carousel>

  </div>
</template>
