import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useGlobal = defineStore('global', () => {
  const loading = ref(false)
  const drawer = ref(false)
  function setloading() {
    loading.value = !loading.value
  }

  return { loading, setloading, drawer }
})
