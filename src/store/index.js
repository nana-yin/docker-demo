import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    myData: 'hahahaah'
  },
  getters: { // 定义getters
    getGetters: state => {
      return '通过源数据得到的新值' + state.myData + 'NEW'
    }
  },
  mutations: {
    changeState3 (state, params) {
      state.myData = 'change' + params
      console.log(state.myData)
    }
  },
  actions: {
    changeStateAsync3 (context, params) {
      setTimeout(() => {
        context.commit('changeState3', params)
      }, 1000)
    }
  },
  modules: {
  }
})
