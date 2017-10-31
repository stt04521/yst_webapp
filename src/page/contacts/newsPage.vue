<template>
  <div class="news-page-wrapper">
    <x-header :title="title"></x-header>
    <div class="news-page-container">
      <div class="news-page-item" v-for="(item, index) in newsList.list" :key="index" :class="item.isMe ? 'stay-right' : ''">
        <div v-show="item.time" class="time">{{ item.time }}</div>
        <img :src="item.avatar" v-show="!item.isMe" class="avatar">
        <div class="news-container">
          <span class="triangle"></span>
          <span class="news-detail">{{ item.newsDetail }}</span>
        </div>
        <img v-show="item.isMe" :src="item.avatar" class="avatar">
      </div>
    </div>
    <div class="send-msg-container">
      <input type="text" class="input-msg" placeholder="请输入消息" v-model="msg">
      <x-button  class="send-btn" mini @click.native="sendMsg">发送</x-button>
    </div>
  </div>
</template>
<script>
  import {XHeader, Group, XInput, XButton} from 'vux'
  import { mapActions } from 'vuex'
  export default {
    name: 'newsPage',
    components: {
      XHeader,
      XInput,
      Group,
      XButton
    },
    data () {
      return {
        title: '',
        msg: '',
        newsList: {
          friendNick: '就叫李明友吧',
          list: [
            {
              isMe: false,
              avatar: require('../../assets/news/userImg.jpg'),
              newsDetail: '你早上说的问题我没听明白',
              time: '15:20'
            },
            {
              isMe: true,
              avatar: require('../../assets/news/userImg.jpg'),
              newsDetail: '没听清楚还是没听明白',
              time: '15:30'
            },
            {
              isMe: false,
              avatar: require('../../assets/news/userImg.jpg'),
              newsDetail: '没听清楚'
            },
            {
              isMe: true,
              avatar: require('../../assets/news/userImg.jpg'),
              newsDetail: '活该，该你，谁让你不好好听的'
            },
            {
              isMe: false,
              avatar: require('../../assets/news/userImg.jpg'),
              newsDetail: '谁让你说那么快的，谁让你说那么快的,谁让你说那么快的,是谁，是谁，你说啊',
              time: '16:10'
            },
            {
              isMe: true,
              avatar: require('../../assets/news/userImg.jpg'),
              newsDetail: '再说，再说就把你删掉',
              time: '15:50'
            },
            {
              isMe: true,
              avatar: require('../../assets/news/userImg.jpg'),
              newsDetail: '再说，再说就把你删掉'
            },
            {
              isMe: true,
              avatar: require('../../assets/news/userImg.jpg'),
              newsDetail: '再说，再说就把你删掉'
            }
          ]
        }
      }
    },
    created () {
      this.title = this.$route.params.username
    },
    methods: {
      ...mapActions([
        'sendIm'
      ]),
      sendMsg () {
        console.log(this.msg)
        let self = this
        this.sendIm({id: self.$route.query.id, msg: self.msg})
      }
    }
  }
</script>
<style scoped lang="less">
  .news-page-wrapper{
    height: 100%;
    overflow: hidden;
    position: relative;
    .news-page-container{
      height: 568px;
      overflow-y: auto;
      .time{
        width: 40px;
        height: 20px;
        line-height: 20px;
        margin: 0 auto;
      }
      .stay-right{
        text-align: right;
      }
      .news-page-item{
        padding: 10px;
        .avatar{
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin-right: 5px;
          margin-left: 5px;
        }
        .news-container{
          display: inline-block;
          vertical-align: top;
          padding-top: 10px;
          .triangle{
            /*width: 0;*/
            /*height: 0;*/
            /*border-top: 9px solid transparent;*/
            /*border-bottom: 9px solid transparent;*/
            /*border-right: 10px solid #436eee;*/
          }
          .news-detail{
            display: inline-block;
            max-width: 240px;
            padding: 4px;
            background-color: #fff;
            text-align: left;
          }
          .mine-msg{
            text-align: right;
          }
        }

      }
    }

    .send-msg-container{
      height: 40px;
      line-height: 40px;
      width: 100%;
      position: absolute;
      bottom: 0px;
      background-color: #fff;
      .input-msg{
        padding: 5px;
        border: 1px solid #ccc;
        width: 290px;
        display: inline-block;
        margin-left: 10px;
      }
      .send-btn{
        display: inline-block;
        border: none;
        background-color: #0099ff;
        padding: 3px 7px 3px 7px;
        color: #fff;
        border-radius: 4px;
        margin-left: 5px;
      }
    }
  }
</style>
