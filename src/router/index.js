import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Food from "../views/Food.vue";
import DetailFood from "../views/DetailFood.vue";
import KeranjangPesan from "../views/Keranjang.vue";
import SuccessOrder from "../views/SuccessOrder.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/food",
    name: "FoodItems",
    component: Food,
  },
  {
    path: "/food/:id",
    name: "DetailFood",
    component: DetailFood,
  },
  {
    path: "/keranjang",
    name: "KeranjangPesan",
    component: KeranjangPesan,
  },
  {
    path: "/checkout",
    name: "SuccessOrder",
    component: SuccessOrder,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
