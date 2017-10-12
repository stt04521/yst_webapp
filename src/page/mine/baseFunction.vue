<template>
  <div class="base-function-wrapper">
    <x-header title="基本功能"></x-header>
    <div class="base-container" v-for="(item, index) in list" :key="index" @click="toOperateDetail">
      <div class="item-container vux-1px-b">
        <img class="item-icon" :src="item.icon" alt="">
        <span>{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>
<script>
  import {XHeader} from 'vux'
  export default {
    name: 'baseFunction',
    components: {
      XHeader
    },
    data () {
      return {
        list: [
          {
            icon: require('../../assets/news/userImg.jpg'),
            title: '群聊'
          },
          {
            icon: require('../../assets/news/userImg.jpg'),
            title: '群聊'
          },
          {
            icon: require('../../assets/news/userImg.jpg'),
            title: '群聊'
          },
          {
            icon: require('../../assets/news/userImg.jpg'),
            title: '群聊'
          },
          {
            icon: require('../../assets/news/userImg.jpg'),
            title: '群聊'
          },
          {
            icon: require('../../assets/news/userImg.jpg'),
            title: '群聊'
          }
        ]
      }
    },
    methods: {
      toOperateDetail () {
        this.$router.push({
          name: 'operateDetail',
          params: {
            title: '群聊'
          }
        })
      }
    }
  }
</script>
<style scoped lang="less">
  .base-function-wrapper{
    height: 100%;
    overflow: hidden;
    .base-container{
      .item-container{
        height: 45px;
        line-height: 45px;
        padding-left: 10px;
        background-color: #fff;
        border-bottom: 1px solid #eee;
        .item-icon{
          height: 18px;
          width: 18px;
          vertical-align: middle;
        }
      }
    }
  }
</style>
