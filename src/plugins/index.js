import pinia from '../store'
import router from '../router'
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'

export function registerPlugins(app) {
  loadFonts()
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
}
