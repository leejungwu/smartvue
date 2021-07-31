import Vue from 'vue';
import Menu from './Menu';
import Vuex from 'vuex';
import vuetify from './plugins/vuetify'

Vue.use(Vuex);

new Vue({
  render: createElement => createElement(Menu),
  vuetify
}).$mount('#root');