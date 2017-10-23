<template>
  <div>
    <div class="apply-item-wrapper" v-for="(item, index) in dataList" :key="index">
      <img :src="item.icon" class="item-icon">
      <div class="item-right">
        <div class="title-container">
          <span class="title">{{item.title}}</span>
          <span class="version">版本V{{item.version}}</span>
        </div>
        <div class="rater"><rater :value="item.rater" :fontSize="20"></rater></div>
      </div>
      <button v-show="isShowBtn" class="item-btn">{{item.money > 0 ? item.money + '元' : '免费升级'}}</button>
    </div>
  </div>
</template>
<script>
  import {Rater} from 'vux'
  export default {
    name: 'applyItem',
    props: {
      dataList: {
        type: Array
      },
      isShowBtn: {
        type: Boolean
      }
    },
    components: {
      Rater
    }
  }
</script>
<style scoped lang="less">
  .apply-item-wrapper{
    height: 74px;
    width: 333px;
    padding: 10px;
    background-color: #fff;
    margin: 10px auto;
    position: relative;
    .item-icon{
      height: 70px;
      width: 70px;
      border-radius: 50%;
      margin-right: 10px;
    }
    .item-right{
      display: inline-block;
      vertical-align: top;
      padding: 10px;
      .title-container{
        margin-bottom: 5px;
        .title{
          font-size: 16px;
        }
      }
    }
    .item-btn {
      width: 80px;
      text-align: center;
      height: 30px;
      line-height: 30px;
      background-color: #fff;
      border: none;
      border-radius: 4px;
      border: 1px solid #0099ff;
      color: #0099ff;
      position: absolute;
      top: 30px;
      right: 10px;
    }
  }
</style>
