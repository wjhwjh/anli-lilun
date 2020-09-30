import Vue from 'vue'
import vueRouter from 'vue-router'
import App from './App.vue'
 console.log('这是一个入口文件--')
 
Vue.config.productionTip = false

console.log('获取不到app',document.getElementById('app'))
console.log(App)


new Vue({
  render: h => h(App),
}).$mount('#app')
// new Vue({
//   el:'#app',
//   template: '<App/>',
//   components:{App}
// })