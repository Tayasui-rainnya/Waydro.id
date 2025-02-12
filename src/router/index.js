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

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
