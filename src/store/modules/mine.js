import {getMyInfo, findPersonInfoByUserId, editInfo, identityVerification, createOrganize, editEmailOrPhone, changePassword, organizeVerification} from '@/api/mine'
import db from '../../db'
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
    async MyInfo ({commit}) {
      let myInfo = await getMyInfo()
      let result = myInfo.data.result
      commit('SET_ORGANIZEID', result.organizeId)
      db.table('myInfo').clear()
      db.table('myInfo').put(result)
    },
    GetMyInfo ({commit}) {
      return db.table('myInfo').toCollection().first()
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
          resolve(res)
        }).catch((err) => {
          reject(err)
        })
      })
    },
    // 组织验证
    organizeVerification ({commit}, data) {
      return new Promise((resolve, reject) => {
        organizeVerification(data).then((res) => {
          resolve(res)
        }).catch((err) => {
          console.log(err)
        })
      })
    },
    // 创建组织
    createOrganize ({dispatch, commit}, data) {
      return new Promise((resolve, reject) => {
        createOrganize(data).then((res) => {
          dispatch('MyInfo')
          resolve(res)
        }).catch((err) => {
          reject(err)
        })
      })
    },
    // 修改手机号或者邮箱
    editEmailOrPhone ({commit, dispatch}, data) {
      return new Promise((resolve, reject) => {
        editEmailOrPhone(data).then((res) => {
          dispatch('dataSyncUserInfo')
          resolve(res)
        }).catch((err) => {
          reject(err)
        })
      })
    },
    // 修改密码
    changePassword ({commit}, data) {
      return new Promise((resolve, reject) => {
        changePassword(data).then((res) => {
          resolve(res)
        }).catch((err) => {
          reject(err)
        })
      })
    },
    async personnelInfo ({dispatch, commit}) {
      let myInfo = await db.table('myInfo').toCollection().first()
      console.log('stt', myInfo)
    }
  }
}

export default mine
