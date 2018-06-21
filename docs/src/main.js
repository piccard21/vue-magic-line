import Vue from 'vue'
import App from './App.vue'
import VueMagicLine from 'vue-magic-line';

Vue.use(VueMagicLine)

new Vue({
  el: '#app',
  render: h => h(App)
})
