/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */
// import InfiniteLoading from 'v3-infinite-loading'

//
//
// Components
import { createApp } from 'vue'
import App from './App.vue'
import DefaultBar from '@/layouts/default/AppBar.vue'

import DrowerHeader from '@/layouts/default/DrawerHeader.vue'

import './registerServiceWorker'

// Composables

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)
app.component('DrowerHeader', DrowerHeader)
app.component('DefaultBar', DefaultBar)

app.mount('#app')
