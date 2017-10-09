<template>
  <div class="task-manage-wrapper">
    <use-apply :alwaysUseList='alwaysUseList' :allApplyList='personalList'></use-apply>
  </div>
</template>
<script>
import useApply from '../work/useApply.vue'
export default {
  name: 'taskManage',
  components: {
    useApply
  },
  data () {
    return {
      alwaysUseList: [
        {
          image: require('../../assets/news/userImg.jpg'),
          title: '常用应用'
        },
        {
          image: require('../../assets/news/userImg.jpg'),
          title: '常用应用'
        },
        {
          image: require('../../assets/news/userImg.jpg'),
          title: '常用应用'
        },
        {
          image: require('../../assets/news/userImg.jpg'),
          title: '常用应用'
        },
        {
          image: require('../../assets/news/userImg.jpg'),
          title: '常用应用'
        },
        {
          image: require('../../assets/news/userImg.jpg'),
          title: '常用应用'
        },
        {
          image: require('../../assets/news/userImg.jpg'),
          title: '常用应用'
        },
        {
          image: require('../../assets/add_more.png'),
          title: '添加应用'
        }
      ],
      personalList: [
        {
          title: '财务管理',
          applyList: [
            {
              image: require('../../assets/news/userImg.jpg'),
              title: '任务'
            },
            {
              image: require('../../assets/news/userImg.jpg'),
              title: '任务'
            },
            {
              image: require('../../assets/news/userImg.jpg'),
              title: '任务'
            },
            {
              image: require('../../assets/news/userImg.jpg'),
              title: '任务'
            },
            {
              image: require('../../assets/news/userImg.jpg'),
              title: '任务'
            },
            {
              image: require('../../assets/news/userImg.jpg'),
              title: '任务'
            },
            {
              image: require('../../assets/news/userImg.jpg'),
              title: '任务'
            },
            {
              image: require('../../assets/news/userImg.jpg'),
              title: '任务'
            }
          ]
        }
      ]
    }
  }
}
</script>
<style scoped lang='less'>
.task-manage-wrapper{

}
</style>
