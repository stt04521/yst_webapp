/**
 * Created by shishitengteng on 2017/10/10.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import mine from './modules/mine'
import news from './modules/news'
import schedule from './modules/schedule'
import task from './modules/task'
import contacts from './modules/contacts'
import groupChat from './modules/groupChat'
import work from './modules/work'
import { chat } from './modules/chat'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    contacts,
    user,
    mine,
    news,
    schedule,
    task,
    work,
    groupChat,
    chat
  },
  getters
})

export default store
