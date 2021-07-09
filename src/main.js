import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import VueRouter from 'vue-router'

Vue.use(VueRouter);

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue);

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

import listImage from "./components/listImage.vue";
import myFavourite from "./components/myFavourite.vue";
const routes = [
  {
    path: "/",
    name: "List",
    component: listImage
  },
  {
    path: "/my-favourite",
    name: "My Favourite",
    component: myFavourite
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
