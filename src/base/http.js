/* eslint-disable no-new */
import axios from 'axios'
import Notify from 'simple-notify'
import 'simple-notify/dist/simple-notify.min.css'
import { useGlobal } from '@/store/global'

const createInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
  headers: {
    Accept: 'application/json',
  },

})

createInstance.interceptors.request.use((config) => {
  useGlobal().setloading()

  return config
})

createInstance.interceptors.response.use((response) => {
  useGlobal().setloading()
  if (response.data.status < 300 && response.data.status >= 200)

    return response.data
}, (error) => {
  useGlobal().setloading()

  if (error.response.status === 500) {
    new Notify({
      status: 'error',
      title: 'Error from server.',
      text: 'please try again',
      autoclose: true,
      position: 'right bottom',
    })
  }

  return Promise.reject(error)
})

export default createInstance
