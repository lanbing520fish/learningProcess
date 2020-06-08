<template>
  <div class="right">
    <div class="right-content-box">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Right",
  data() {
    return {
      name: '<p class="name">name</p>'
    };
  }
};
</script>

<style lang="scss">
.right {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  left: 302px;
  overflow: auto;
  .right-content-box {
    padding: 20px;
    line-height: 24px;
    font-size: 14px;
  }
}
</style>
