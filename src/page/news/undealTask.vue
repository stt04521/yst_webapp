<template>
  <div class="undeal-task-wrapper">
    <x-header :title="taskTitle" class="header">
    </x-header>
    <tab :line-width="1" custom-bar-width="60px" active-color="#10b4f7" class="s-tab-container" defaultColor="#aaa">
      <tab-item selected  @click.native="showUnfinished">
        待办任务
      </tab-item>
      <tab-item @click.native="showFinished">
        已完成
      </tab-item>
    </tab>
    <div class="list-container" :style="{height: height + 'px'}">
      <!--<router-view :dataList = 'dataList' @to-detail="toDetail"></router-view>-->
      <todo-list :dataList="dataList" @to-detail="toDetail"></todo-list>
    </div>
  </div>
</template>
<script>
  import {Tab, TabItem, XHeader} from 'vux'
  import todoList from '@/components/todoList'
  export default{
    name: 'undealTask',
    components: {
      XHeader,
      Tab,
      TabItem,
      todoList
    },
    data () {
      return {
        height: 0,
        taskTitle: '个人',
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
          },
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
          },
          {
            image: require('../../assets/feiji.png'),
            creator: '4444',
            content: '完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的',
            start: '2017-7-26 18: 00',
            modify: '13:00',
            title: '任务'
          },
          {
            image: require('../../assets/qianbi.png'),
            creator: '5555',
            content: '完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的',
            start: '2017-7-26 18: 00',
            modify: '13:00',
            title: '计划'
          },
          {
            image: require('../../assets/money.png'),
            creator: '6666',
            content: '完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的',
            start: '2017-7-26 18: 00',
            modify: '13:00',
            title: 'others'
          }
        ]
      }
    },
    mounted () {
      this.dataList = this.dataList1
      this.height = document.body.offsetHeight - 90
    },
    methods: {
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
      showUnfinished () {
        this.dataList = this.dataList1
      },
      showFinished () {
        this.dataList = this.dataList2
      }
    }
  }
</script>
<style lang="less">
  .undeal-task-wrapper{
    height: 100%;
    overflow: hidden;
    .list-container{
      overflow-y: auto;
    }
  }
</style>
