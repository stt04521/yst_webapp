<template>
  <div class="about-task-wrapper">
    <x-header title="任务相关人员" class="header">
      <span slot="right" @click="addMember">+添加成员</span>
    </x-header>
    <tab active-color="#0099ff" class="tab-container">
      <tab-item selected class="tab-item">执行</tab-item>
      <tab-item class="tab-item">审核</tab-item>
      <tab-item class="tab-item">参与</tab-item>
      <tab-item class="tab-item">责任人</tab-item>
    </tab>
    <div class="content-container">
      <ul>
        <li class="item-container" v-for="(item, index) in dataList" :key="index">
          <img :src="item.avatar" alt="" class="avatar">
          <span class="name">{{ item.name }}</span>
          <img src="../../assets/more.png" @click="showPop" class="right-operate" v-show="showMore" alt=""/>
          <span class="right-operate delete" v-show="showDelete">删除</span>
        </li>
      </ul>
      <button class="show-all" @click="showAll">查看全部计划</button>

    </div>
  </div>
</template>
<script>
  import {XHeader, Tab, TabItem, Popover} from 'vux'
  export default {
    name: 'aboutTask',
    data () {
      return {
        showDelete: false,
        showMore: true,
        showPopup: false,
        dataList: [
          {
            avatar: require('../../assets/news/userImg.jpg'),
            name: '李明友'
          },
          {
            avatar: require('../../assets/news/userImg.jpg'),
            name: '123'
          },
          {
            avatar: require('../../assets/news/userImg.jpg'),
            name: '张茜'
          }
        ]
      }
    },
    components: {
      XHeader,
      Tab,
      TabItem,
      Popover
    },
    methods: {
      addMember () {
        console.log('add member')
        // 带上必要参数，跳转的页面是一个公共组件
        this.$router.push({path: '/chooseMember'})
      },
      showAll () {
        console.log('show all')
      },
      showPop () {
        console.log('show showPopup')
        this.showPopup = true
      }
    }
  }
</script>
<style scoped lang="less">
  .about-task-wrapper{
    height: 100%;
    overflow: hidden;
    .header span{
      color: #fff;
      font-size: 16px;
    }
    .tab-container{
      height: 41px;
      line-height: 41px;
      .tab-item{
        height: inherit;
        line-height: inherit;
      }
    }
    .content-container{
      height: 100% ;
      .item-container{
        height: 100%;
        width: 336px;
        padding: 10px;
        margin: 10px auto 0 auto;
        background-color: #fff;
        font-size: 14px;
        position: relative;
        .avatar{
          width: 40px;
          height: 40px;
          vertical-align: middle;
          margin-right: 20px;
        }
        .name{

        }
        .right-operate{
          position: absolute;
          top: 15px;
          right: 20px;
        }
        .delete{
          color: #f00;
        }
      }
      .show-all {
        width: 135px;
        height: 44px;
        line-height: 44px;
        text-align: center;
        border: none;
        border-radius: 4px;
        color: #fff;
        font-size: 14px;
        background-color: #0099ff;
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
</style>
