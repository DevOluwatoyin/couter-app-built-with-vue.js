import {createWebHistory, createRouter} from 'vue-router'
import HomePage from './component/counter.vue';
import NotFound from './component/404.vue'
const routes = [
    {
      name: 'HomePage',
      path: '/counter',
      component: HomePage
    },

    {
      name: 'NotFound',
      path: '/:pathMatch(.*)*',
      component: NotFound
    }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;