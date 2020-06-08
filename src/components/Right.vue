<template>
  <div class="right">
    <router-view></router-view>
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

<style>
.right {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  left: 302px;
  overflow: auto;
}
</style>
