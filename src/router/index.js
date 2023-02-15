// Composables
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/HomePage.vue'),
      },
      {
        path: 'pullrequest',
        name: "pullrequest",
        component: () => import('@/views/PullRequest.vue'),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: 'repositorio',
        name: "repositorio",
        component: () => import('@/views/RepositorioPage.vue'),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: 'repodescarga',
        name: "repodescarga",
        component: () => import('@/views/repoDescarga.vue'),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: 'acerca',
        name: "acerca",
        component: () => import('@/views/AcercaPage.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
