import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/alugar/:id',
      name: 'alugar',
      component: () => import('../views/AlugarView.vue'),
      props: true
    },
    {
      path: '/alugado/:id',
      name: 'alugado',
      component: () => import('../views/AlugadoView.vue'),
      props: true
    
    }
  ]
})

export default router
