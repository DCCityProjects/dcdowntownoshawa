// import 'svg-pan-zoom/dist/svg-pan-zoom.js';

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import svgPanZoom from "svg-pan-zoom/dist/svg-pan-zoom.js";
import { VueHammer } from "vue2-hammer";

// import VueSplide from "@splidejs/vue-splide";

Vue.config.productionTip = false;
Vue.use(VueHammer);
Vue.use(svgPanZoom);
// Vue.use( VueSplide );
VueHammer.config.press = {
    time: 20,
};

Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(App),
    data: { activetab: 1 },
    // components: { App },
    // template: '<App/>'
}).$mount("#app");
