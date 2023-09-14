import { defineStore } from 'pinia'
import { ref } from 'vue'
import http from '@/base/http.js'

export const useHome = defineStore('home', () => {
  const companies = ref([])
  const products = ref([])
  const bannners = ref([])
  const empty = ref(false)
  const error = ref('')

  function getCompanies() {
    http.get('/companies').then((response) => {
      return companies.value = response.data.slice(0, 3)
    }).catch((error) => {
      error.value = error
    })
  }
  function getProducts() {
    http.get('/products').then((response) => {
      return products.value = response.data.slice(0, 4)
    }).catch((error) => {
      error.value = error.response.data
    })
  }

  async function getBanners() {
    await http.get('/slider-images').then((response) => {
      return bannners.value = response.data
    }).catch((error) => {
      error.value = error.response.data
    })
  }
  function show() {
    if (companies.value.length > 0 && products.value.length > 0 && bannners.value.length > 0)
      return true
  }

  return { show, getBanners, getCompanies, getProducts, companies, products, error, empty, bannners }
})
