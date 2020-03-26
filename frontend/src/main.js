import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMPORÁRIO!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ikxlb25hcmRvIE0uIExlaXTDo28iLCJlbWFpbCI6Imxlb25hcmRvQGNvZDNyLmNvbS5iciIsImFkbWluIjp0cnVlLCJpYXQiOjE1ODUyNTMzMzcsImV4cCI6MTU4NTUxMjUzN30.l1THVz7uX1M0G6_dVoF1BXeXf6-eeMQ3v88T84of1Xc'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')