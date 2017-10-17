<template>
  <div class="task-item-wrapper">
    <ul>
      <li class="task-item-container" v-for="(item, index) in taskList" :key="index">
        <div class="header">
          <img :src="item.avatar" class="avatar">
          <div class="header-title">
            <span class="title">{{item.creator}}发出的</span>
            <span class="time">{{item.modifyTime}}</span>
          </div>
        </div>
        <div class="content-container">
          完成金基范撒酒疯迪斯科了较高额卡机发放娇娃诶我燃烧完成金基范撒酒疯迪斯科了较高额卡机发放娇娃诶我燃烧
        </div>
        <div class="start-time">开始时间：{{item.startTime}}</div>
        <div class="end-time">开始时间：{{item.endTime}}</div>
        <span class="about" @click="showAboutTask">任务相关者》</span>
        <span class="status" :style="{color: item.status === 0 ? '#ffccff':'#eee'}">{{item.status === 0 ? '正在进行': '已完成'}}</span>
        <div class="recover">
          <img src="../../assets/recover.png" class="avatar">
          <span class="recover-title">{{item.recoverLength}}条回复</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default{
    name: 'taskItem',
    data () {
      return {
        taskList: [
          {
            avatar: require('../../assets/news/userImg.jpg'),
            creator: '我', // 这里需要写判断
            modifyTime: '13:00',
            startTime: '2017-7-26 18： 00',
            endTime: '2017-7-26 18： 00',
            status: 0,  // 需要判断
            recoverLength: '3'
          },
          {
            avatar: require('../../assets/news/userImg.jpg'),
            creator: '我', // 这里需要写判断
            modifyTime: '13:00',
            startTime: '2017-7-26 18： 00',
            endTime: '2017-7-26 18： 00',
            status: 0,  // 需要判断
            recoverLength: '3'
          },
          {
            avatar: require('../../assets/news/userImg.jpg'),
            creator: '我', // 这里需要写判断
            modifyTime: '13:00',
            startTime: '2017-7-26 18： 00',
            endTime: '2017-7-26 18： 00',
            status: 1,  // 需要判断
            recoverLength: '3'
          },
          {
            avatar: require('../../assets/news/userImg.jpg'),
            creator: '我', // 这里需要写判断
            modifyTime: '13:00',
            startTime: '2017-7-26 18： 00',
            endTime: '2017-7-26 18： 00',
            status: 0,  // 需要判断
            recoverLength: '3'
          }
        ]
      }
    },
    methods: {
      showAboutTask () {
        this.$router.push({
          name: 'aboutTask'
        })
      }
    }
  }
</script>
<style scoped lang="less">
  .task-item-wrapper {
    height: 100%;
    overflow-y: auto;
    .task-item-container{
      padding: 20px;
      background-color: #fff;
      width: 316px;
      margin: 10px auto 0 auto;
      position: relative;
      .header{
        .avatar{
          width: 40px;
          height: 40px;
        }
        .header-title{
          display: inline-block;
          margin-left: 15px;
          .title{
            display: block;
            font-size: 14px;
            font-weight: 600;
          }
          .time{
            display: block;
            color: #aaa;
          }
        }
      }
      .content-container{
        width: 100%;
        margin: 15px auto 0px auto;
      }
      .start-time{
        margin-top: 10px;
      }
      .end-time{
        margin-top: 10px;
      }
      .about{
        display: inline-block;
        margin-top: 10px;
        color: #0099ff;
      }
      .status{
        position: absolute;
        top: 40px;
        right: 20px;
        color: #ffccff;
      }
      .recover{
        position: absolute;
        bottom:10px;
        right: 20px;
        .avatar{}
        .recover-title{
          vertical-align: top;
          color: #999;
        }
      }
    }
  }
</style>
