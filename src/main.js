import './style.css'
import App from './App.vue'
import router from './router'

import { createApp } from 'vue'
import {  createPinia } from 'pinia';
import { initFlowbite } from 'flowbite'
// import { Icon } from '@iconify/vue';
// import { initFlowbite } from 'flowbite-vue'

const app = createApp(App)
const pinia = createPinia();



app.use(pinia);
app.use(initFlowbite());
app.use(createPinia())
// app.use(Pagination);
app.use(router)
// app.use(Icon)
app.mount('#app')
