<template>
  <div class="show-if">
    <h3>v-show和v-if有什么区别</h3>
    <br />
    <p>v-show根据表达式之真假值，切换元素的display css property。</p>
    <br />
    <p>v-if根据表达式的值来有条件地渲染元素。在切换时元素及它的数据绑定/组件被销毁并重建。</p>
  </div>
</template>

<script>
export default {
  name: "DifferenceBetweenShowAndIf",
  data() {
    return {};
  },
  components: {}
};
</script>

<style lang="scss">
.show-if {
  width: 100%;
  height: 100%;
}
</style>
