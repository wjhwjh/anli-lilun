import Vue from 'vue'
import vueRouter from 'vue-router'
import App from './App.vue'
import axios from 'axios'
import api from './utils/api.js'
console.log('这是一个入口文件--')
//import headnav from '@component/navtop/headnav.vue'
axios.defaults.headers.common['Authorization'] = "token";
//console.log(headnav)
axios.defaults.withCredentials=true
Vue.prototype.$axios = axios

Vue.config.productionTip = false

//console.log('获取不到app',document.getElementById('app'))
//console.log(App)
// 请求拦截器
// axios.interceptors.request.use(function (config) {
//    console.log(config)
//   // 在发送请求之前做些什么
//   //config.headers.common['Authorization'] = 'AUTH_TOKEN';
//   //console.log('这是请求拦截器--')
//   return config;
// }, function (error) {
//   // 对请求错误做些什么
//   return Promise.reject(error);
// });

// // 添加响应拦截器
// axios.interceptors.response.use(function (response) {
//   // 对响应数据做点什么
//  console.log('这是响应拦截器--', response)
//   return response;
// }, function (error) {
//   // 对响应错误做点什么
//   return Promise.reject(error);
// });




new Vue({
  render: h => h(App),
}).$mount('#app')
// new Vue({
//   el:'#app',
//   template: '<App/>',
//   components:{App}
// })