import Vue from 'vue'
import vue from '@/main.js'

import { api } from '../../common/js/request'
import router from '../../router'

const state = {
  userName: '',
  password: ''
}

// getters
const getters = {

}

// actions
const actions = {
  async login({ commit, state }, params) {
    let data = await api.POST(
      "apis/backstage/treasurebackstage/back/login",
      params
    );
    console.log(data)
    if (data.code === 200) {
      Vue.localStorage.set('token', data.data.token)
      // window.location.pathname = '/home/System'
      router.push('/home/System')
    }
 
  }
}

// mutations
const mutations = {

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
