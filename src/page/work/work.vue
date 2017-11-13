<template>
  <div class="work-wrapper" :height="height + 'px'">
    <div class="work-container" v-for="(item, index) in organizeList" :key="index" v-show="isShowAll">
      <div class="title-container">
        <span class="column-icon"></span>
        <span class="title">{{ item.organizeName }}</span>
        <span class="show-more" @click="showMore(item)">更多》</span>
      </div>
      <apply-show @deal-item-click="showTaskDetail" :dataList="applyList"></apply-show>
    </div>
    <div class="work-container" v-show="!isShowAll">
      <use-apply :alwaysUseList='alwaysUseList' :allApplyList='personalList' @deal-click="dealClick"></use-apply>
    </div>
  </div>
</template>

<script>
  import { Tab, TabItem, Group, Cell } from 'vux'
  import applyShow from './applyShow.vue'
  import {eventBus} from '../../utils/eventBus'
  import useApply from './useApply.vue'

  import {mapActions} from 'vuex'
  export default {
    name: 'work',
    components: {
      Tab,
      TabItem,
      applyShow,
      Group,
      Cell,
      useApply
    },
    data () {
      return {
        height: 0,
        organizeList: [],
        isOrganize: false,
        applyList: [
          {
            image: require('../../assets/news/userImg.jpg'),
            title: '任务'
          },
          {
            image: require('../../assets/news/userImg.jpg'),
            title: '计划'
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
        ],
        dataList: [],
        dataList1: [
          {
            image: require('../../assets/feiji.png'),
            creator: '蔡俊明',
            content: '完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的',
            start: '2017-7-26 18: 00',
            modify: '13:00',
            title: '任务'
          },
          {
            image: require('../../assets/qianbi.png'),
            creator: '蔡俊明',
            content: '完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的',
            start: '2017-7-26 18: 00',
            modify: '13:00',
            title: '计划'
          },
          {
            image: require('../../assets/money.png'),
            creator: '蔡俊明',
            content: '完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的',
            start: '2017-7-26 18: 00',
            modify: '13:00',
            title: 'others'
          }
        ],
        dataList2: [
          {
            image: require('../../assets/feiji.png'),
            creator: '1111',
            content: '完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的',
            start: '2017-7-26 18: 00',
            modify: '13:00',
            title: '任务'
          },
          {
            image: require('../../assets/qianbi.png'),
            creator: '2222',
            content: '完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的',
            start: '2017-7-26 18: 00',
            modify: '13:00',
            title: '计划'
          },
          {
            image: require('../../assets/money.png'),
            creator: '3333',
            content: '完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的',
            start: '2017-7-26 18: 00',
            modify: '13:00',
            title: 'others'
          }
        ],
        alwaysUseList: [
          {
            image: require('../../assets/news/userImg.jpg'),
            title: '计划'
          },
          {
            image: require('../../assets/news/userImg.jpg'),
            title: '任务'
          },
          {
            image: require('../../assets/news/userImg.jpg'),
            title: '计划'
          },
          {
            image: require('../../assets/news/userImg.jpg'),
            title: '任务'
          },
          {
            image: require('../../assets/news/userImg.jpg'),
            title: '计划'
          },
          {
            image: require('../../assets/news/userImg.jpg'),
            title: '组织应用'
          },
          {
            image: require('../../assets/news/userImg.jpg'),
            title: '组织应用'
          },
          {
            image: require('../../assets/news/userImg.jpg'),
            title: '组织应用'
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
    },
    computed: {
      isShowAll () {
        if (this.$store.state.user.overAllStatus.key === 'all') {
          return true
        } else {
          return false
        }
      }
    },
    methods: {
      ...mapActions([
        'getMyInfoAction'
      ]),
      showTaskDetail (item) {
        console.log(item)
        if (item.title === '任务') {
          this.$router.push({
            name: 'taskList'
          })
        }
        if (item.title === '计划') {
          this.$router.push({
            name: 'planDetail'
          })
        }
      },
      toDetail (val) {
        if (val.title === '任务') {
          this.$router.push({
            name: 'taskDetail'
          })
        }
        if (val.title === '计划') {
          this.$router.push({
            name: 'planDetail'
          })
        }
        if (val.title === 'others') {
          console.log('其他任务')
        }
      },
      toUnFinished () {
        this.dataList = this.dataList1
      },
      toFinished () {
        this.dataList = this.dataList2
      },
      showMore (item) {
        let paramData
        if (item.key === 'single') {
          paramData = {
            id: item.id,
            title: '个人应用'
          }
        } else {
          paramData = {
            id: item.id,
            title: item.organizeName
          }
        }
        this.$router.push({
          name: 'showAllApply',
          query: {
            paramData: paramData
          }
        })
      },
      dealClick (item) {
        console.log(item)
      }
    },
    mounted () {
      eventBus.$on('organize-changed', (item) => {
        console.log('1111', item)
        // work页面获取selection选择item 渲染页面
        // 如果item是组织，则点击更多显示的组织应用页面
        // 如果item是个人，则点击更多显示的是个人应用页面
        if (item.value.indexOf('个人') > -1) {
          this.isOrganize = false
        }
        if (item.value.indexOf('组织') > -1) {
          this.isOrganize = true
        }
      })
      this.height = document.body.offsetHeight - 100
      this.dataList = this.dataList1
    },
    async created () {
      let res = await this.getMyInfoAction()
      this.organizeList = [{organizeName: '个人应用', key: 'single', id: res.userId}].concat(res.organizeId)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .work-wrapper{
    height: 100%;
    overflow-y: auto;
    .work-container{
      .title-container{
        height: 40px;
        line-height: 40px;
        padding-left: 10px;
        position: relative;
        font-size: 16px;
        color: #aaa;
        .title{
          display: inline-block;
          margin-left: 10px;
        }
        .show-more{
          position: absolute;
          top: 0px;
          right: 10px;
        }
      }
    }
    .task-container {
      overflow: hidden;
      margin-top: 40px;
      .s-tab-container{
      }
      .list-container {
        height: 230px;
        overflow-y: auto;
      }
    }
  }
</style>
