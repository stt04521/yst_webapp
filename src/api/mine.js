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
    method: 'post',
    data
  })
}

// 组织验证
/* params
* {
*   organizeName: '组织名称',
*   cerditCode: '1112110',
*   organizeLicense: [{url:"123"}, {url: "123123"}],
*   organizeBasicInfoId: "d499fd70-b588-4b20-8779-291b67230bfb"
* }
* */
export function organizeVerification (data) {
  return fetch({
    url: '/restful/organize/createAuth',
    method: 'post',
    data
  })
}

// 创建组织
/* params
* {
*   organizeType: '123',
*   organizeName: '123456',
*   address: '55555'
*  }
* */
export function createOrganize (data) {
  return fetch({
    url: '/restful/organize/create',
    method: 'post',
    data
  })
}
// 修改手机号或者邮箱
/* params
* {
*   type: 'email or phone'
*   email/ phone: '11111'
*  }
* */
export function editEmailOrPhone (data) {
  return fetch({
    url: `/restful/oauth/editUser/${data.type}`,
    method: 'post',
    data
  })
}
// 修改密码
/* params
* {
*   password: '123456',
*   newPassword: '523648'
*  }
* */
export function changePassword (data) {
  return fetch({
    url: '/restful/oauth/changePassword',
    method: 'post',
    data
  })
}
