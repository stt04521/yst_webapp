import { getToken, setToken, removeToken } from '@/utils/auth'
import { loginByUsername, logout, getUserInfo, register, loginByPhone, forgetPassword, syncUserInfo } from '@/api/login'
import db from '../../db'
const login = {
  state: {
    user: '',
    status: '',
    code: '',
    token: getToken(),
    name: '',
    avatar: '',
    introduction: '',
    roles: [],
    setting: {
      articlePlatform: []
    }
  },

  mutations: {
    SET_CODE: (state, code) => {
      state.code = code
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction
    },
    SET_SETTING: (state, setting) => {
      state.setting = setting
    },
    SET_STATUS: (state, status) => {
      state.status = status
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },

  actions: {
    // 用户名登录
    LoginByUsername ({ dispatch, commit }, userInfo) {
      const user = userInfo.user.trim()
      return new Promise((resolve, reject) => {
        loginByUsername(user, userInfo.password).then(response => {
          const data = response.data
          setToken(response.data.result.token)
          commit('SET_TOKEN', data.result.token)
          dispatch('FriendGetGroup')
          dispatch('dataSyncGroup')
          dispatch('dataSyncUserInfo')
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 手机号获取 token
    LoginByPhone ({ commit }, phoneInfo) {
      return new Promise((resolve, reject) => {
        loginByPhone(phoneInfo).then(response => {
          const data = response.data
          setToken(response.data.result.token)
          commit('SET_TOKEN', data.result.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 注册
    Register ({ commit }, registryInfo) {
      return new Promise((resolve, reject) => {
        register(registryInfo).then(response => {
          const data = response.data
          console.log(data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // forgetPassword
    ForgetPassword ({ commit }, password) {
      return new Promise((resolve, reject) => {
        forgetPassword(password).then(response => {
          const data = response.data
          console.log(data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 获取用户信息
    GetUserInfo ({ commit, state }) {
      return new Promise((resolve, reject) => {
        getUserInfo(state.token).then(response => {
          const data = response.data
          commit('SET_ROLES', data.role)
          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)
          commit('SET_INTRODUCTION', data.introduction)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 登出
    LogOut ({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 同步用户信息
    async dataSyncUserInfo () {
      let userInfo = await syncUserInfo()
      db.table('userInfo').clear()
      db.table('userInfo').put(userInfo.data.result)
    },
    GetSyncUserInfo () {
      return db.table('userInfo').toCollection().first()
    }
  }
}

export default login
