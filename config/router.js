import Vue from "vue";
import VueRouter from "vue-router";

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

Vue.use(VueRouter);

const Home = () => import("../src/components/Home.vue");
const Index = () => import("../src/Index.vue");

export default new VueRouter({
  routes: [
    { path: "/", component: Home },
    { path: "/index", component: Index }
  ]
});
