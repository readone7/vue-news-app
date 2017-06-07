import Vue from 'vue'
import Router from 'vue-router'
import AllStories from '@/components/allStories'
import TechStories from '@/components/techStories'
import FinanceStories from '@/components/financeStories'
import SportStories from '@/components/sportStories'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AllStories',
      component: AllStories
    },
    {
      path: '/tech-stories',
      name: 'TechStories',
      component: TechStories
    },
    {
      path: '/sport-stories',
      name: 'SportStories',
      component: SportStories
    },
    {
      path: '/finance-stories',
      name: 'FinanceStories',
      component: FinanceStories
    }
  ]
})
