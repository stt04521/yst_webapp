<template>
  <div class="work-wrapper">
    <apply-show :dataList="applyList" :showAll = "true"></apply-show>
    <div class="task-container">
      <tab :line-width="1" custom-bar-width="60px" active-color="#10b4f7" class="s-tab-container" defaultColor="#aaa">
        <tab-item select>
          <router-link to="/work/todoList">待办任务</router-link>
        </tab-item>
        <tab-item>
          <router-link to="/work/finishedList">已完成</router-link>
        </tab-item>
      </tab>
      <div class="list-container">
        <router-view :dataList = 'dataList'></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import { Tab, TabItem } from 'vux'
  import applyShow from './applyShow.vue'
  export default {
    name: 'work',
    components: {
      Tab,
      TabItem,
      applyShow
    },
    data () {
      return {
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
        ],
        dataList: [
          {
            image: require('../../assets/feiji.png'),
            creator: '蔡俊明',
            content: '完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的',
            start: '2017-7-26 18: 00',
            modify: '13:00'
          },
          {
            image: require('../../assets/qianbi.png'),
            creator: '蔡俊明',
            content: '完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的',
            start: '2017-7-26 18: 00',
            modify: '13:00'
          },
          {
            image: require('../../assets/money.png'),
            creator: '蔡俊明',
            content: '完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的完成今天的',
            start: '2017-7-26 18: 00',
            modify: '13:00'
          }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .work-wrapper{
    .task-container {
      margin-top: 40px;
      .s-tab-container{
      }
    }
  }
</style>
