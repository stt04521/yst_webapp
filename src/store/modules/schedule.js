// import {createSchedule, getList, getInfo, createNote, getNoteList, getNoteInfo} from '@/api/schedule'
import {getToken} from '@/utils/auth'
import {getList, createSchedule, createNote, getNoteList, getNoteInfo, getInfo} from '@/api/schedule'
const schedule = {
  state: {
    token: getToken(),
    scheduleList: ''
  },

  mutations: {
    SET_SCHEDULE_LIST: (state, data) => {
      state.scheduleList = data
    }
  },

  actions: {
    // 创建日程
    createSchedule ({commit}, data) {
      return new Promise((resolve, reject) => {
        createSchedule(data).then((res) => {
          console.log(res)
          resolve()
        }).catch(() => {
          reject()
        })
      })
    },
    // 创建笔记
    createNote ({commit}, data) {
      return new Promise((resolve, reject) => {
        console.log('////00', data)
        createNote(data).then((res) => {
          console.log(res)
          resolve()
        }).catch((err) => {
          reject(err)
        })
      })
    },
    // 获取日程列表
    getScheduleList ({ commit, state }) {
      return new Promise((resolve, reject) => {
        getList(state.token).then((res) => {
          console.log(res)
          let data = res.data.result
          commit('SET_SCHEDULE_LIST', res.data)
          resolve(data)
        }).catch((err) => {
          reject(err)
        })
      })
    },
    // 获取笔记列表
    getNoteList ({commit}) {
      return new Promise((resolve, reject) => {
        getNoteList().then((res) => {
          console.log(res)
          let data = res.data.result
          resolve(data)
        }).catch((err) => {
          reject(err)
        })
      })
    }
  },
  // 获取笔记详情
  // getNoteDetail ({commit}) {
  //   return new Promise((resolve, reject) => {
  //     getNoteInfo().then((res) => {
  //       console.log('getNoteDetail: ', res)
  //       resolve(res)
  //     }).catch((err) => {
  //       console.log(err)
  //     })
  //   })
  // },
  getNoteDetail ({commit}) {
    return new Promise((resolve, reject) => {
      getNoteInfo().then((res) => {
        console.log(res)
        let data = res.data.result
        resolve(data)
      }).catch((err) => {
        reject(err)
      })
    })
  },
  // 获取日程详情
  getScheduleDetail ({commit}) {
    return new Promise((resolve, reject) => {
      getInfo().then((res) => {
        console.log('get Schedule detail: ', res)
        resolve(res)
      }).catch((err) => {
        console.log(err)
      })
    })
  }
}

export default schedule
