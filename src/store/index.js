import Vue from 'vue'
import Vuex from 'vuex'
import getFlat from './modules/getFlat'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    getFlat
  }
})
