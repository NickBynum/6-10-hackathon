import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    codeBase: {
    lines: 0,
    bugs: 0,
    apps: 0,
    subscriptions: 0,
    },
    team: {
      apprentice: 0,
      jrDev: 0,
      srDev: 0,
      salesman: 0,
      qaTeam: 0,
    },
    wallet: {
      cashOnHand: 0,
      expenses: 0,
      appsToSale: 0,
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
