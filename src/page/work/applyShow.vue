<template>
  <div class="apply-container" v-show="dataList.length">
    <div class="content-container" @click="showTaskDetail(item)" v-for="(item, index) in dataList" :key="index">
      <img class="apply-img" :src='item.image' >
      <span class="apply-title">{{ item.title }}</span>
    </div>
    <div class="show-all-btn" v-show="showAll" @click="showAllTask">全部</div>
  </div>
</template>
<script>
  export default {
    name: 'applyShow',
    props: {
      dataList: {
        type: Array,
        default: []
      },
      showAll: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      showTaskDetail (item) {
        this.$emit('show-task-detail', item)
      },
      showAllTask () {
        this.$emit('show-all-task')
      }
    }
  }
</script>
<style scoped lang="less">
  .apply-container {
    width: 336px;
    height: 222px;
    margin: 10px auto 30px auto;
    background-color: #fff;
    padding: 20px 20px 0px 0px;
    position: relative;
    .content-container{
      width: 50px;
      height: 74px;
      margin-left: 30px;
      margin-bottom: 40px;
      text-align: center;
      display: inline-block;
      position: relative;
      .apply-img{
        width: 50px;
        height: 50px;
      }
      .apply-title{
        height: 20px;
        line-height: 20px;
      }
    }
    .show-all-btn {
      width: 81px;
      height: 33px;
      line-height: 33px;
      background-color: #fff;
      text-align: center;
      border-radius: 8px;
      position: absolute;
      bottom: -30px;
      right: 147px;
    }
  }
</style>
