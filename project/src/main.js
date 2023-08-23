import Vue from 'vue'
import App from '@/App.vue'
import store from './js/store.js'; 

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
