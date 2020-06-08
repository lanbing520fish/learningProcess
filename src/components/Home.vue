<template>
  <div class="home">
    <Left :text="text" />
    <right />
  </div>
</template>

<script>
import Left from "./Left.vue";
import Right from "./Right.vue";

export default {
  name: "App",
  data() {
    return {
      text: "12341234"
    };
  },
  components: {
    Left,
    Right
  }
};
</script>

<style>
.home {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
