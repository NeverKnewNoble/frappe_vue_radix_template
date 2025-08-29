import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import RadixUiShow from "../views/RadixUiShow.vue";
import authRoutes from './auth';

const routes = [
  {
	path: "/",
	name: "Home",
	component: Home,
  },
  {
	path: "/radixui",
	name: "RadixUi",
	component: RadixUiShow,
  },
  ...authRoutes,
];

const router = createRouter({
  base: "/portal/",
  history: createWebHistory(),
  routes,
});

export default router;
