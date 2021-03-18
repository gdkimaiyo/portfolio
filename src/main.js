import Vue from "vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import VueSmoothScroll from "vue2-smooth-scroll";
import App from "./App.vue";

Vue.use(VueSmoothScroll, {
  duration: 1000,
  offset: -20
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
