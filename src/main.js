import Vue from 'vue'
import './style/style.scss'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  const userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
  if (userInfo) {
    store.commit('setUserInfo', userInfo)
  }
  next()
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
