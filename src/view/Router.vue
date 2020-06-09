<template>
  <div class="router">
    <h3>Router</h3>
    <br />
    <h4>1、安装</h4>
    <pre>
      <code>npm install vue-router</code>
    </pre>
    <br />
    <h4>2、在config文件夹下，新建router.js文件</h4>
    <p>引入vue和vue-router文件。如果在一个模块化工程中使用vue-router，必须要通过 Vue.use() 明确地安装路由功能。</p>
    <pre>
      <code>import Vue from "vue";
      import VueRouter from "vue-router";

      Vue.use(VueRouter);

      const Index = () => import("../src/view/Index.vue");
      const Router = () => import("../src/view/Router.vue");

      export default new VueRouter({
        routes: [
          { path: "/", component: Index },
          {
            path: "/router",
            component: Router
          }
        ]
      });</code>
    </pre>
    <br />
    <h4>3、引入router.js</h4>
    <p>在main.js中引入，通过 router 配置参数注入路由。</p>
    <pre>
      <code>import router from "./../config/router";

      new Vue({
        router,
        render: h => h(App)
      }).$mount(app);</code>
    </pre>
    <br />
    <h4>4、在需要路由跳转的地方，添加指令</h4>
    <pre>
      <code>{{routerText}}</code>
    </pre>
    <h4>5、遇到Error: Avoided redundant navigation to current location:报错显示是路由重复</h4>
    <p>在router.js添加以下代码</p>
    <pre>
      <code>const originalPush = VueRouter.prototype.push;
      VueRouter.prototype.push = function push(location) {
        return originalPush.call(this, location).catch(err => err);
      };</code>
    </pre>
  </div>
</template>

<script>
export default {
  name: "Router",
  data() {
    return {
      routerText: "<router-view></router-view>"
    };
  },
  components: {}
};
</script>

<style lang="scss">
.router {
  width: 100%;
  height: 100%;
  pre {
    background-color: #282c34;
    color: #fff;
    border-radius: 6px;
    line-height: 1.4;
    padding: 15px 10px 0;
    margin: 10px 0;
    overflow: auto;
  }
}
</style>
