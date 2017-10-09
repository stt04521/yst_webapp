<template>
  <div class="my-organize-wrapper">
    <x-header title="我的组织" slot="overwrite-left" class="header">
    </x-header>
    <div class="my-organize-container">
      <ul>
        <li class="organize-item vux-1px-b" v-for="(item, index) in organizeList" :key="index">
          <img :src="item.logo" class="logo" alt="">
          <span class="title">{{item.name}}</span>
          <button class="btn vux-1px" @click="invitate">邀请成员</button>
        </li>
      </ul>
      <button class="create-btn" @click="createOrganize">创建组织</button>
    </div>
  </div>
</template>
<script>
  import {XHeader} from 'vux'
  export default {
    name: 'myOrganize',
    components: {
      XHeader
    },
    data () {
      return {
        organizeList: [
          {
            logo: require('../../assets/news/userImg.jpg'),
            name: '武汉黎宁游科技有限公司'
          },
          {
            logo: require('../../assets/news/userImg.jpg'),
            name: '上海美泰科技有限公司'
          },
          {
            logo: require('../../assets/news/userImg.jpg'),
            name: '武汉黎宁游科技有限公司'
          },
          {
            logo: require('../../assets/news/userImg.jpg'),
            name: '上海美泰科技有限公司'
          },
          {
            logo: require('../../assets/news/userImg.jpg'),
            name: '武汉黎宁游科技有限公司'
          },
          {
            logo: require('../../assets/news/userImg.jpg'),
            name: '上海美泰科技有限公司'
          }

        ]
      }
    },
    methods: {
      invitate () {
        console.log('邀请成员')
      },
      createOrganize () {
        console.log('create organize')
      }
    }
  }
</script>
<style scoped lang="less">
  .my-organize-wrapper{
    height: 100%;
    overflow: hidden;
    .my-organize-container{
      height: 620px;
      width: 100%;
      overflow-y: auto;
      text-align: center;
      .organize-item{
        height: 60px;
        line-height: 60px;
        padding-left: 20px;
        background-color: #fff;
        font-size: 14px;
        position: relative;
        text-align: left;
        .logo{
          width: 40px;
          height: 40px;
          border-radius: 50%;
          vertical-align: middle;
          margin-right: 10px;
        }
        .btn{
          width: 78px;
          height: 22px;
          line-height: 22px;
          background-color: #fff;
          border: 1px solid #0099ff;
          border-radius: 2px;
          color: #0099ff;
          position: absolute;
          top: 20px;
          right: 5px;
          &::before{
            border-color: #0099ff;
          }
        }
      }
      .create-btn{
        display: inline-block;
        width: 357px;
        height: 45px;
        line-height: 45px;
        margin-top: 10px;
        margin-bottom: 10px;
        border: none;
        background-color: #0099ff;
        color: #fff;
        font-size: 15px;
      }
    }
  }
</style>
