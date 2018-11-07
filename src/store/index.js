/**
 * created by caiguoqing on 2018/11/5
 */

import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getters'
import state from './state'

Vue.use(Vuex)

import login from './modules/login'


export default new Vuex.Store({
  state,
  actions,
  getters,
  modules: {
    login
  },

})
