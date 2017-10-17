<template>
  <div class="news-list-wrapper">
    <x-header title="回话消息"></x-header>
    <div class="news-list-container">
      <div class="item-container vux-1px-b vux-1px-l" v-for="(item, index) in newsList" :key="index" @click="tonewsPage(item)">
        <img class="avatar" :src="item.avatar">
        <Badge class="badge" v-if="item.num === 0"></Badge>
        <Badge class="badge" v-else :text="item.num > 99 ? '...' : item.num"></Badge>
        <div class="detail-container">
          <span class="title">{{ item.userName }}</span>
          <span class="detail" v-if="item.noDisturb">【{{item.num}}条】<span v-show="item.isGroup">{{item.lastName}}：</span>{{ item.detail }}</span>
          <span class="detail" v-else>{{ item.detail }}</span>
        </div>
        <span class="show-time"><span v-show="item.isGroup">{{item.lastName}}：</span>{{ item.time }}</span>
        <!-- <img v-show="item.noDisturb" src="../../assets/no_disturb.png" class="no-disturb"> -->
      </div>
    </div>
  </div>
</template>
<script>
  import {XHeader, Badge} from 'vux'
  export default {
    name: 'newsList',
    components: {
      XHeader,
      Badge
    },
    data () {
      return {
        newsList: [
          {
            avatar: require('../../assets/news/userImg.jpg'),
            num: 0,
            userName: '陈州',
            isGroup: false,
            detail: '记得今天吧文件发送给我',
            noDisturb: false,
            time: '2017-12-22'
          },
          {
            avatar: require('../../assets/news/userImg.jpg'),
            num: 55,
            userName: '陈州',
            isGroup: false,
            detail: '记得今天吧文件发送给我',
            noDisturb: false,
            time: '2017-12-22'
          },
          {
            avatar: require('../../assets/news/userImg.jpg'),
            num: 999,
            userName: 'etag讨论组etag讨论组etag讨论组',
            isGroup: true,
            lastName: '张三',
            detail: '记得今天吧文件发送给我记得今天吧文件发送给我记得今天吧文件发送给我',
            noDisturb: true,
            time: '15:20'
          },
          {
            avatar: require('../../assets/news/userImg.jpg'),
            num: 999,
            userName: '陈州记得今天吧文件发送给我讨论组',
            isGroup: false,
            detail: '记得今天吧文件发送给我记得今天吧文件发送给我记得今天吧文件发送给我',
            noDisturb: false,
            time: '2017-12-22'
          }
        ]
      }
    },
    methods: {
      tonewsPage (val) {
        this.$router.push({
          name: 'newsPage',
          params: {
            username: val.userName
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
        margin-left: 5px;
        padding: 5px 5px 5px 10px;
        background-color: #fff;
        border-left: 1px solid #eee;
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
