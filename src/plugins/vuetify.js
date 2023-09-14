import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {

    themes: {
      light: {
        colors: {
          'primary': '#1867C0',
          'secondary': '#5CBBF6',
          'green-dark': '#26825B',
          'pink-dark': '#771f3e',
          'purple-dark': '#1f2937',

        },
      },
    },
  },
})
