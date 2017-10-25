/**
 * Created by shishitengteng on 2017/10/23.
 */
import { getAllFriend, friendDelFriend, groupSortGroup, friendAddGroup, friendDelGroup, findUserByPhone, findPersonInfoByUserId, friendAddFriend } from '@/api/contacts'
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
    async  FriendGetGroup ({commit}) {
      let res = await getAllFriend()
      let _friendArr = []
      let _personInfoArr = []
      let _fiendOnlyGroup = []
      let _friendGroupArr = res.data.result.map((itemL1) => {
        itemL1.friend.map((itemL2) => {
          if (itemL2.id === undefined) return
          _friendArr.push({
            id: itemL2.id,
            friendId: itemL2.friendId,
            friendGroupId: itemL2.friendGroupId
          })
          _personInfoArr.push(itemL2)
        })
        _fiendOnlyGroup.push({
          id: itemL1.id,
          index: itemL1.index,
          name: itemL1.name,
          userId: itemL1.userId
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
      // _personInfoArr.push(myInfo.result)
      db.table('fiendOnlyGroup').clear()
      db.table('fiendOnlyGroup').bulkPut(_fiendOnlyGroup)
      db.table('friendGroup').clear()
      db.table('friendGroup').bulkPut(_friendGroupArr)
      db.table('friend').clear()
      db.table('friend').bulkPut(_friendArr)
      db.table('personInfo').clear()
      db.table('personInfo').bulkPut(_personInfoArr)
      commit('SET_FRIENDGROUP', _friendGroupArr)
      commit('SET_FRIEND', _friendArr)
      commit('SET_PERSONINFO', _personInfoArr)
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
    }
  }
}

export default contacts
