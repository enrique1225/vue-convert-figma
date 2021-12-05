import Vue from "vue";
import App from "./App";
import router from "./router/index";
import { ProgressPlugin } from 'bootstrap-vue';
import PaperDashboard from "./plugins/paperDashboard";
import VueSimpleAlert from "vue-simple-alert";
import VueCarousel from 'vue-carousel';

Vue.use(ProgressPlugin)
Vue.use(PaperDashboard);
Vue.use(VueSimpleAlert);
Vue.use(VueCarousel);

/* eslint-disable no-new */
new Vue({
    router,
    render: h => h(App)
}).$mount("#app");