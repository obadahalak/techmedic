<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { usePagiante } from '@/base/paginate.js'
import SearchBar from '@/components/header/SearchBar.vue'
import { useCompany } from '@/store/company.js'
import { useProduct } from '@/store/product.js'
import SimplePaginate from '@/components/base/SimplePaginate.vue'

const search = ref('')
const category = ref('')

const companyStore = useCompany()
const producStore = useProduct()
onMounted(() => {
  companyStore.getByid(useRouter().currentRoute.value.params.id)
})

const id = useRouter().currentRoute.value.params.id

const { load } = usePagiante(producStore, '?company=' + `${useRouter().currentRoute.value.params.id}`
    + '&category=' + `${category.value}`
    + '&search_key=' + `${search.value}`)

function filter(e) {
  producStore.data = []
  producStore.getAll(`?company=${id
  }&search_key=` + `${e}`,
  '&category=' + `${e}`,
  )
}
function reset() {
  category.value = null
  search.value = null
  producStore.getAll(`?company=${id}`)
}
</script>

<template>
  <VContainer>
    <SearchBar
      class="mt-8"
      :category-list="companyStore.item.categories"
      @search="filter"
      @select-category="filter"
      @reset="reset"
    />

    <div
      :class=" $vuetify.display.smAndDown ? 'w-50' : 'w-25' "
      class=" mt-8 pa-3 bg-green-dark   rounded-e-xl mb-4 "
    >
      {{ companyStore.item.name }}
    </div>

    <VRow
      v-if="producStore.data"
      class="mx-4 mb-10"
    >
      <VCol
        v-for="product in producStore.data"
        :key="product.id"
        cols="12"
        lg="4"
        md="6"
      >
        <VHover>
          <template #default="{ isHovering, props }">
            <VCard
              elevation="0"
              class="mt-10"
              :to="{ name: 'product', params: { id: product.id } }"
            >
              <VImg
                v-bind="props"
                :gradient="isHovering ? '' : 'to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)'"
                :src="product.image"
                lazy-src="@/assets/default.png"
                max-height="300"
              />
              <VCardTitle class="  text-center text-decoration-underline">
                {{ product.name }}
              </VCardTitle>
            </VCard>
          </template>
        </VHover>
      </VCol>
    </VRow>

    <SimplePaginate :load="load" />
  </VContainer>
</template>
