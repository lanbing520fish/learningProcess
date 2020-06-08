<template>
  <div class="left">
    {{ text }}
    <ul>
      <li v-for="(item, index) in leftList" @click="returnText(item)" :key="index">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Left",
  props: {
    text: {
      type: String,
      reuqired: false
    }
  },
  data() {
    return {
      leftList: [
        {
          title: "mvvn",
          text: "mvvn是什么什么事"
        }
      ]
    };
  },
  methods: {
    returnText(val) {
      this.$router.push("../Index");
    }
  }
};
</script>

<style>
.left {
  position: absolute;
  left: 0;
  top: 0;
  width: 300px;
  height: 100%;
  border-right: 2px solid #ccc;
  overflow: auto;
}
</style>
