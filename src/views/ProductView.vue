<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { usePagiante } from '@/base/paginate.js'
import SearchBar from '@/components/header/SearchBar.vue'
import { useCompany } from '@/store/company.js'
import { useProduct } from '@/store/product.js'
import SimplePaginate from '@/components/base/SimplePaginate.vue'
import Empty from '@/views/Empty.vue'

const search = ref('')
const category = ref('')

const companyStore = useCompany()
const producStore = useProduct()
const id = useRouter().currentRoute.value.params.id
onMounted(() => {
  producStore.reset()
  companyStore.reset()
  companyStore.getByid(id)
})

const { load } = usePagiante(producStore
  , '?company=' + `${useRouter().currentRoute.value.params.id}`
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

      class="mx-4 "
    >
      <VCol
        v-for="product in producStore.data"
        :key="product.id"
        cols="12"
        lg="4"
        md="6"
      >
        <VCard

          elevation="0"
          class="mt-10 mb-15"
          :to="{ name: 'product', params: { id: product.id } }"
        >
          <VImg
          alt="product image"
            :src="product.image"
            lazy-src="@/assets/company-logo.webp"
            max-height="300"
          />
          <VCardTitle class="  text-center text-decoration-underline">
            {{ product.name }}
          </VCardTitle>
        </VCard>
      </VCol>
    </VRow>

    <SimplePaginate

      :load="load"
    />
    <Empty
      v-if="!producStore.data.length > 0"
      class="mt-12 mb-12"
    />
  </VContainer>
</template>
