/*
 * @Author: 党婉珍
 * @Date: 2019-11-30 11:00:43
 * @LastEditors: 党婉珍
 * @LastEditTime: 2019-12-06 21:28:23
 * @Description: 
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui';
import {Toast} from 'mint-ui';
import $ from 'jquery';
import store from './store'
Vue.config.productionTip = false
// Vue.use(VueX)
Vue.use(Mint);
Vue.component(Toast.name, Toast);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, //使用store
  components: { App },
  template: '<App/>'
})
