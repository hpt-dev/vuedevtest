import Vue from 'vue'
import Vuex from 'vuex'
const fb = require('../firebase.config.js')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: null,
    userProfile: {}
  },
  mutations: {
    setCurrentUser(state, val) {
      state.currentUser = val
    },
    setUserProfile(state, val) {
      state.userProfile = val
    }
  },
  actions: {
    fetchUserProfile({ commit, state }) {
      fb.usersCollection.doc((state as any).currentUser.uid).get().then((res:  any) => {
        commit('setUserProfile', res.data())
      })
      //.catch(err:any => {
      //  console.log(err)
      //})
    },
    clearData({ commit }){
      commit('setCurrentUser', null);
      commit('setUserProfile', {});
      // commit('setPosts',null);
    }
  },
  modules: {
  }
})
