import fetch from '@/utils/fetch'
// 登陆
export function loginByUsername (user, password) {
  const data = {
    user,
    password
  }
  return fetch({
    url: '/restful/oauth/login',
    method: 'post',
    data
  })
}

export function logout () {
  return fetch({
    url: '/login/logout',
    method: 'post'
  })
}
// 注册
export function register (data) {
  return fetch({
    url: '/restful/oauth/register',
    method: 'post',
    data
  })
}
// 忘记密码
export function forgetPassword (data) {
  return fetch({
    url: '/restful/oauth/forgetPassword',
    method: 'post',
    data
  })
}
// 手机登录
export function loginByPhone (data) {
  return fetch({
    url: '/restful/oauth/loginByPhone',
    method: 'post',
    data
  })
}
export function getUserInfo (token) {
  return fetch({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}
