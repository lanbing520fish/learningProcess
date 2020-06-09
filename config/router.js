import Vue from "vue";
import VueRouter from "vue-router";

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

Vue.use(VueRouter);

const Index = () => import("../src/view/Index.vue");
const DataBinding = () => import("../src/view/DataBinding.vue");
const DifferenceBetweenShowAndIf = () =>
  import("../src/view/DifferenceBetweenShowAndIf.vue");
const Router = () => import("../src/view/Router.vue");
const Sass = () => import("../src/view/Sass.vue");

export default new VueRouter({
  routes: [
    { path: "/", component: Index },
    { path: "/dataBinding", component: DataBinding },
    {
      path: "/differenceBetweenShowAndIf",
      component: DifferenceBetweenShowAndIf
    },
    {
      path: "/router",
      component: Router
    },
    {
      path: "/sass",
      component: Sass
    }
  ]
});
