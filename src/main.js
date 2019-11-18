import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(VueResource);

export const bus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
