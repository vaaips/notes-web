import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import moment from 'moment'
import _ from 'lodash'

Vue.prototype.moment = moment
Vue.prototype._ = _
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
