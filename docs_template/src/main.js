import Vue from 'vue'
import App from './App.vue'
import VueMagicLine from 'vue-magic-line';

Vue.use(VueMagicLine)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
