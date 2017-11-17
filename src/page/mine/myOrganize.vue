<template>
  <div class="my-organize-wrapper">
    <x-header title="我的组织" class="header">
      <span slot="overwrite-left" @click="goBack">＜返回</span>
    </x-header>
    <div class="my-organize-container">
      <ul>
        <li @click="showOrganizeDetail(item)" class="organize-item vux-1px-b" v-for="(item, index) in organizeList" :key="index">
          <img :src="item.logo ? item.logo : defaultLogo" class="logo" alt="">
          <span class="title">{{item.organizeName}}</span>
          <button class="btn vux-1px" @click="invitate">邀请成员</button>
        </li>
      </ul>
      <button class="create-btn" @click="createOrganize">创建组织</button>
    </div>
  </div>
</template>
<script>
  import {XHeader} from 'vux'
  import {mapActions} from 'vuex'
  export default {
    name: 'myOrganize',
    components: {
      XHeader
    },
    data () {
      return {
        organizeList: [],
        defaultLogo: require('../../assets/default_organize_logo.png')
      }
    },
    methods: {
      ...mapActions([
        'getMyInfoAction'
      ]),
      invitate (e) {
        e.cancelBubble = true
        this.$router.push({
          path: 'SearchBuddy/inviteFriend'
        })
      },
      createOrganize () {
        this.$router.push({
          name: 'createOrganize'
        })
      },
      showOrganizeDetail (item) {
        this.$router.push({
          name: 'organizeInfo',
          params: {
            id: item.id
          }
        })
      },
      goBack () {
        this.$router.push({
          path: '/news'
        })
      }
    },
    async created () {
      let res = await this.getMyInfoAction()
      this.organizeList = res.organizeId.concat([{organizeName: '个人'}])
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
        border-bottom: 1px solid #eee;
        .logo{
          width: 40px;
          height: 40px;
          border-radius: 50%;
          vertical-align: middle;
          margin-right: 10px;
        }
        .btn{
          width: 78px;
          height: 26px;
          line-height: 26px;
          background-color: #fff;
          border: none;
          border-radius: 4px;
          color: #0099ff;
          position: absolute;
          top: 20px;
          right: 15px;
          border: 1px solid #0099ff;
          &::before{
            border-color: #0099ff;
            border-radius: 4px;
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
        font-size: 17px;
      }
    }
  }
</style>
