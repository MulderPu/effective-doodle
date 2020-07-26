import Vue from "vue";
import App from "./App.vue";
import router from "./router/router.js";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './assets/app.css'

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App },
});
