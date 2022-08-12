import { createRouter, createWebHashHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHashHistory(),

  routes: [
    {
      path: '/',
      component: () => import('./views/Home.vue'),
      meta: { title: '復刻 - Youtube 首頁' }
    }
  ]
})

router.beforeEach((to, from) => {
  // vue router 4 不需 next()
  window.document.title = to.meta.title
})