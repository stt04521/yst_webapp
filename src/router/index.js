import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: 'news',
      component: (resolve) => {
        require(['@/page/index'], resolve)
      },
      children: [{
        path: 'news', // 消息页
        component: (resolve) => {
          require(['@/page/news/news'], resolve)
        }
      },
      {
        path: 'work', // 工作
        redirect: 'work/todoList',
        component: (resolve) => {
          require(['@/page/work/work'], resolve)
        },
        children: [{
          path: 'todoList',
          component: (resolve) => {
            require(['@/page/work/todoList'], resolve)
          }
        },
        {
          path: 'finishedList',
          component: (resolve) => {
            require(['@/page/work/todoList'], resolve)
          }
        }]
      },
      {
        path: 'contacts', // 联系人
        component: (resolve) => {
          require(['@/page/contacts'], resolve)
        }
      },
      {
        path: 'schedule', // 日程
        redirect: 'schedule/showSchedule',
        component: (resolve) => {
          require(['@/page/schedule/schedule'], resolve)
        },
        children: [{
          path: 'showSchedule',
          component: (resolve) => {
            require(['@/page/schedule/showSchedule'], resolve)
          }
        },
        {
          path: 'showNote',
          component: (resolve) => {
            require(['@/page/schedule/showSchedule'], resolve)
          }
        }
        ]
      },
      {
        path: 'showCalender',
        component: (resolve) => {
          require(['@/page/schedule/showCalender'], resolve)
        }
      }]
    },
    {
      path: '/system', // 系统消息
      component: (resolve) => {
        require(['@/page/news/system'], resolve)
      }
    },
    {
      path: '/createSchedule', // 创建日程
      component: (resolve) => {
        require(['@/page/schedule/createSchedule'], resolve)
      }
    },
    {
      path: '/chooseParticipator', // 选择参与者
      component: (resolve) => {
        require(['@/page/schedule/chooseParticipator'], resolve)
      }
    },
    {
      path: '/createNote',  // 创建记事
      component: (resolve) => {
        require(['@/page/schedule/createNote'], resolve)
      }
    },
    {
      path: '/scheduleDetail',  // 日程详情
      component: (resolve) => {
        require(['@/page/schedule/scheduleDetail'], resolve)
      }
    },
    {
      path: '/noteDetail',  // 记事详情
      component: (resolve) => {
        require(['@/page/schedule/noteDetail'], resolve)
      }
    },
    {
      path: '/orgnizeApply',  // 组织应用
      redirect: '/orgnizeApply/organizeUse',
      component: (resolve) => {
        require(['@/page/work/orgnizeApply'], resolve)
      },
      children: [
        {
          path: 'organizeUse',
          component: (resolve) => {
            require(['@/page/work/useApply'], resolve)
          }
        },
        {
          path: 'personalUse',
          component: (resolve) => {
            require(['@/page/work/useApply'], resolve)
          }
        }
      ]
    },
    {
      path: '/personalApply',  // 个人应用
      component: (resolve) => {
        require(['@/page/work/personalApply'], resolve)
      }
    }
  ]
})
