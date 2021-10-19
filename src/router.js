import { createWebHistory, createRouter } from 'vue-router'
import { setupLayouts } from 'layouts-generated'
import generatedRoutes from 'pages-generated'

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router