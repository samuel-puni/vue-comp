import Vue from 'vue'
import App from './App.vue'
import Header from './Header.vue'
import Footer from './Footer.vue'
import List from './List.vue'

Vue.component('header-server-status', Header)
Vue.component('footer-server-status', Footer)
Vue.component('list-server-status', List)

new Vue({
  el: '#app',
  render: h => h(App)
})
