import Vue from "vue";
import App from "./App";
import router from "./../config/router";

require("../src/assets/css/common.css");
require("../src/assets/css/reset.css");

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount(app);
