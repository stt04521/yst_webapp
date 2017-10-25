import {getMyInfo, findPersonInfoByUserId, editInfo, identityVerification} from '@/api/mine'
const mine = {
  state: {
  },

  mutations: {
  },

  actions: {
    // 获取个人信息
    getMyInfo ({commit}) {
      return new Promise((resolve, reject) => {
        getMyInfo().then((res) => {
          console.log('actions', res)
          resolve(res.data.result)
        }).catch((err) => {
          reject(err)
        })
      })
    },
    // 通过id查找信息
    findPersonInfoByUserId ({commit}, id) {
      return new Promise((resolve, reject) => {
        findPersonInfoByUserId(id).then((res) => {
          console.log(res)
          resolve(res)
        }).catch((err) => {
          reject(err)
        })
      })
    },
    // 编辑
    editInfo ({commit}, data) {
      return new Promise((resolve, reject) => {
        editInfo(data).then((res) => {
          console.log('actions: ', res)
          resolve(res)
        }).catch((err) => {
          reject(err)
        })
      })
    },
    // 身份验证
    identityVerification ({commit}, data) {
      return new Promise((resolve, reject) => {
        identityVerification(data).then((res) => {
          console.log('actions: ', res)
          resolve(res)
        }).catch((err) => {
          reject(err)
        })
      })
    }
  }
}

export default mine
