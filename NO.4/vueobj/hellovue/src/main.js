import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

console.log(document.getElementById('app'))

new Vue({
  render: h => h(App),
}).$mount('#app')
