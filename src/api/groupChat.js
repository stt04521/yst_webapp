/**
 * Created by shishitengteng on 2017/10/25.
 */
import fetch from '@/utils/fetch'

// 我所在的群组
export function groupMyGroup () {
  return fetch({
    url: '/restful/friendGroup/group/myGroup',
    method: 'get'
  })
}
// 群组信息
export function groupGroupInfo (data) {
  return fetch({
    url: '/restful/friendGroup/group/groupInfo',
    method: 'post',
    data
  })
}
// 群组成员列表
export function multiGroupMembers (data) {
  return fetch({
    url: '/restful/friendGroup/group/groupMembers',
    method: 'post',
    data
  })
}
// 退出群组
export function delGroupMembers (data) {
  return fetch({
    url: '/restful/friendGroup/group/delGroupMembers',
    method: 'post',
    data
  })
}

