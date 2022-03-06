import Vue from 'vue'
import VueRouter from 'vue-router'
import Anasayfa from "@/components/Home";
import Populer from "@/components/Popular";
import Yeni from "@/components/New";

Vue.use(VueRouter)

const routes = [
  {path : "/", component: Anasayfa},
  {path: "/populer", component: Populer},
  {path: "/yeni", component: Yeni},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
