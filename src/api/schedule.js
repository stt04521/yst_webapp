import fetch from '@/utils/fetch'

// 创建日程
/* data数据格式
  *  {
  *   content: 'ceshiceshi',
  *   startTime: '2017-09-15 15:02:52'
  *   endTime: '2017-09-17 15:02:52',
  *   address: 'wuhan132',
  *   partner: ['802d8152-3c6c-4ae8-9e3d-b082297786f2']
  *  }
  * */
export function createSchedule (data) {
  return fetch({
    url: '/restful/schedule/create',
    method: 'post',
    data
    // params: {data}
  })
}

// 获取日程列表
export function getList () {
  return fetch({
    url: '/restful/schedule/getScheduleList',
    method: 'get'
  })
}

// 获取日程详情
export function getInfo () {
  return fetch({
    url: '/restful/schedule/getScheduleInfo/6544e842-b24c-4cea-96d7-fd5e481702f4',
    method: 'get'
  })
}

// 创建笔记
/* params
*  {
*   content: 'ceshiceshi1111',
*   startTime: '2017-09-15 15:02:52'
*  }
* */
export function createNote (data) {
  return fetch({
    url: '/restful/notepad/create',
    method: 'post',
    data
  })
}

// 获取笔记列表
export function getNoteList () {
  return fetch({
    url: '/restful/notepad/getNotepadList',
    method: 'get'
  })
}

// 获取笔记详情
export function getNoteInfo () {
  return fetch({
    url: '/restful/notepad/getNotepadInfo/a20c2a33-9449-4908-96c5-16b96ec65692',
    method: 'get'
  })
}
