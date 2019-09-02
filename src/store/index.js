import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const main = {
  state: {
    userInfo: {
      isLogin: false,
      userName: ''
    }
  },

  mutations: {
    setUserInfo (state, value) {
      state.userInfo = Object.assign(state.userInfo, value)
    }
  },

  actions: {
    setUserInfo (context, value) {
      context.commit('setUserInfo', value)
    }
  }
}

export default new Vuex.Store(main)
