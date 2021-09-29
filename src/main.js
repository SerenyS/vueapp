import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

// primary: '#efeae5',
// secondary: '#d8c4c4',
// accent: '#2a435b',
// error: '#a55d34'