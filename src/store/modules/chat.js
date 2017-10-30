/**
 * Created by shishitengteng on 2017/10/27.
 */
const Pomelo = require('yuan-pomeloclient')
const pomelo = new Pomelo()
import { url } from '@/utils/index'

const queryEntry = (uid, callback) => {
  const route = 'gate.gateHandler.queryEntry'
  pomelo.init({
    host: url.pomeloServerAddress,
    port: 3014,
    log: true
  }, function () {
    pomelo.request(route, {
      uid: uid
    }, function (data) {
      pomelo.disconnect()
      if (data.code === 500) {
        pomelo.disconnect()
        return
      }
      callback(data.host, data.port)
    })
  })
}

const chat = {
  state: {
  },

  mutations: {
  },

  actions: {
    // 登陆
    async LoginIm ({dispatch, commit}) {
      let user = await dispatch('GetSyncUserInfo')
      let uid = user.id
      await queryEntry(uid, function (host, port) {
        pomelo.init({
          host: host,
          port: port,
          log: true
        }, function () {
          const route = 'connector.entryHandler.enter'
          pomelo.request(route, {
            username: uid,
            rid: 'yuan'
          }, function (data) {
            console.log(data)
            if (data.error) {
              console.log(data.error)
              return false
            }
            return true
          })
        })
      })
    }
  }
}

export default chat
