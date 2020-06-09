<template>
  <div class="left">
    <div class="left-menu-box">
      <ul>
        <li
          v-for="(item, index) in leftList"
          @click="returnText(item)"
          :key="index"
          :class="{ active: checkedUrl == item.url }"
        >{{ index + 1 }}、{{ item.title }}</li>
      </ul>
    </div>
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
      checkedUrl: "",
      leftList: [
        {
          title: "首页",
          url: ""
        },
        {
          title: "引入Router",
          url: "router"
        },
        {
          title: "引入SASS",
          url: "sass"
        },
        {
          title: "MVVM双向数据绑定原理",
          url: "dataBinding"
        },
        {
          title: "v-show和v-if有什么区别",
          url: "differenceBetweenShowAndIf"
        }
      ]
    };
  },
  created() {
    let pathName = window.location.href;
    let pathIndex = window.location.href.lastIndexOf("/");
    this.checkedUrl = pathName.slice(pathIndex + 1);
  },
  methods: {
    returnText(val) {
      this.$router.push("./" + val.url);
      this.checkedUrl = val.url;
    }
  }
};
</script>

<style lang="scss">
.left {
  position: absolute;
  left: 0;
  top: 0;
  width: 300px;
  height: 100%;
  border-right: 1px solid #eaecef;
  overflow: auto;
  .left-menu-box {
    padding: 20px;
    ul {
      li {
        line-height: 24px;
        font-size: 14px;
        cursor: pointer;
        &.active {
          color: #42b983;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
