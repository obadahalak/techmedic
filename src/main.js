/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */
import InfiniteLoading from 'v3-infinite-loading'

// Components
import { createApp } from 'vue'
import App from './App.vue'

// Composables

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)
app.component('InfiniteLoading', InfiniteLoading)

registerPlugins(app)

app.mount('#app')
