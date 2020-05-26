一、新建项目
vue init webpack

Generate project in current directory?(在当前目录中生成项目) Yes

二、初始化项目
npm install

三、启动项目
npm run dev

1.出现 runtime 错误
找到 main.js，修改 new Vue，改为：
new Vue({
render: h => h(App)
}).\$mount(app);

2.页面启动不会自动打开
找到 config/index.js
修改 autoOpenBrowser 的值为 true
