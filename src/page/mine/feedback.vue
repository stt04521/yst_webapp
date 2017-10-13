<template>
  <div class="feedback-wrapper">
    <x-header title="帮助与反馈"></x-header>
    <div class="item-container" @click="showBaseFunction">
      <img class="item-icon" src="../../assets/news/userImg.jpg" alt="">
      <div class="item-detail">
        <span class="title">基本功能</span>
        <span class="detail">教你如何使用元数通</span>
      </div>
    </div>
    <div class="item-container" @click="toFeedbackPage">
      <img class="item-icon" src="../../assets/news/userImg.jpg" alt="">
      <div class="item-detail">
        <span class="title">意见反馈</span>
        <span class="detail">随时接受您的意见反馈</span>
      </div>
    </div>
    <div class="item-container" @click="toConcatUs">
      <img class="item-icon" src="../../assets/news/userImg.jpg" alt="">
      <div class="item-detail">
        <span class="title">联系我们</span>
        <span class="detail">您还可以直接联系我们</span>
      </div>
    </div>
  </div>
</template>
<script>
  import {XHeader} from 'vux'
  export default {
    name: 'feedback',
    components: {
      XHeader
    },
    methods: {
      showBaseFunction () {
        this.$router.push({name: 'baseFunction'})
      },
      toFeedbackPage () {
        this.$router.push({name: 'feedbackPage'})
      },
      toConcatUs () {
        this.$router.push({name: 'concatUs'})
      }
    }
  }
</script>
<style scoped lang="less">
  .feedback-wrapper{
    height: 100%;
    overflow: hidden;
    .item-container{
      width: 355px;
      height: 50px;
      line-height: 50px;
      margin: 10px auto 0px auto;
      padding: 5px;
      background-color: #fff;
      border-radius: 5px;
      .item-icon{
        width: 35px;
        height: 35px;
        border-radius: 5px;
        vertical-align: middle;
        margin-right: 5px;
      }
      .item-detail{
        vertical-align: middle;
        display: inline-block;
        .title{
          display: block;
          width: 164px;
          height: 21px;
          line-height: 21px;
        }
        .detail{
          display: block;
          width: 164px;
          height: 18px;
          line-height: 18px;
        }
      }

    }
  }
</style>
