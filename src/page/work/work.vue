<template>
  <div class="work-wrapper" :height="height + 'px'">
    <apply-show @deal-item-click="showTaskDetail" @show-all-task="toShowAll" :dataList="applyList" :showAll = "true"></apply-show>
    <div class="task-container">
      <tab :line-width="1" custom-bar-width="60px" active-color="#10b4f7" class="s-tab-container" defaultColor="#aaa">
        <tab-item selected @click.native="toUnFinished">
          待办任务
        </tab-item>
        <tab-item @click.native="toFinished">
          已完成
        </tab-item>
      </tab>
      <div class="list-container">
        <!--<router-view :dataList = 'dataList' @to-detail="toDetail"></router-view>-->
        <todo-list :dataList="dataList" @to-detail="toDetail"></todo-list>
      </div>
    </div>
  </div>
</template>

<script>
  import { Tab, TabItem } from 'vux'
  import applyShow from './applyShow.vue'
  import {eventBus} from '../../utils/eventBus'
  import todoList from '@/components/todoList'
//  import selectionList from '../../components/selectionList.vue'
  export default {
    name: 'work',
    components: {
      Tab,
      TabItem,
      applyShow,
      todoList
    },
    data () {
      return {
        height: 0,
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
        ]
      }
    },
    methods: {
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
      toShowAll () {
        if (this.isOrganize) {
          this.$router.push({
            name: 'orgnizeApply'
          })
        } else {
          this.$router.push({
            name: 'personalApply'
          })
        }
      },
      toUnFinished () {
        this.dataList = this.dataList1
      },
      toFinished () {
        this.dataList = this.dataList2
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
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .work-wrapper{
    height: 100%;
    overflow: hidden;
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
