<template>
  <div class="sass">
    <h3>Sass</h3>
    <br />
    <h4>1、安装</h4>
    <pre>
      <code>npm install --save-dev sass-loader   //sass-loader依赖于node-sass
      npm install --save-dev node-sass</code>
    </pre>
    <h4>2、配置: 在build文件夹下的webpack.base.conf.js的rules里面添加配置</h4>
    <pre>
      <code>// 如果你是.sass文件要设置
      {
        test: /\.sass$/,
        loaders: ['style', 'css', 'sass']
      }</code>
    </pre>
    <h4>3、在APP.vue中修改style标签</h4>
    <pre>
      <code>{{scss}}</code>
    </pre>
  </div>
</template>

<script>
export default {
  name: "Sass",
  data() {
    return {
      scss: '<style lang="scss">'
    };
  },
  components: {}
};
</script>

<style lang="scss">
.sass {
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
