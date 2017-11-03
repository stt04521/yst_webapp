import {createTaskApi, getTaskListApi, taskDetailApi, editTaskApi, changeTaskStatusApi, getAllExcutorApi, getCollegeListApi} from '@/api/task'

const task = {
  state: {
  },

  mutations: {
  },

  actions: {
    // 创建任务
    createTaskAction ({commit}, data) {
      console.log('actions: ', data)
      return new Promise((resolve, reject) => {
        createTaskApi(data).then((res) => {
          resolve(res)
        }, (err) => {
          reject(err)
        }).catch((err) => {
          console.log(err)
        })
      })
    },
    // 任务列表
    getTaskListAction ({commit}) {
      return new Promise((resolve, reject) => {
        getTaskListApi().then((res) => {
          resolve(res)
        }, (err) => {
          reject(err)
        }).catch((err) => {
          console.log(err)
        })
      })
    },
    // 任务详情
    taskDetailAction ({commit}, id) {
      return new Promise((resolve, reject) => {
        taskDetailApi(id).then((res) => {
          resolve(res)
        }, (err) => {
          reject(err)
        }).catch((err) => {
          console.log(err)
        })
      })
    },
    // 任务编辑
    editTaskAction ({commit}, data) {
      return new Promise((resolve, reject) => {
        editTaskApi(data).then((res) => {
          resolve(res)
        }, (err) => {
          reject(err)
        }).catch((err) => {
          console.log(err)
        })
      })
    },
    // 改变任务状态
    changeTaskStatusAction ({commit}, data) {
      return new Promise((resolve, reject) => {
        changeTaskStatusApi(data).then((res) => {
          resolve(res)
        }, (err) => {
          reject(err)
        }).catch((err) => {
          console.log(err)
        })
      })
    },
    // 获取任务所有执行者
    getAllExcutorAction ({commit}, id) {
      return new Promise((resolve, reject) => {
        getAllExcutorApi(id).then((res) => {
          resolve(res)
        }, (err) => {
          reject(err)
        }).catch((err) => {
          console.log(err)
        })
      })
    },
    getCollegeListAction ({commit}) {
      return new Promise((resolve, reject) => {
        getCollegeListApi().then((res) => {
          resolve(res.data.result)
        }, (err) => {
          reject(err)
        }).catch((err) => {
          console.log(err)
        })
      })
    }
  }
}

export default task
