// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'; //get vuex -> store

Vue.config.productionTip = false

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

import { Input, Button,Alert} from "element-ui";
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Input);
Vue.use(Button);
Vue.use(Alert);

import VueLocalStorage from 'vue-localstorage'
Vue.use(VueLocalStorage)
Vue.axios.defaults.headers.common['X-Auth-Token'] = Vue.localStorage.get('token')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
