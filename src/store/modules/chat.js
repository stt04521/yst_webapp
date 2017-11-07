/**
 * Created by shishitengteng on 2017/10/27.
 */
const Pomelo = require('yuan-pomeloclient')
export const pomelo = new Pomelo()
import { url, notify, compare } from '@/utils/index'
import db from '../../db'
import store from '../index'
pomelo.on('onChat', function (data) {
  console.log(data)
  if (data.route) {
    store.dispatch('saveMsg', data)
    notify.emit('upData', {action: 'upData'})
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
      console.log(user)
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
      }, function (result) {
        console.log(result)
        if (result.error) {
          console.log(result.error)
          return false
        }
        dispatch('saveMsg', {from: user.id, msg: data.msg, route: 'onChat', target: 'user|' + data.id})
        return true
      })
    },
    // 发送群消息
    async sendGroupIm ({dispatch, commit}, data) {
      let user = await dispatch('GetSyncUserInfo')
      const route = 'chat.chatHandler.sendGroup'
      pomelo.request(route, {
        rid: 'yuan',
        content: data.msg,
        from: user.id,
        target: data.id
      }, function (data) {
        if (data.error) {
          console.log(data.error)
          return false
        }
        return true
      })
    },
    // 保存消息
    async saveMsg ({dispatch, commit}, msg) {
      const target = msg.target.split('|')
      if (target[0] === 'user') {
        let userChat = await db.table('personInfo').where('userId').equals(msg.from).first()
        const _msg = {
          speakerId: msg.from,
          speakerName: userChat.realName || '',
          speakerPortrait: userChat.portrait || '',
          audienceId: target[1],
          content: msg.msg,
          isGroupChat: 0,
          createdAt: new Date().getTime(),
          updatedAt: new Date().getTime(),
          isRead: 0
        }
        await db.table('chatMsg').add(_msg)
      } else if (target[0] === 'group') {
        let _msg = {
          speakerId: msg.from,
          speakerName: '',
          speakerPortrait: '',
          audienceId: target[1],
          audienceName: '',
          content: msg.msg,
          isGroupChat: 1,
          createdAt: new Date().getTime(),
          updatedAt: new Date().getTime(),
          isRead: 0
        }
        let data = await db.table('personInfo').where('userId').equals(msg.from).first()
        data.realName ? _msg.speakerName = data.realName : ''
        data.portrait ? _msg.speakerPortrait = data.portrait : ''
        let audience = await db.table('group').where('id').equals(target[1]).first()
        audience.name ? _msg.audienceName = audience.name : ''
        await db.table('chatMsg').add(_msg)
      }
      await notify.emit('upData', {action: 'upData'})
    },
    // 消息盒子
    async msgBox ({dispatch, commit}, data) {
      let query = db.table('chatMsg').where('[audienceId+isGroupChat]').equals([data.id, data.isGroupChat]).or('[speakerId+isGroupChat]').equals([data.id, data.isGroupChat])
      let result = await query.sortBy('createdAt')
      await query.modify({isRead: 1}).then(res => {})
      return result
    },
    // 消息列表
    async msgList ({dispatch, commit}, data) {
      let chatList = []
      let chat = await db.table('chatMsg').where('speakerId').notEqual(0).filter(item => { return item.isGroupChat === 0 }).uniqueKeys()
      for (let value of chat) {
        let chatItem = await db.table('chatMsg').where('[speakerId+isGroupChat]').equals([value, 0]).filter(i => { return i.isRead === 0 })
        let noRead = await chatItem.count()
        let msg = await chatItem.last()
        let item = msg || await db.table('chatMsg').where('[speakerId+isGroupChat]').equals([value, 0]).filter(i => { return i.isRead === 1 }).last()
        msg ? item.num = noRead : item.num = 0
        chatList.push(item)
      }
      let Groupchat = await db.table('chatMsg').where('audienceId').notEqual(0).filter(item => { return item.isGroupChat === 1 }).uniqueKeys()
      for (let GroupId of Groupchat) {
        let chatItem = await db.table('chatMsg').where('[audienceId+isGroupChat]').equals([GroupId, 1]).filter(i => { return i.isRead === 0 })
        let noRead = await chatItem.count()
        let msg = await chatItem.last()
        let groupItem = await db.table('group').where('id').equals(GroupId).first()
        let item = msg || await db.table('chatMsg').where('[audienceId+isGroupChat]').equals([GroupId, 1]).filter(i => { return i.isRead === 1 }).last()
        let lastName = await db.table('groupMembers').where('userId').equals(item.speakerId).first()
        lastName ? item.lastName = lastName.personInfo.realName : ''
        groupItem ? item.groupName = groupItem.name : ''
        msg ? item.num = noRead : item.num = 0
        await chatList.push(item)
      }
      chatList.sort(compare('createdAt'))
      return chatList
    }
  }
}
