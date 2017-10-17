import fetch from '@/utils/fetch'

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

export function getUserInfo (token) {
  return fetch({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}
