<template>
  <div class="purchase-success-wrapper">
    <x-header title="应用购买"></x-header>
    <div class="content-container">
      <span class="title">恭喜你！支付成功</span>
      <span class="name">应用价格:<span class="price">￥6666</span></span>
      <apply-item :dataList="list" :isShowBtn="false"></apply-item>
      <span class="description">任务简介任务简介任务简介任务简介任务简介任务简介任务简介任务简介任务简介任务简介任务</span>
    </div>
  </div>
</template>
<script>
  import {XHeader} from 'vux'
  import applyItem from './applyItem.vue'
  export default {
    name: 'purchaseSuccess',
    data () {
      return {
        list: [
          {
            icon: require('../../assets/news/userImg.jpg'),
            title: '任务',
            version: '2.11',
            money: 1,
            rater: 1
          }
        ]
      }
    },
    components: {
      XHeader,
      applyItem
    }
  }
</script>
<style scoped lang="less">
  .purchase-success-wrapper{
    height: 100%;
    overflow: hidden;
    .content-container{
      .title{
        color: #0099ff;
        display: block;
        width: 200px;
        margin: 40px auto;
        font-size: 20px;
      }
      .name{
        width: 200px;
        margin: 0px auto 30px auto;
        display: block;
        font-size: 14px;
        .price{
          color: #f00;
          font-size: 18px;
        }
      }
      .description{
        width: 355px;
        display: inline-block;
        padding: 10px;
      }
    }
  }
</style>
