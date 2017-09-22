<template>
  <div class="todo-list-wrapper" v-show="dataList.length">
    <div class="list-item-container" :class="index !== dataList.length-1 ? 'vux-1px-b' : ''" v-for="(item,index) in dataList" :key="index">
      <img class="list-img" :src="item.image">
      <span class="list-creator">任务 {{item.creator}}发出</span>
      <div class="list-content">{{item.content}}</div>
      <span class="list-start">开始时间：{{item.start}}</span>
      <span class="list-modify">{{item.modify}}</span>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'todoList',
    props: {
      dataList: {
        type: Array,
        default: []
      }
    }
  }
</script>
<style scoped lang="less">
  .todo-list-wrapper{
    height: 100%;
    .list-item-container{
      height: 100px;
      position: relative;
      padding-left: 70px;
      background-color: #fff;
      .list-img{
        width: 20px;
        height: 20px;
        position: absolute;
        left: 25px;
        top: 40px;
      }
      .list-creator {
        display: inline-block;
        margin-top: 10px;
        font-size: 14px;
        font-weight: 700;
      }
      .list-content{
        width: 200px;
        margin-top: 10px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .list-start {
        display: inline-block;
        margin-top: 10px;
      }
      .list-modify {
        position: absolute;
        top: 10px;
        right: 20px;
        color: #aaa;
      }
    }
  }
</style>
