<template>
  <div class="news-list-wrapper">
    <x-header title="会话消息"></x-header>
    <div class="news-list-container">
      <div class="item-container vux-1px-b vux-1px-l" v-for="(item, index) in newsList" :key="index" @click="tonewsPage(item)">
        <img class="avatar" :src="baseurl + item.speakerPortrait" :onerror="errorImg">
        <Badge class="badge" v-if="item.num !== 0"  :text="item.num > 99 ? '...' : item.num"></Badge>
        <div class="detail-container">
          <span class="title">{{ item.isGroupChat == 0? item.lastName : item.groupName}}</span>
          <span class="detail" v-if="item.isGroupChat == 1"><span>{{item.lastName}}：</span>{{ item.content }}</span>
          <span class="detail" v-else>{{ item.content }}</span>
        </div>
        <span class="show-time"><span v-show="item.isGroup">{{item.lastName}}：</span>{{ new Date(item.createdAt).toLocaleString() }}</span>
        <!-- <img v-show="item.noDisturb" src="../../assets/no_disturb.png" class="no-disturb"> -->
      </div>
    </div>
  </div>
</template>
<script>
  import {XHeader, Badge} from 'vux'
  import { mapActions } from 'vuex'
  import { notify } from '@/utils'
  export default {
    name: 'newsList',
    components: {
      XHeader,
      Badge
    },
    data () {
      return {
        baseurl: 'http://192.168.0.12:7000',
        newsList: [],
        errorImg: 'this.src="' + require('@/assets/DefaultAvatar.svg') + '"'
      }
    },
    created () {
      this.getMsgList()
      notify.on('upData', this.getMsgList)
    },
    beforeDestroy () {
      notify.removeListener('upData', this.getMsgList)
    },
    methods: {
      ...mapActions([
        'msgList'
      ]),
      getMsgList () {
        let self = this
        self.msgList().then(res => {
          console.log(res)
          self.newsList = res
        })
      },
      tonewsPage (item) {
        this.$router.push({
          name: 'newsPage',
          params: {
            username: item.isGroupChat === 0 ? item.lastName : item.groupName
          },
          query: {
            id: item.isGroupChat === 0 ? item.audienceId : item.audienceId,
            type: item.isGroupChat === 0 ? 0 : 1
          }
        })
      }
    }
  }
</script>
<style scoped lang="less">
  .news-list-wrapper{
    height: 100%;
    overflow: hidden;
    .news-list-container{
      height: 100%;
      overflow-y: auto;
      .item-container{
        height: 50px;
        line-height: 50px;
        position: relative;
        padding: 5px 5px 5px 10px;
        background-color: #fff;
        border-bottom: 1px solid #eee;
        .avatar{
          width: 40px;
          height: 40px;
          border-radius: 50%;
          vertical-align: middle;
        }
        .badge {
          position: absolute;
          top: 5px;
          left: 38px;
        }
        .detail-container{
          display: inline-block;
          vertical-align: middle;
          margin-left: 10px;
          .title{
            width: 100px;
            height: 20px;
            line-height: 20px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            display: block;
          }
          .detail{
            width: 250px;
            height: 20px;
            line-height: 20px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            display: block;
            margin-top: 3px;
          }
        }
        .show-time{
          height: 20px;
          line-height: 20px;
          position: absolute;
          top: 10px;
          right: 10px;
        }
        .no-disturb{
          width: 10px;
          height: 10px;
          position: absolute;
          bottom: 10px;
          right: 10px;
        }
      }
    }
  }
</style>
