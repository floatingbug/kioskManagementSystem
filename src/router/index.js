import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUpView from "../views/SignUpView.vue";
import SignInView from "../views/SignInView.vue";
import DashboardView from "../views/DashboardView.vue";
import ProductsView from "../views/ProductsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
	  {
		  path: "/sign-up",
		  name: "signUp",
		  component: SignUpView
	  },
	  {
		  path: "/sign-in",
		  name: "signIn",
		  component: SignInView 
	  },
	  {
		  path: "/dashboard",
		  name: "dashboard",
		  component: DashboardView
	  },
	  {
		  path: "/products",
		  name: "products",
		  component: ProductsView
	  }
  ]
})

export default router
