import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/page/Main.vue';
import HotArticles from "@/page/HotArticles.vue";
import Login from "@/page/Login.vue";
import SignUp from "@/page/SignUp.vue";
import Post from "@/page/Post.vue";
const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
  {
    path: '/hot-articles',
    name: 'HotArticles',
    component: HotArticles,
  },
  {
    path: '/post',
    name: 'Post',
    component: Post,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/nearby-stores',
    name: 'ASD',
    component: HotArticles,
    beforeEnter: function (to, from, next) {
      next(false);
      return false;
    },
  },
  {
    path: '/jobs',
    name: 'QWE',
    component: HotArticles,
    beforeEnter: function (to, from, next) {
      next(false);
    },
  },
  {
    path: '/realty',
    name: 'ZXC',
    component: HotArticles,
    beforeEnter: function (to, from, next) {
      next(false);
    },
  },
  {
    path: '/car',
    name: 'XCV',
    component: HotArticles,
    beforeEnter: function (to, from, next) {
      next(false);
    },
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
