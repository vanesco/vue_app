import '@babel/polyfill';
import Vue from "vue";
import App from "./App.vue";
import router from "@/routes/router";
import store from "@/store/store";

import VueLodash from 'vue-lodash'
import VueMq from 'vue-mq';
import VueScrollTo from "vue-scrollto";
import axios from "axios";
import VueParticles from 'vue-particles';
import AOS from 'aos';
import VueLazyload from 'vue-lazyload';

import 'aos/dist/aos.css';
import '@/assets/css/reset.css'
import '@/assets/css/common.scss'
import '@/assets/css/transition.scss'

import 'expose-loader?$!expose-loader?jQuery!jquery'
import "./registerServiceWorker";

import mainHeader from '@/components/mainHeader'
import mainFooter from '@/components/mainFooter'
import modalPopup from '@/components/modalPopup'

Vue.prototype.$http = axios;

const options = { name: 'lodash' }

Vue.component('mainHeader', mainHeader)
Vue.component('mainFooter', mainFooter)
Vue.component("modalPopup", modalPopup)

Vue.use(VueParticles)
Vue.use(VueScrollTo)
Vue.use(VueLodash, options)

export const EventBus = new Vue();

Vue.use(VueMq, {
  breakpoints: {
    mobile: 450,
    tablet: 900,
    laptop: 1250,
    desktop: Infinity,
  },
  defaultBreakpoint: 'desktop'
})

var loadingImg = "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif";
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: loadingImg,
  loading: loadingImg,
  attempt: 1,
  listenEvents: ['scroll'],
  observer: true,
  observerOptions: {
    rootMargin: '0px',
    threshold: 0.1
  }
})

Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

AOS.init();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
