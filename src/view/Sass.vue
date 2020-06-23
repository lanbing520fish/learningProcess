<template>
  <div class="sass">
    <h3>Sass</h3>
    <br />
    <h4>1、安装</h4>
    <pre>
      <code>npm install --save-dev sass-loader   //sass-loader依赖于node-sass
      npm install --save-dev node-sass</code>
    </pre>
    <br />
    <h4>2、配置: 在build文件夹下的webpack.base.conf.js的rules里面添加配置</h4>
    <pre>
      <code>// 如果你是.sass文件要设置
      {
        test: /\.sass$/,
        loaders: ['style', 'css', 'sass']
      }</code>
    </pre>
    <br />
    <h4>3、在APP.vue中修改style标签</h4>
    <pre>
      <code>{{scss}}</code>
    </pre>
    <br />
    <h4>4、问题：Module build failed: TypeError: this.getResolve is not a function at Object.loader</h4>
    <p>
      解决：
      <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这是因为sass-loader版本太高了，去package.json文件里面的 "sass-loader"的版本更换成7.3.1，然后重新npm install就可以了
    </p>
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
