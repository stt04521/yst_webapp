<template>
  <div class="work-wrapper" :height="height + 'px'">
    <apply-show @show-task-detail="showTaskDetail" @show-all-task="toShowAll" :dataList="applyList" :showAll = "true"></apply-show>
    <div class="task-container">
      <tab :line-width="1" custom-bar-width="60px" active-color="#10b4f7" class="s-tab-container" defaultColor="#aaa">
        <tab-item selected>
          <router-link to="/work/todoList">待办任务</router-link>
        </tab-item>
        <tab-item>
          <router-link to="/work/finishedList">已完成</router-link>
        </tab-item>
      </tab>
      <div class="list-container">
        <router-view :dataList = 'dataList' @to-detail="toDetail"></router-view>
        <div v-show="showModel" class="choose-organize" @click="toggleModelShow" >
          <div class="status-item" @click="toOrganize(item)" v-for="(item, index) in organizeList" :key="index">{{item.value}}</div>
        </div>
        <div class="bg-color" v-if="showModel" @click="toggleModelShow"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Tab, TabItem } from 'vux'
  import applyShow from './applyShow.vue'
  import {eventBus} from '../../eventBus'
  export default {
    name: 'work',
    components: {
      Tab,
      TabItem,
      applyShow
    },
    data () {
      return {
        height: 0,
        showModel: false,
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
        organizeList: [{key: '0', value: '组织01'}, {key: '1', value: '组织02'}, {key: '2', value: '组织03'}, {key: '3', value: '个人'}]
      }
    },
    methods: {
      showTaskDetail (item) {
        console.log(item)
        this.$router.push({
          name: 'taskDetail'
        })
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
      toggleModelShow () {
        this.showModel = !this.showModel
      },
      toOrganize (item) {
        if (item.value === '个人') {
          this.$router.push({
            name: 'personalApply'
          })
        } else {
          this.$router.push({
            name: 'orgnizeApply'
          })
        }
      },
      toShowAll () {
        this.$router.push({
          name: 'personalApply'
        })
      }
    },
    mounted () {
      eventBus.$on('toggle-list-show', () => {
        this.toggleModelShow()
      })
      this.height = document.body.offsetHeight - 99
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .work-wrapper{
    overflow-y: auto;
    .task-container {
      margin-top: 40px;
      .s-tab-container{
      }
      .list-container{
        .choose-organize{
          z-index: 3;
          position: absolute;
          top: 45px;
          background-color: #fff;
          text-align: center;
          font-size: 16px;
          width: 100%;
          .status-item{
            height: 45px;
            line-height: 45px;
          }
        }
        .bg-color{
          width:100%;
          height: 100%;
          background-color: rgba(7,17,27,0.7);
          position: absolute;
          top: 45px;
          right: 0px;
          z-index:2;
        }
      }
    }
  }
</style>
