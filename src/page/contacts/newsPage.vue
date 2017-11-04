<template>
  <div class="news-page-wrapper">
    <x-header :title="title"></x-header>
    <div class="news-page-container">
      <div class="news-page-item" v-for="(item, index) in newsList" :key="index" :class="item.speakerId !=$route.query.id ? 'stay-right' : ''">
        <div v-show="item.createdAt" class="time">{{ new Date(item.createdAt).toLocaleString() }}</div>
        <img :src="item.speakerPortrait" v-if="item.speakerId == $route.query.id" class="avatar" :onerror="errorImg">
        <div class="news-container">
          <span class="triangle"></span>
          <span class="news-detail">{{ item.content }}</span>
        </div>
        <img v-if="item.speakerId !=$route.query.id " :src="item.speakerPortrait" class="avatar" :onerror="errorImg">
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
  import { notify } from '@/utils'
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
        errorImg: 'this.src="' + require('@/assets/DefaultAvatar.svg') + '"',
        newsList: []
      }
    },
    created () {
      let self = this
      this.title = this.$route.params.username
      this.initMsgBox()
      notify.on('upData', self.initMsgBox)
    },
    beforeDestroy () {
      notify.removeListener('upData', this.initMsgBox)
    },
    methods: {
      ...mapActions([
        'sendIm',
        'msgBox',
        'sendGroupIm'
      ]),
      initMsgBox  (id, isGroup) {
        let self = this
        self.msgBox({id: self.$route.query.id, isGroupChat: self.$route.query.type}).then(data => {
          self.newsList = data
        })
      },
      sendMsg () {
        let self = this
        let send = self.$route.query.type === 0 ? self.sendIm : self.sendGroupIm
        send({id: self.$route.query.id, msg: self.msg})
      }
    },
    watch: {
      newsList () {
        let self = this
        self.$nextTick(() => {
          let container = self.$el.querySelector('.news-page-container')
          container.scrollTop = container.scrollHeight
        })
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
        height: 20px;
        line-height: 20px;
        margin: 0 auto;
        text-align: center;
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
