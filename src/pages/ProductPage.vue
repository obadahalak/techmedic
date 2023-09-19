<script  setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useProduct } from '@/store/product'
import SimpleSlider from '@/components/base/SimpleSlider.vue'

const productStore = useProduct()

const id = useRouter().currentRoute.value.params.id
onMounted(() => {
  productStore.getById(id)
})
</script>

<template>
  <VContainer
    v-if="productStore.item"
    class="mt-4"
  >
    <SimpleSlider :data="productStore.item.images" />
    <div class="d-flex  justify-space-between mx-8  text-h5 font-weight-medium text-center mt-4 ">
      <p>{{ productStore.item.name }}</p>
      <p class=" text-decoration-underline">
        {{ productStore.item.price }}
      </p>
    </div>

    <div class="mt-6">
      <p class="text-h5 font-weight-medium ">
        {{ productStore.item?.category?.name }}
      </p>
      <p class="text-h6  font-weight-light  ma-2 mb-15">
        {{ productStore.item.description }}
      </p>
    </div>
  </VContainer>
</template>
