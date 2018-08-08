
import Vue from 'vue'
import App from './App'


Vue.config.productionTip = false

import './assets/css/index.css'
import './assets/css/zy.css'
import './assets/css/swiper.min.css'
import './assets/js/jquery-1.4.4.min.js';
import './assets/js/jquery.cookie'
import 'animate.css'

import Swiper from 'swiper' 

Vue.prototype.$swiper=Swiper;

import axios from 'axios';
axios.defaults.withCredentials=true;
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  store.dispatch('VIEW_LOAD',true)
  //store.state.bLoad=true;
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  // store.state.bLoad=false;
  store.dispatch('VIEW_LOAD',false)
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});



import router from './router.config.js'
import loading from './loading'
import store from './store'

Vue.prototype.$http=axios;
Vue.use(loading)

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store,
 
})
