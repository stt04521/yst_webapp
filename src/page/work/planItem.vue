<template>
  <div class="plan-item-wrapper">
    <div class="plan-item-container" v-for="(item, index) in planList" :key="index">
      <span class="plan-title">{{ item.title }}</span>
      <span class="plan-status">{{ item.status }}</span>
      <p class="content-container">
        {{ item.content }}
      </p>
      <span class="time">开始时间： {{ item.startTime }}</span>
      <span class="time">截止时间： {{ item.endTime }}</span>
      <span class="task-title">来自任务：<span class="title">{{ item.taskTitle }}</span></span>
      <span class="create-time">{{ item.createTime }}</span>
      <div class="recover">
        <img src="../../assets/recover.png" class="recover-img" alt="回复">
        <span class="recover-title">{{item.recoverLength}}条回复</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'planItem',
    props: {
      planList: {
        type: Array,
        default: []
      }
    }
  }
</script>
<style scoped lang="less">
  .plan-item-wrapper{
    .plan-item-container{
      height: 100%;
      width: 326px;
      margin: 10px auto 0px auto;
      background-color: #fff;
      padding: 10px 10px 10px 20px;
      position: relative;
      .plan-title {
        font-size: 15px;
        font-weight: 700;
        display: inline-block;
      }
      .plan-status{
        font-size: 12px;
        position: absolute;
        top: 10px;
        right:5px;
        color: #fdf;
      }
      .content-container{
        width: 326px;
        margin: 10px auto 0px auto;
        height: 40px;

      }
      .time {
        display: inline-block;
        margin-top: 5px;
      }
      .task-title{
        .time;
        .title{
          display: inline-block;
          width: 230px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          vertical-align: middle;
        }
      }
      .create-time{
        display: inline-block;
        margin-top: 5px;
      }
      .recover{
        display: inline-block;
        margin-left: 10px;
        .recover-img{
          vertical-align: middle;
        }
        .recover-title{

        }
      }
    }

  }
</style>
