<template>
  <div class="apply-detail-wrapper">
    <x-header title="应用详情"></x-header>
    <div class="apply-detail-container">
      <apply-item :dataList="list" :isShowBtn="true"></apply-item>
      <tab active-color="#0099ff" custom-bar-width="70px" :line-width="2">
        <tab-item selected @click.native="showDetail">详情</tab-item>
        <tab-item @click.native="showVersion">其他版本</tab-item>
      </tab>
      <div class="content-container">
        <div v-show="isShowDetail">
          <div class="description">
            任务简介任务简介任务简介任务简介任务简介任务简介任务简介任务简介任务简介任务简介任务
          </div>
          <span class="toOperateDetail">查看操作手册>></span>
        </div>
        <div v-show="isShowVersion">
          <apply-item :dataList="versionList" :isShowBtn="false"></apply-item>
        </div>
      </div>
    </div>
    <img @click="showShoppingCart" src="../../assets/shopping_cart.png" class="shopping">
    <img @click="showHelp" src="../../assets/help_icon.png" class="help">
  </div>
</template>
<script>
  import {XHeader, Rater, Tab, TabItem} from 'vux'
  import applyItem from './applyItem.vue'
  export default {
    name: 'applyDetail',
    components: {
      XHeader,
      Rater,
      Tab,
      TabItem,
      applyItem
    },
    data () {
      return {
        raterNum: 0,
        height: 0,
        isShowDetail: true,
        isShowVersion: false,
        list: [
          {
            icon: require('../../assets/news/userImg.jpg'),
            title: '任务',
            version: '2.11',
            money: 1,
            rater: 1
          }
        ],
        versionList: [
          {
            icon: require('../../assets/news/userImg.jpg'),
            title: '任务',
            version: '0.11',
            money: 1,
            rater: 1
          },
          {
            icon: require('../../assets/news/userImg.jpg'),
            title: '任务',
            version: '1.11',
            money: 1,
            rater: 1
          }
        ]
      }
    },
    methods: {
      showDetail () {
        this.isShowVersion = false
        this.isShowDetail = true
      },
      showVersion () {
        this.isShowDetail = false
        this.isShowVersion = true
      },
      showShoppingCart () {
        console.log('show shopping cart')
        this.$router.push({
          name: 'shoppingCart'
        })
      },
      showHelp () {
        console.log('show help')
        this.$router.push({
          name: 'feedback'
        })
      }
    },
    mounted () {
      this.height = document.body.offsetHeight - 46
    }
  }
</script>
<style lang="less">
  .apply-detail-wrapper{
    height: 100%;
    overflow: hidden;
    .apply-detail-container{
      overflow-y: auto;
      .content-container{
        .description{
          padding: 10px;
        }
        .toOperateDetail{
          color: #0099ff;
          font-size: 14px;
          display: inline-block;
          margin-top: 10px;
          margin-left: 10px;
        }
      }
    }
    .shopping{
      position: fixed;
      right: 20px;
      bottom: 80px;
      z-index: 2;
      width: 45px;
      height: 45px;
      border-radius: 50%;
    }
    .help{
      position: fixed;
      right: 20px;
      bottom: 30px;
      z-index: 2;
      width: 45px;
      height: 45px;
      border-radius: 50%;
    }
  }
</style>
