/**
 * Created by shishitengteng on 2017/10/27.
 */
const Pomelo = require('yuan-pomeloclient')
export const pomelo = new Pomelo()
import { url } from '@/utils/index'
import db from '../../db'
import store from '../index'
pomelo.on('onChat', function (data) {
  console.log(data)
  if (data.route) {
    store.dispatch('saveMsg', data)
  }
})
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
      // pomelo.disconnect()
      if (data.code === 500) {
        // pomelo.disconnect()
        return
      }
      callback(data.host, data.port)
    })
  })
}

export const chat = {
  state: {
  },

  mutations: {
  },

  actions: {
    // 登陆
    async LoginIm ({dispatch, commit}) {
      let user = await dispatch('GetMyInfo')
      let uid = user.userId
      await queryEntry(uid, function (host, port) {
        pomelo.init({
          host: host,
          port: port,
          log: true
        }, function (socket) {
          window.socket = socket
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
    },
    // 发送消息
    async sendIm ({dispatch, commit}, data) {
      // await dispatch('LoginIm')
      let user = await dispatch('GetSyncUserInfo')
      const route = 'chat.chatHandler.send'
      console.log(data)
      pomelo.request(route, {
        rid: 'yuan',
        content: data.msg,
        from: user.id,
        target: data.id
      }, function (data) {
        console.log(data)
        if (data.error) {
          console.log(data.error)
          return false
        }
        // _this.saveMsg({from: accountInfo.id, msg: msg, route: 'onChat', target: 'user|' + target});
        // notify.emit('store', {action: 'imMsg', result: '新的即时消息', state: true});
        return true
      })
    },
    // 保存消息
    async saveMsg ({dispatch, commit}, msg) {
      console.log(msg)
      const target = msg.target.split('|')
      if (target[0] === 'user') {
        db.table('personInfo').where('userId').equals(msg.from).first().then(data => {
          const _msg = {
            speakerId: msg.from,
            speakerName: data.realName || '',
            speakerPortrait: data.portrait || '',
            audienceId: target[1],
            content: msg.msg,
            isGroupChat: false
          }
          db.table('chatMsg').put(_msg)
        })
      }
      if (target[0] === 'group') {
        let _msg = {
          speakerId: msg.from,
          speakerName: '',
          speakerPortrait: '',
          audienceId: target[1],
          audienceName: '',
          content: msg.msg,
          isGroupChat: true
        }
        db.table('personInfo').where('userId').equals(msg.from).first().then(data => {
          data.realName ? _msg.speakerName = data.realName : ''
          data.portrait ? _msg.speakerPortrait = data.portrait : ''
          return
        }).then(() => {
          db.table('group').where('id').equals(target[1]).first(res => {
            return res
          })
        }).then(data => {
          data.name ? _msg.audienceName = data.name : ''
          db.table('chatMsg').put(_msg)
        })
      }
    }
  }
}
