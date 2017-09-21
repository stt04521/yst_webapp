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
        component: (resolve) => {
          require(['@/page/work'], resolve)
        }
      },
      {
        path: 'contacts', // 联系人
        component: (resolve) => {
          require(['@/page/contacts'], resolve)
        }
      },
      {
        path: 'schedule', // 日程
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
      },
      {
        path: 'createSchedule',
        component: (resolve) => {
          require(['@/page/schedule/createSchedule'], resolve)
        }
      },
      {
        path: 'chooseParticipator',
        component: (resolve) => {
          require(['@/page/schedule/chooseParticipator'], resolve)
        }
      },
      {
        path: 'scheduleDetail',
        component: (resolve) => {
          require(['@/page/schedule/scheduleDetail'], resolve)
        }
      },
      {
        path: 'noteDetail',
        component: (resolve) => {
          require(['@/page/schedule/noteDetail'], resolve)
        }
      },
      {
        path: 'createNote',
        component: (resolve) => {
          require(['@/page/schedule/createNote'], resolve)
        }
      }]
    },
    {
      path: '/system', // 系统消息
      component: (resolve) => {
        require(['@/page/news/system'], resolve)
      }
    }
  ]
})
