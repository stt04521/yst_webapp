import {getMyInfoApi, findPersonInfoByUserIdApi, editInfoApi, identityVerificationApi, createOrganizeApi, editEmailOrPhoneApi, changePasswordApi, organizeVerificationApi, updateOrganizeInfoApi} from '@/api/mine'
import db from '../../db'
const mine = {
  state: {
    organizeId: [],
    currentOrganize: {}
  },
  mutations: {
    SET_ORGANIZEID: (state, info) => {
      state.organizeId = info
    },
    SET_CURRENT_ORGANIZE: (state, info) => {
      state.currentOrganize = info
    }
  },

  actions: {
    // 获取个人信息
    async MyInfo ({dispatch, commit}) {
      let myInfo = await getMyInfoApi()
      let result = myInfo.data.result
      commit('SET_ORGANIZEID', result.organizeId)
      await db.table('myInfo').clear()
      await db.table('myInfo').put(result)
      await dispatch('LoginIm')
    },
    getMyInfoAction ({commit}) {
      return new Promise((resolve, reject) => {
        db.table('myInfo').toCollection().first(res => {
          if (res) {
            resolve(res)
          } else {
            getMyInfoApi().then(data => {
              resolve(data.data.result)
            })
          }
        })
      })
    },
    // 通过id查找信息
    findPersonInfoByUserIdAction ({commit}, id) {
      return new Promise((resolve, reject) => {
        findPersonInfoByUserIdApi(id).then((res) => {
          console.log(res)
          resolve(res)
        }).catch((err) => {
          reject(err)
        })
      })
    },
    // 编辑
    editInfoAction ({commit}, data) {
      return new Promise((resolve, reject) => {
        editInfoApi(data).then((res) => {
          resolve(res)
        }).catch((err) => {
          reject(err)
        })
      })
    },
    // 身份验证
    identityVerificationAction ({commit}, data) {
      return new Promise((resolve, reject) => {
        identityVerificationApi(data).then((res) => {
          resolve(res)
        }).catch((err) => {
          reject(err)
        })
      })
    },
    // 组织验证
    organizeVerification ({commit}, data) {
      return new Promise((resolve, reject) => {
        organizeVerificationApi(data).then((res) => {
          resolve(res)
        }).catch((err) => {
          console.log(err)
        })
      })
    },
    // 创建组织
    async createOrganizeAction ({dispatch, commit}, data) {
      await createOrganizeApi(data)
      await dispatch('MyInfo')
    },
    // 更改组织信息
    async updateOrganizeInfoAction ({dispatch, commit}, data) {
      await updateOrganizeInfoApi(data)
      await dispatch('MyInfo')
    },
    // 修改手机号或者邮箱
    async editEmailOrPhoneAction ({commit, dispatch}, data) {
      let res = await editEmailOrPhoneApi(data)
      if (res.data.result[0] === 1) {
        await dispatch('dataSyncUserInfo')
      }
      // return new Promise((resolve, reject) => {
      //   // editEmailOrPhoneApi(data).then((res) => {
      //   //   dispatch('dataSyncUserInfo')
      //   //   resolve(res)
      //   // }).catch((err) => {
      //   //   reject(err)
      //   // })
      // })
    },
    // 修改密码
    changePasswordAction ({commit}, data) {
      return new Promise((resolve, reject) => {
        changePasswordApi(data).then((res) => {
          resolve(res)
        }).catch((err) => {
          reject(err)
        })
      })
    },
    async personnelInfoAction ({dispatch, commit}) {
      let myInfo = await db.table('myInfo').toCollection().first()
      console.log('stt', myInfo)
    }
  }
}

export default mine
