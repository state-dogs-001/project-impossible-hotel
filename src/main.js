import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import Vuelidate from "vuelidate";
import firebase from "firebase/app";

Vue.use(Vuelidate);
Vue.use(firebase);

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
