import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/create",
    name: "create",

    component: () =>
      import(/* webpackChunkName: "create" */ "../views/CreateView.vue"),
  },
  {
    path: "/update/:id",
    name: "update",

    component: () =>
      import(/* webpackChunkName: "update" */ "../views/UpdateView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
