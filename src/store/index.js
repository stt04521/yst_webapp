/**
 * Created by shishitengteng on 2017/10/10.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import mine from './modules/mine'
import news from './modules/news'
import schedule from './modules/schedule'
import task from './modules/task'
import work from './modules/work'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    login,
    mine,
    news,
    schedule,
    task,
    work
  }
})

export default store
