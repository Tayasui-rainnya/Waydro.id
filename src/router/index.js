import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Licensing from "../views/Licensing.vue"; // 导入 Licensing 组件

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/licensing",
    name: "Licensing",
    component: Licensing, // 使用 Licensing 组件
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
