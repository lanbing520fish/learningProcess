<template>
  <div class="data-binding">
    <h3>MVVM双向数据绑定原理</h3>
    <br />
    <img src="../assets/images/data-binding.gif" alt="" />
    <br />
    <p>
      VUE采用数据劫持结合发布者-订阅者的方式，通过
      Object.defineProperty()来劫持各个属性的setter、getter。
    </p>
    <p>
      在数据变动时，发布消息给依赖收集器，去通知订阅者，触发相应监听回调函数，更新视图。
    </p>
    <br />
    <p>
      第一步：实现一个监听器Obserser，对数据对象进行遍历，包括子属性对象的属性，利用Object.defineProperty()给属性加上setter和getter。这样的话，给这个对象的某个值赋值，就会触发setter，那么就能监听到数据变化。
    </p>
    <p>
      第二步：实现一个解析器Compile，解析Vue模版指令，将模版中的变量替换成数据，然后初始化渲染视图，并将每个指令对应的节点都绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，调用更新函数进行数据更新。
    </p>
    <p>
      第三步：实现一个订阅者Watcher，Watcher订阅者是Observer和Compile之间通信的桥梁。主要任务是订阅Observer中属性值变化的消息，当收到属性值变化的消息时，触发解析器Compile中对应的更新函数。
    </p>
    <p>
      第四步：实现一个订阅器Dep，订阅器采用发布-订阅设计模式来收集订阅者Watcher，对监听器Observer和订阅者Watcher进行统一管理
    </p>
  </div>
</template>

<script>
export default {
  name: "DataBinding",
  data() {
    return {};
  },
  components: {}
};
</script>

<style lang="scss">
.data-binding {
  width: 100%;
  height: 100%;
}
</style>
