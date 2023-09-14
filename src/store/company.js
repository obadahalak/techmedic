import { defineStore } from 'pinia'
import { ref } from 'vue'
import http from '@/base/http.js'

export const useCompany = defineStore('company', () => {
  const data = ref([])
  const item = ref({})
  const meta = ref({
    current_page: 1,
    last_page: 1,
  })
  const error = ref({})

  async function getAll() {
    await http.get(`/companies?page=${meta.value.current_page}`).then((response) => {
      return data.value = response.data
    }).catch((error) => {
      error.value = error.response
    })
  }
  function getByid(id) {
    http.get(`/companies/${id}`).then((response) => {
      return item.value = response.data
    }).catch((error) => {
      error.value = error.response.data
    })
  }

  function show() {
    if (data.value.length > 0)
      return true
  }

  return { getAll, data, item, error, meta, getByid, show }
})
