import {createTaskApi, getTaskListApi, taskDetailApi, editTaskApi, changeTaskStatusApi, getAllExcutorApi} from '@/api/task'

const task = {
  state: {
  },

  mutations: {
  },

  actions: {
    // 创建任务
    createTaskAction (data) {
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
    getTaskListAction () {
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
    taskDetailAction (id) {
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
    editTaskAction (data) {
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
    changeTaskStatusAction (data) {
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
    getAllExcutorAction (id) {
      return new Promise((resolve, reject) => {
        getAllExcutorApi(id).then((res) => {
          resolve(res)
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
