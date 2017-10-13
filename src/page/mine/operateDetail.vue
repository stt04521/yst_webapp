<template>
  <div class="operate-detail-wrapper">
    <x-header :title="title"></x-header>
    <div class="item-container">
      <span class="title">简介</span>
      <span class="detail">
        群聊是一个我们的特色功能，支持好友间的群聊，同时支持以办公为目的的组织群聊，可以进行跨组织建立群聊
      </span>
    </div>
    <div class="item-container">
      <span class="title">创建群聊</span>
      <span class="detail">
        第一步，选择群聊类型，群聊类型包括好友与组织，如果选择组织则需要选择相应的组织;
      </span>
      <img src="../../assets/operate-detail.png" class='operate-img'>
      <span class="detail">
        第二步，为群聊添加群成员；
      </span>
      <span class="detail">
        第二步，为群聊去一个俏皮的名称；
      </span>
      <span class="detail">
        通过以上三步轻松创建群聊
      </span>
    </div>
    <div class="item-container">
      <span class="title">添加群聊成员</span>
      <span class="detail">
        这里是添加群聊成员的方法，这里是添加群聊新恒源的方法
      </span>
    </div>
  </div>
</template>
<script>
  import {XHeader} from 'vux'
  export default {
    name: 'operateDetail',
    components: {
      XHeader
    },
    data () {
      return {
        title: ''
      }
    },
    created () {
      this.title = this.$route.params.title
    }
  }
</script>
<style scoped lang="less">
  .operate-detail-wrapper{
    height: 100%;
    overflow: hidden;
    background-color: #fff;
    .item-container{
      overflow-y: auto;
      padding: 10px;
      .title{
        display: inline-block;
        font-size: 14px;
        font-weight: 700;
        padding-left: 10px;
      }
      .operate-img{
        width: 300px;
        height: 160px;
        margin-left: 25px;
      }
      .detail{
        display: inline-block;
        padding-left: 25px;
      }
    }
  }
</style>
