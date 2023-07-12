import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/admin/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import CompanyView from '../views/CompanyView.vue';
import CertificationView from '../views/CertificationView.vue'
import CompanyPage from '@/pages/company.vue';
import ProductPage from '@/pages/product.vue';
import AboutusPage from '@/pages/aboutus.vue';
import CertificatePage from '@/pages/certificate.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/comapny',
      name: 'company',
      component: CompanyView
    },
    {
      path: '/comapny/:id',
      name: 'companyPage',
      component: CompanyPage
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: AboutusPage,
      meta: {
        title: "Home Page",
        description: "This is the home page",
      },
    },
    {
      path: '/product/:id',
      name: 'productPage',
      component: ProductPage
    },
    {
      path: '/certifiacte/:id',
      name: 'certificatePage',
      component: CertificatePage,
      
    },
   
    {
      path: '/certifications',
      name: 'certification',
      component: CertificationView
    },
  
    {
      path: '/admin/login',
      name: 'login',
      component: LoginView
    },
  
  ]
})

export default router
