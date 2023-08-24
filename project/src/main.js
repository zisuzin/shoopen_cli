import Vue from 'vue'
import App from '@/App.vue'
import store from './js/store.js'; 
import router from './router/index.js';

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
