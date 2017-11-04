/**
 * Created by shishitengteng on 2017/10/25.
 */
import { addGroupMembers, groupCreate, groupMyGroup, groupGroupInfo, multiGroupMembers, delGroupMembers } from '@/api/groupChat'
import db from '../../db'
const groupChat = {
  state: {
  },

  mutations: {
  },

  actions: {
    async dataSyncGroup () {
      let allGroup = await groupMyGroup()
      let allGroupArr = allGroup.data.result.map((item) => {
        return item.groupId
      })
      let allGroupInfo = await groupGroupInfo({groupId: allGroupArr})
      let allGroupMembersInfo = await multiGroupMembers({groupId: allGroupArr})
      db.table('group').clear()
      db.table('groupMembers').clear()
      db.table('group').bulkPut(allGroupInfo.data.result)
      await db.table('groupMembers').bulkPut(allGroupMembersInfo.data.result)
      allGroupMembersInfo.data.result.forEach(item => {
        db.table('personInfo').put(item.personInfo)
      })
    },
    // 获取群组分组
    GetChatGroup () {
      return db.table('group').toArray()
    },
    // 退出群组
    async DelGroupMembers ({dispatch, commit}, data) {
      let res = await dispatch('GetSyncUserInfo')
      let request = {
        groupId: data,
        userId: res.id
      }
      await delGroupMembers(request)
      await dispatch('dataSyncGroup')
    },
    // 群组资料
    async GetGroupInfo ({dispatch, commit}, groupId) {
      return db.table('groupMembers').where('groupId').equals(groupId).toArray()
    },
    // 删除群成员
    async DelMembers ({dispatch, commit}, data) {
      await delGroupMembers(data)
      await db.table('groupMembers').where('id').equals(data.userId).delete()
      await dispatch('dataSyncGroup')
    },
    // 创建群聊
    async GroupCreate ({dispatch, commit}, data) {
      await groupCreate(data)
      await dispatch('dataSyncGroup')
    },
    // 获取好友添加成员列表
    async AddGroupMembers ({dispatch, commit}, data) {
      await addGroupMembers(data)
      await dispatch('dataSyncGroup')
    }
  }

}

export default groupChat
