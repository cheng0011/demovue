import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    count: 0,
    list: []
  },
  mutations: {
    increase () {
      this.state.count++
    },
    addItem (state, value) {
      state.list.push(value)
    }
  },
  actions: {

  }
})
