/**
 * Created by shishitengteng on 2017/10/23.
 */
import { myInfo, getAllFriend, friendDelFriend, groupSortGroup, friendAddGroup, friendDelGroup, findUserByPhone, findPersonInfoByUserId, friendAddFriend, moveFriendToGroup } from '@/api/contacts'
import { findUserInfoByUserId } from '@/api/login'
import db from '../../db'
const contacts = {
  state: {
    groupingInfo: [],
    friendGroup: [],
    friend: [],
    personInfo: []
  },

  mutations: {
    SET_GROUPINGINFO: (state, info) => {
      state.groupingInfo = info
    },
    SET_FRIENDGROUP: (state, info) => {
      state.friendGroup = info
    },
    SET_FRIEND: (state, info) => {
      state.friend = info
    },
    SET_PERSONINFO: (state, info) => {
      state.personInfo = info
    }
  },

  actions: {
    // 分组信息
    async FriendGetGroup ({commit}) {
      let res = await getAllFriend()
      const userInfo = await myInfo()
      let _friendArr = []
      let _personInfoArr = []
      let _friendGroupArr = res.data.result.map((itemL1) => {
        itemL1.friend.map((itemL2) => {
          if (itemL2.id === undefined) return
          _friendArr.push({
            id: itemL2.id,
            friendId: itemL2.friendId,
            friendGroupId: itemL2.friendGroupId
          })
          _personInfoArr.push(itemL2.personInfo)
        })
        return {
          id: itemL1.id,
          index: itemL1.index,
          name: itemL1.name,
          userId: itemL1.userId,
          friend: itemL1.friend,
          showContent: false
        }
      })
      _personInfoArr.push(userInfo.data.result)
      db.table('friendGroup').clear()
      db.table('friendGroup').bulkPut(_friendGroupArr)
      db.table('friend').clear()
      db.table('friend').bulkPut(_friendArr)
      db.table('personInfo').clear()
      db.table('personInfo').bulkPut(_personInfoArr)
    },
    // 模糊查询
    FuzzySearch ({commit}, value) {
      return db.table('personInfo').where('realName').equals(value).toArray()
    },
    // 获取默认分组
    GetDefaultGroup ({commit}) {
      return db.table('friendGroup').toCollection().first()
    },
    // 获取好友列表信息
    GetFriendGroup ({commit}) {
      return db.table('friendGroup').toArray()
    },
    // 删除好友
    async FriendDelFriend ({dispatch, commit}, friendId) {
      await friendDelFriend({friendId: friendId})
      await dispatch('FriendGetGroup')
    },
    // 分组拖拽排序
    async GroupSortGroup ({dispatch, commit}, sortArr) {
      await groupSortGroup({sortArr: sortArr})
      await dispatch('FriendGetGroup')
    },
    // 添加分组
    async FriendAddGroup ({dispatch, commit}, name) {
      await friendAddGroup({name: name})
      await dispatch('FriendGetGroup')
    },
    // 删除分组
    async FriendDelGroup ({dispatch, commit}, friendGroupId) {
      await friendDelGroup({friendGroupId: friendGroupId})
      await dispatch('FriendGetGroup')
    },
    // 添加好友
    async FriendAddFriend ({dispatch, commit}, friend) {
      await friendAddFriend(friend)
      await dispatch('FriendGetGroup')
    },
    // 手机号查询用户信息
    FindUserByPhone ({dispatch, commit}, tel) {
      return new Promise((resolve, reject) => {
        findUserByPhone(tel).then((res) => {
          if (!res.data.result) return
          findPersonInfoByUserId(res.data.result.id).then(data => {
            resolve(data.data.result)
          })
        }).catch((err) => {
          reject(err)
        })
      })
    },
    // 移动好友到新分组
    async MoveFriendToGroup ({dispatch, commit}, data) {
      await moveFriendToGroup(data)
      await dispatch('FriendGetGroup')
    },
    // 获取好友资料
    async FriendData ({dispatch, commit}, data) {
      let user = await db.table('personInfo').where('userId').equals(data).first()
      let userData = await findUserInfoByUserId(user.userId)
      let result = Object.assign(userData.data.result, user)
      return result
    }
  }
}

export default contacts
