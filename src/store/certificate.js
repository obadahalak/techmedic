import { defineStore } from 'pinia'
import { ref } from 'vue'
import http from '@/base/http.js'

export const useCertificate = defineStore('certificate', () => {
  const data = ref([])
  const item = ref({})
  const meta = ref({
    current_page: 1,
    last_page: 1,
  })
  const error = ref([])

  async function getAll() {
    return await http.get(`certificates?page=${meta.value.current_page}`).then((response) => {
      meta.value = response.meta

      return data.value = [...data.value, ...response.data]
    }).catch((error) => {
      error.value = error
    })
  }

  function getById(id) {
    const findItem = data.value.filter(d => d.id === id)
    if (findItem[0]) {
      item.value = findItem[0]
    }
    else {
      http.get(`/certificates/${id}`).then((response) => {
        return item.value = response.data
      }).catch((error) => {
        error.value = error
      })
    }
  }

  function show() {
    if (data.value.length > 0)
      return true
  }

  return { getAll, getById, data, item, meta, error, show }
})
