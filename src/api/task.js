import fetch from '@/utils/fetch'

// 创建任务
/* params
* {
*   content: 'content content',
*   startTime: '2017-1-2 19:30:30',
*   endTime: '2017-3-4 19:00:00',
*   executor: ["1f6170ff-a8a3-45f0-a8c7-8162ecbd7dd4"], // 执行者
*   checker: ["cff39910-49bc-4f46-b42f-b6a3e942dcc7"], // 审核者
*   participant: ["cff39910-49bc-4f46-b42f-b6a3e942dcc7"], // 参与者
*   principal: "37d938d3-7a82-4de5-b2d4-567265728345"  // 责任人
*  }
* */
export function createTaskApi (data) {
  return fetch({
    url: 'http://192.168.0.12:8000/restful/task/create',
    // url: '/restful/task/create',
    method: 'post',
    data
  })
}

// 员工列表
export function getCollegeListApi () {
  return fetch({
    url: 'http://192.168.0.12:8000/restful/person/personList',
    // url: '/restful/person/personList',
    method: 'post'
  })
}
// 任务列表
export function getTaskListApi () {
  return fetch({
    url: '/restful/task/myTaskList',
    method: 'get'
  })
}

// 任务详情
/* params
* {
*   id: 'TASK ID'
* }
* */
export function taskDetailApi (id) {
  return fetch({
    url: '/restful/task/detail/' + id,
    method: 'get'
  })
}

// 任务编辑
/* params
* {
*   content: 'content content content content',
*   startTime: '2017-1-2 19:30:30',
*   endTime: "2017-3-4 19:00:00",
*   executor: ["执行者"],
*   checker: ["审核者"],
*   participant: ["参与者"],
*   principal: "责任人",
*   taskId: "填编辑的任务的id"
* */
export function editTaskApi (data) {
  return fetch({
    url: '/restful/task/updateTask',
    method: 'post',
    data
  })
}

// 改变任务状态
/* params
* {
*   id: 'TASK ID'
* }
* */
export function changeTaskStatusApi (id) {
  return fetch({
    url: '/restful/task/change/' + id,
    method: 'post'
  })
}

// 获取任务所有执行者
/* params
* {
*   id: 'TASK ID'
* }
* */
export function getAllExcutorApi (id) {
  return fetch({
    url: '/restful/task/taskExecutorList/' + id,
    method: 'get'
  })
}
