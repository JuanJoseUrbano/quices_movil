import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tab1Page from '@/views/Tab1Page.vue';
import Tab2Page from '@/views/Tab2Page.vue';
import Tab3Page from '@/views/Tab3Page.vue';
import ModuloPage from '@/views/ModuloPage.vue';
import RolPage from '@/views/RolPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/lista'
  },
  {
    path: '/agregar',
    name: 'Agregara',
    component: Tab1Page
  },
  {
    path: '/actualizar',
    name: 'Actualizar',
    component: Tab2Page
  },
  {
    path: '/lista',
    name: 'Lista',
    component: Tab3Page
  },
  {
    path: '/modulo',
    name: 'Modulo',
    component: ModuloPage
  },
  {
    path: '/rol',
    name: 'Rol',
    component: RolPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
