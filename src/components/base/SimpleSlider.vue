<script setup>
const props = defineProps({ data: { type: Array, default: Array } })
</script>

<template>
  <VCarousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows="hover"
    class="rounded-lg"
  >
    <VCarouselItem
      v-for="image in props.data"
      :key="image.id"
      lazy-src="@/assets/default.png"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.50)"
      :src="image.src"
    />
  </VCarousel>
</template>
