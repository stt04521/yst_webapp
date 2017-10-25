/**
 * Created by shishitengteng on 2017/10/23.
 */
import fetch from '@/utils/fetch'

// 获取我的分组信息
export function friendGetGroup () {
  return fetch({
    url: '/restful/friendGroup/friend/getGroup',
    method: 'get'
  })
}
// 获取某个分组的好友
export function friendGetFriend () {
  return fetch({
    url: '/restful/friendGroup/friend/getFriend/cbdedc4e-31e3-49e2-9c20-8a006a5f9413',
    method: 'get'
  })
}
// 获取全部好友
export function getAllFriend () {
  return fetch({
    url: '/restful/friendGroup/friend/getAllFriend',
    method: 'get'
  })
}
// 添加分组
/*
 * data数据格式
 *  {
 *   name: '测试组'
 *  }
 * */
export function friendAddGroup (data) {
  return fetch({
    url: '/restful/friendGroup/friend/addGroup',
    method: 'post',
    data
  })
}
// 删除分组
/*
 * data数据格式
 *  {
 *   friendGroupId: 'a34b0ac9-9837-4634-a26b-a9ff902d20c4'
 *  }
 * */
export function friendDelGroup (data) {
  return fetch({
    url: '/restful/friendGroup/friend/delGroup',
    method: 'post',
    data
  })
}
// 删除好友
/*
 * data数据格式
 *  {
 *   friendId: 'a34b0ac9-9837-4634-a26b-a9ff902d20c4'
 *  }
 * */
export function friendDelFriend (data) {
  return fetch({
    url: '/restful/friendGroup/friend/delFriend',
    method: 'post',
    data
  })
}
// 拖拽排序
/*
 * data数据格式
 *  {
 *   sortArr: ['a34b0ac9-9837-4634-a26b-a9ff902d20c4']
 *  }
 * */
export function groupSortGroup (data) {
  return fetch({
    url: '/restful/friendGroup/friend/sortGroup',
    method: 'post',
    data
  })
}

// 手机号获取用户id
export function findUserByPhone (params) {
  return fetch({
    url: `/restful/oauth/findUserByPhone/${params}`,
    method: 'get'
  })
}
// 用户id获取用户信息
export function findPersonInfoByUserId (params) {
  return fetch({
    url: `/restful/person/info/findPersonInfoByUserId/${params}`,
    method: 'get'
  })
}
// 添加好友
export function friendAddFriend (data) {
  return fetch({
    url: '/restful/friendGroup/friend/addFriend',
    method: 'post',
    data
  })
}
// 移动好友到新的分组
export function moveFriendToGroup (data) {
  return fetch({
    url: '/restful/friendGroup/friend/moveFriendToGroup',
    method: 'post',
    data
  })
}

