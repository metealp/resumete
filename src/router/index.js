import { createRouter, createWebHistory } from "vue-router";
import Background from "../views/Background.vue";
// import Portfolio from "../views/Portfolio.vue";

const routes = [
  {
    path: "/",
    name: "Background",
    component: Background
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    // route level code-splitting
    // this generates a separate chunk for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/Portfolio.vue")
  },
  {
    path: "/blog",
    name: "Blog",
    component: () => import("../views/Blog.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
