import Vue from 'vue'
import Router from 'vue-router'
import CurrencyConvertor from '@/components/CurrencyConvertor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CurrencyConvertor',
      component: CurrencyConvertor
    }
  ]
})
