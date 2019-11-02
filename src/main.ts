import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueProgressBar from 'vue-progressbar';

Vue.config.productionTip = false;
Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '2px'
})

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
