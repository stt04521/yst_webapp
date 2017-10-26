import {getMyInfo, findPersonInfoByUserId, editInfo, identityVerification, createOrganize} from '@/api/mine'
const mine = {
  state: {
    organizeId: []
  },
  mutations: {
    SET_ORGANIZEID: (state, info) => {
      console.log('mutations')
      state.organizeId = info
      console.log(info)
    }
  },

  actions: {
    // 获取个人信息
    getMyInfo ({commit}) {
      return new Promise((resolve, reject) => {
        getMyInfo().then((res) => {
          let result = res.data.result
          console.log('actions, resule.organized: ', result.organizeId)
          commit('SET_ORGANIZEID', result.organizeId)
          resolve(result)
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
    },
    // 创建组织
    createOrganize ({commit, state}, data) {
      console.log('mine state: ', state)
      return new Promise((resolve, reject) => {
        createOrganize(data).then((res) => {
          resolve(res)
        }).catch((err) => {
          reject(err)
        })
      })
    }
  }
}

export default mine
