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
      apprentice: {
        quantity: 0,
        cost: 1000,
        multiplier: 10,
      },
      jrDev: {
        quantity: 0,
        cost: 3000,
        multiplier: 100,
      },
      srDev: {
        quantity: 0,
        cost: 8000,
        multiplier: 1000,
      },
      salesman: {
        quantity: 0,
        cost: 2000,
        multiplier: 0,
      },
      qaTeam: {
        quantity: 0,
        cost: 1000,
        multiplier: 0,
      },
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
    writeCode({commit, dispatch}, res) {
      this.state.codeBase.lines += res
    },
    addStaff({commit, dispatch}, res) {
      this.state.team[res].quantity += 1      
    }
  },
  modules: {
  }
})
