import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayoutVue from '../components/DefaultLayout.vue';

const router = createRouter({
  history: createWebHistory(), //import.meta.env.BASE_URL
  routes: [
    {
      path: '/',
      component: DefaultLayoutVue,
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('../views/HomeView.vue')
        },
        {
          path: '/by-name/:name?',
          name: 'byName',
          component: () => import('../views/MealsByNameView.vue')
        },
        {
          path: '/by-letter/:letter?',
          name: 'byLetter',
          component: () => import('../views/MealsByLetterView.vue')
        },
        {
          path: '/ingredients',
          name: 'ingredients',
          component: () => import('../views/IngredientsView.vue')
        },
        {
          path: '/by-ingredient/:ingredient?',
          name: 'byIngredient',
          component: () => import('../views/MealsByIngredientsView.vue')
        },
        {
          path: '/meal/:id',
          name: 'mealDetails',
          component: () => import('../views/MealDetailsView.vue')
        }
      ]
    },
  ]
})

export default router;
