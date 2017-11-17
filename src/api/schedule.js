import fetch from '@/utils/fetch'

// 创建日程
/* data数据格式
  *  {
  *   content: 'ceshiceshi',
  *   startTime: '2017-09-15 15:02:52'
  *   endTime: '2017-09-17 15:02:52',
  *   address: 'wuhan132',
  *   partner: ['802d8152-3c6c-4ae8-9e3d-b082297786f2']，
  *   remind: '360000'
  *  }
  * */
export function createScheduleApi (data) {
  return fetch({
    url: '/restful/schedule/create',
    method: 'post',
    data
  })
}

// 获取日程列表
export function getList () {
  return fetch({
    url: '/restful/schedule/getScheduleList',
    method: 'get'
  })
}

// 获取某一天的日程
export function getScheduleByDateApi (data) {
  return fetch({
    url: '/restful/schedule/getScheduleByDate',
    method: 'post',
    data
  })
}
// 获取日程详情
export function getInfo (id) {
  return fetch({
    url: '/restful/schedule/getScheduleInfo/' + id,
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
export function getNoteInfo (id) {
  return fetch({
    url: '/restful/notepad/getNotepadInfo/' + id,
    method: 'get'
  })
}

// 编辑日程
/*
* data数据格式
*  {
*   content: 'ceshiceshi',
*   startTime: '2017-09-15 15:02:52'
*   endTime: '2017-09-17 15:02:52',
*   address: 'wuhan132',
*   partner: ['802d8152-3c6c-4ae8-9e3d-b082297786f2']，
*   remind: '360000',
*   scheduleId: 'ac858b32-b2bf-451a-b2b5-c864ce3ad5bb'
*  }
* */
export function updateSchedule (data) {
  return fetch({
    url: '/restful/schedule/updateSchedule',
    method: 'post',
    data
  })
}
// 删除日程
/*
* param
* id: delete schedule id
* */
export function deleteSchedule (id) {
  return fetch({
    url: '/restful/schedule/deleteSchedule/' + id,
    method: 'post'
  })
}

// 编辑笔记
/* params
*  {
*   content: 'ceshiceshi1111',
*   startTime: '2017-09-15 15:02:52',
*   notepadId: 'ac858b32-b2bf-451a-b2b5-c864ce3ad5bb'
*  }
* */
export function updateNotepad (data) {
  return fetch({
    url: '/restful/notepad/updateNotepad',
    method: 'post',
    data
  })
}
// 删除笔记
/*
* param
* id: delete note id
* */
export function deleteNotepad (id) {
  return fetch({
    url: '/restful/notepad/deleteNotepad/' + id,
    method: 'post'
  })
}
