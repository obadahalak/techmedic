<script setup>
const props = defineProps({ data: { type: Array, default: Array } })
</script>

<template>
  <VCarousel
    cycle
    :height="$vuetify.display.smAndDown ? 280 : 400"
    hide-delimiter-background
    show-arrows="hover"
    class="rounded-lg"
  >
    <VCarouselItem
      v-for="image in props.data"
      :key="image.id"

      :src="image.src"
    />
    <VImg

      src="@/assets/company-logo.webp"
      height="100%"
      eager
    />
  </VCarousel>
</template>
