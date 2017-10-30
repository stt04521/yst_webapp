/**
 * Created by shishitengteng on 2017/10/22.
 */
import Dexie from 'dexie'

const db = new Dexie('YuanSuDB')
db.version(1).stores({
  friend: '++id',
  friendGroup: 'index,id',
  group: 'id',
  myInfo: 'id',
  groupMembers: 'id,groupId',
  personInfo: '++id,personInfo.realName',
  userInfo: '++id'
})

export default db
