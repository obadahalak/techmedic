import { defineStore } from 'pinia'
import { ref } from 'vue'
import http from '@/base/http.js'

export const useProduct = defineStore('product', () => {
  const data = ref([])
  const item = ref({})
  const error = ref([])
  const meta = ref({
    current_page: 1,
    last_page: 1,
  })

  async function getAll(params) {
    await http.get(`products/${params}&page=${meta.value.current_page}`).then((response) => {
      meta.value = response.meta

      return data.value = [...data.value, ...response.data]
    }).catch((error) => {
      error.value = error.response.data
    })
  }

  async function getById(id) {
    await http.get(`products/${id}`).then((response) => {
      return item.value = response.data
    }).catch((error) => {
      error.value = error
    })
  }

  return { data, item, meta, error, getAll, getById }
})
