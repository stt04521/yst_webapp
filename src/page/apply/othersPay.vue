<template>
  <div class="other-pay-wrapper">
    <x-header title="应用购买"></x-header>
    <div class="other-pay-container">
      <div class="detail">
        <span class="item">来自： 元数通</span>
        <span class="item">商品： 元应用-任务v1.21</span>
        <span class="item">应付总价： 6666元</span>
        <span class="item">代付申请人： 李*友（1582****428）</span>
      </div>
      <div class="pay-way">
        <span class="title">选择联系人代付</span>
        <div class="content">
          <input class="input-style" type="text" v-model="friendInfo" placeholder="请输入">
          <button class="send-btn" @click="sendToFriend">发送</button>
        </div>
        <span class="choose-friend" @click="chooseFriend">选择联系人</span>
      </div>
      <div>
        <span class="title">分享链接代付</span>
        <button class="send-btn" @click="shareToFriend">点击分享</button>
      </div>
      <div class="pay-way">
        <span class="title">发送邮箱代付</span>
        <div  class="content">
          <input class="input-style" type="text" placeholder="请输入" v-model="friendEmail">
          <button class="send-btn" @click="sendToEmail">发送</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {XHeader} from 'vux'
  export default {
    name: 'othersPay',
    components: {
      XHeader
    },
    data () {
      return {
        friendInfo: '',
        friendEmail: ''
      }
    },
    methods: {
      sendToFriend () {
        console.log(this.friendInfo)
      },
      shareToFriend () {
        console.log('share link to friend')
      },
      sendToEmail () {
        console.log(this.friendEmail)
      },
      chooseFriend () {
        console.log('choose friend')
      }
    }
  }
</script>
<style scoped lang="less">
  .title{
    display: block;
  }
  .send-btn{
    border: none;
    background-color: #0099ff;
    color: #fff;
    padding: 7px 10px;
    vertical-align: middle;
    border-radius: 4px;
  }
  .other-pay-wrapper{
    height: 100%;
    overflow: hidden;
    .other-pay-container{
      padding: 10px 20px;
      font-size: 16px;
      .detail{
        .item{
          display: block;
          margin-bottom: 5px;
        }
      }
      .pay-way{
        margin-top: 40px;
        margin-bottom: 40px;
        .content {
          padding-left: 0px;
          .input-style{
            width: 260px;
            height: 28px;
            line-height: 28px;
          }
        }
        .choose-friend{
          font-size: 12px;
          color: #0099ff;
        }
      }
    }
  }
</style>
