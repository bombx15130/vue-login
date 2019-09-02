import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '@/components/Index'
import SignUp from '@/components/SignUp'
import Main from '@/components/Main'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        {path: '', component: Main}
      ]
    },
    {path: '/signup', component: SignUp}
  ]
})