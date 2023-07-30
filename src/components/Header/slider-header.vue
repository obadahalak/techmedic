<script setup>

const props = defineProps(['images','attr']);


</script>

<template>
  <div class="mx-4">
    <div  class="w-full h-80 relative ">

<div class="flex justify-center relative ">
  <div class="absolute slider-item  w-full" v-for="image in images">

    <img v-bind="$attrs" class="   h-96	mx-auto w-[95%]" :src="image.src" v-show="image.active == true">
  </div>
  <div class="absolute inset-0  ">
    <div class="flex items-center  justify-between h-96">


      <button class="btn lg:mx-10 mx-4 " @click="$emit('nextSlide')">&#10094;</button>
      <button class="btn lg:mx-10 mx-4" @click="$emit('prevSlide')">&#10095;</button>

    </div>
  </div>
</div>
</div>

  </div>
</template>
<style scoped>
.btn {

  padding: 16px;
  color: black;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
}
</style>
