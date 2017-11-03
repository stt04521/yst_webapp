import fetch from '@/utils/fetch'

// 获取整体消息列表计数
export function count () {
  return fetch({
    url: '/restful/message/count',
    method: 'get'
  })
}

// 获取消息列表
export function listByType (data) {
  return fetch({
    url: `/restful/message/listByType/${data.type}?page=0&limit=2`,
    method: 'get'
  })
}
