import Vue from 'vue'
import VueI18n from 'vue-i18n'


Vue.use(VueI18n)

export default new VueI18n({
  locale: 'zh-HK',
  messages: {
    'zh-HK': require('../common/i18n/zh_HK'),
    'zh-CN': require('../common/i18n/zh_CN'),
    // 'en-US': require('../common/i18n/en_US')
  }
})
