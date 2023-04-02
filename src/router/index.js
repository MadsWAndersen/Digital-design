import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '/src/views/LandingPage.vue';
import RoomPage from '/src/views/RoomPage.vue';

const routes = [
  { path: '/', component: LandingPage },
  { path: '/room/:id', component: RoomPage, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;