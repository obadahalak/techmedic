import { defineStore } from 'pinia'
import { ref } from 'vue'
import http from '@/base/http.js'

export const useHome = defineStore('home', () => {
  const companies = ref([])
  const products = ref([])
  const certificates = ref([])
  const bannners = ref([])
  const empty = ref(false)
  const error = ref('')

  function allServices() {
    http.get('/home').then((response) => {
      products.value = response.data.products
      certificates.value = response.data.certificates
      companies.value = response.data.companies
    }).catch((err) => {
      error.value = err.errors
    })
  }

  async function getBanners() {
    await http.get('/slider-images').then((response) => {
      return bannners.value = response.data
    }).catch((err) => {
      error.value = err.errors
    })
  }
  function show() {
    if (companies.value.length > 0 && products.value.length > 0 && bannners.value.length > 0)
      return true
  }

  return { show, getBanners, allServices, companies, products, certificates, error, empty, bannners }
})
