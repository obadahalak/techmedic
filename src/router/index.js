// Composables
import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '@/pages/NotFound.vue'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/HomeView.vue'),
      },
      {
        path: 'certificates',
        name: 'certificates',
        component: () => import('@/views/CertificateView.vue'),
      },
      {
        path: 'certificate/:id',
        name: 'certificate',
        component: () => import('@/pages/CertificatePage.vue'),
      },
      {
        path: 'companies',
        name: 'companies',
        component: () => import('@/views/CompanyView.vue'),
      },
      {
        path: 'company/:id',
        name: 'company',
        component: () => import('@/views/ProductView.vue'),
      },
      {
        path: 'product/:id',
        name: 'product',
        component: () => import('@/pages/ProductPage.vue'),
      },
      {
        path: 'about-us',
        name: 'aboutus',
        component: () => import('@/pages/AboutUs.vue'),
      },
    ],

  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
