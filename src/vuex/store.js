import Vuex from 'vuex'
import Vue from 'vue'
import * as types from './types'

Vue.use(Vuex);

/**
 * 这里用到了localStorage 是很不推荐的, 以后再改
 * */

export default new Vuex.Store({
  state: {
    user: {
      username: '',
      roles: null
    },
    token: null,
    title: ''
  },
  getters: {
    isLogin: state => {
      return localStorage.token !== null;
    },
    isAdmin: state => {
      if(localStorage.roles.length > 1 && localStorage.roles.indexOf("ROLE_ADMIN") >= 0) {
        return true;
      }
      return false;
    }
  },
  mutations: {

    [types.LOGIN]: (state, data) => {
      localStorage.token = data['accessToken'];
      localStorage.username = data['username'];
      state.token = data['accessToken'];
      state.user.username = data['username'];
      state.user.roles = data['roles'];
      let roles = '';
      for(let i of state.user.roles){
        roles += i;
        roles += ' ';
      }
      localStorage.roles = roles;
    },
    [types.LOGOUT]: (state) => {
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      localStorage.removeItem('roles');
      state.user.username = null;
      state.user.roles = null;
      state.token = null;
    },
    [types.TITLE]: (state, data) => {
      state.title = data;
    },

  }
})

