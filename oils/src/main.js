
import Vue from 'vue'

import App from './App' // 主面板
import router from './common/router'
import store from './common/store'

import i18n from './plugin/i18n'
import vuetify from '@/plugin/vuetify'
import 'vuetify/dist/vuetify.min.css'


import validated from '@/common/es/validate'
import bonus from '@/common/es/app_init'
import view from '@/common/es/view'
import conf from '@/conf'
import conn from '@/apis/conn'
import api from '@/apis/api'
import VueCarousel from 'vue-carousel'

Vue.prototype.api = api
Vue.prototype.conn = conn
Vue.prototype.conf = conf
Vue.prototype.view = view
Vue.prototype.bonus = bonus
Vue.prototype.validated = validated
Vue.config.productionTip = false

import bonu from './common/ex_es6/bonu'
Vue.prototype.bonu = bonu

Vue.use(VueCarousel)

// ---------------
new Vue({
  i18n,
  router,
  store,
  vuetify,
  render: h => h(App)
  // components: { App },
  // template: '<App/>'
}).$mount('#app')
