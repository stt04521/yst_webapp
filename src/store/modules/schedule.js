// import {createSchedule, getList, getInfo, createNote, getNoteList, getNoteInfo} from '@/api/schedule'
import {getToken} from '@/utils/auth'
import {getList, createScheduleApi, createNote, getNoteList, getNoteInfo, getInfo, updateSchedule, deleteSchedule, updateNotepad, deleteNotepad, getScheduleByDateApi} from '@/api/schedule'
const schedule = {
  state: {
    token: getToken(),
    scheduleList: '',
    scheduleParticipator: [],
    createScheduleData: {},
    canChoosedList: [],
    oneDateSchedule: []
  },

  mutations: {
    SET_SCHEDULE_LIST: (state, data) => {
      state.scheduleList = data
    },
    SET_SCHEDULE_PARTICIPATOR: (state, data) => {
      state.scheduleParticipator = data
    },
    SET_CREATE_SCHEDULE_DATA: (state, data) => {
      state.createScheduleData = data
    },
    SET_CAN_CHOOSEDLIST: (state, data) => {
      state.canChoosedList = data
    },
    SET_ONE_DATE_SCHEDULE: (state, data) => {
      state.oneDateSchedule = data
    }
  },

  actions: {
    // 创建日程
    createScheduleAction ({commit}, data) {
      return new Promise((resolve, reject) => {
        createScheduleApi(data).then((res) => {
          resolve()
        }).catch((err) => {
          reject(err)
        })
      })
    },
    // 创建笔记
    createNote ({commit}, data) {
      return new Promise((resolve, reject) => {
        createNote(data).then((res) => {
          resolve()
        }).catch((err) => {
          reject(err)
        })
      })
    },
    // 获取日程列表
    getScheduleListAction ({commit, state}) {
      return new Promise((resolve, reject) => {
        getList(state.token).then((res) => {
          let data = res.data.result
          commit('SET_SCHEDULE_LIST', res.data)
          resolve(data)
        }).catch((err) => {
          reject(err)
        })
      })
    },
    // 获取某一天的日程列表
    getScheduleByDateAction ({commit}, data) {
      return new Promise((resolve, reject) => {
        getScheduleByDateApi(data).then((res) => {
          resolve(res.data.result)
        })
      }).catch((err) => {
        console.log(err)
      })
    },
    // 获取笔记列表
    getNoteListAction ({commit}) {
      return new Promise((resolve, reject) => {
        getNoteList().then((res) => {
          let data = res.data.result
          resolve(data)
        }).catch((err) => {
          reject(err)
        })
      })
    },
    // 获取笔记详情
    getNoteDetail ({commit}, id) {
      return new Promise((resolve, reject) => {
        getNoteInfo(id).then((res) => {
          resolve(res.data.result)
        }).catch((err) => {
          console.log(err)
        })
      })
    },
    // 获取日程详情
    getScheduleDetail ({commit}, id) {
      return new Promise((resolve, reject) => {
        getInfo(id).then((res) => {
          resolve(res.data.result)
        }).catch((err) => {
          console.log(err)
        })
      })
    },
    // 编辑日程
    editSchedule ({commit}, data) {
      return new Promise((resolve, reject) => {
        updateSchedule(data).then((res) => {
          resolve(res.data.result)
        }).catch((err) => {
          console.log(err)
        })
      })
    },
    // 删除日程
    deleteSchedule ({commit}, id) {
      return new Promise((resolve, reject) => {
        deleteSchedule(id).then((res) => {
          console.log('action delete schedule')
          resolve(res)
        }).catch((err) => {
          console.log(err)
        })
      })
    },
    // 编辑笔记
    editNotepad ({commit}, data) {
      return new Promise((resolve, reject) => {
        updateNotepad(data).then((res) => {
          console.log('action edite note')
          resolve(res)
        }).catch((err) => {
          console.log(err)
        })
      })
    },
    // 删除记事
    deleteNote ({commit}, id) {
      return new Promise((resolve, reject) => {
        deleteNotepad(id).then((res) => {
          console.log('action delete note')
          resolve(res)
        }).catch((err) => {
          console.log(err)
        })
      })
    }
  }
}
export default schedule
