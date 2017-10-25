import fetch from '@/utils/fetch'

// 获取个人信息
export function getMyInfo () {
  return fetch({
    url: '/restful/person/info/myInfo',
    method: 'get'
  })
}

// 通过id查找信息
export function findPersonInfoByUserId (id) {
  return fetch({
    url: '/restful/person/info/findPersonInfoByUserId/' + id,
    method: 'get'
  })
}

// 编辑
/* params
* {
*   nickName: '111111'
* }
* */
export function editInfo (data) {
  return fetch({
    url: '/restful/person/info/edit',
    method: 'post',
    data
  })
}

// 身份验证
/* params
* {
*   IdentityCard: '4201061981',
*   IdentityName: '陈明亮',
*   IdentityCardImg: 'img'
* }
* */
export function identityVerification (data) {
  return fetch({
    url: '/restful/person/cert/create',
    method: 'post'
  })
}

//
