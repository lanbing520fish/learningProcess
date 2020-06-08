<template>
  <div id="app">
    <Left />
    <right />
  </div>
</template>

<script>
import Left from "./components/Left.vue";
import Right from "./components/Right.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Left,
    Right
  }
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
