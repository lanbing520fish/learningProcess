<template>
  <div class="build">
    <h3>前端知识点整理</h3>
    <br />
    <div class="question-list" v-for="(opt, index) in list" :key="index">
      <h4 class="question-title">{{index + 1}}、{{opt.title}}</h4>
      <div class="question-img" v-show="opt.img">
        <img :src="opt.img" alt />
      </div>
      <div class="question-content" v-html="opt.content"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InterviewQuestions",
  data() {
    return {
      list: [
        {
          title: "对于MVVM的理解？",
          content:
            "MVVM 是 Model-View-ViewModel 的缩写。<br/><b>Model</b>代表数据模型，也可以在Model中定义数据修改和操作的业务逻辑。<br/><b>View</b> 代表UI 组件，它负责将数据模型转化成UI 展现出来。<br/><b>ViewModel</b> 监听模型数据的改变和控制视图行为、处理用户交互，简单理解就是一个同步View 和 Model的对象，连接Model和View。<br/>在MVVM架构下，View 和 Model 之间并没有直接的联系，而是通过ViewModel进行交互，Model 和 ViewModel 之间的交互是双向的， 因此View 数据的变化会同步到Model中，而Model 数据的变化也会立即反应到View 上。<br/><b>ViewModel</b> 通过双向数据绑定把 View 层和 Model 层连接了起来，而View 和 Model 之间的同步工作完全是自动的，无需人为干涉，因此开发者只需关注业务逻辑，不需要手动操作DOM, 不需要关注数据状态的同步问题，复杂的数据状态维护完全由 MVVM 来统一管理。",
          img: require("../assets/images/mvvm.png")
        }
      ]
    };
  },
  components: {}
};
</script>

<style lang="scss">
.build {
  width: 100%;
  height: 100%;
}
</style>
