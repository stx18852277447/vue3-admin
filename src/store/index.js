import { createStore } from 'vuex'
import user from './modules/user.js'
import getters from './getters'

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  getters,
  modules: { user }
})
