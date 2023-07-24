import { createRouter, createWebHistory } from 'vue-router'

const LoginView = () => import('../views/admin/LoginView.vue')
const HomeView = () => import('../views/HomeView.vue')
const CompanyView = () => import('../views/CompanyView.vue')
const CertificationView = () => import('../views/CertificationView.vue')
const CompanyPage = () => import('@/pages/company.vue')
const ProductPage = () => import('@/pages/product.vue')
const CertificatePage = () => import('@/pages/certificate.vue')
const AboutusPage = () => import('@/pages/aboutus.vue')

const NotFound = () => import('../views/NotFoundView.vue');
const router = createRouter({
  history: createWebHistory(),
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
    {
      path:  '/:pathMatch(.*)*',
      redirect: '/page-not-found'
    },

    {
      path: '/page-not-found',
      name: 'page-not-found',
      component: NotFound
    },
  
  ]
})

export default router
