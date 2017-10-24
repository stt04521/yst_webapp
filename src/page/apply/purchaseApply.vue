<template>
  <div class="purchase-wrapper">
    <x-header title="应用购买"></x-header>
    <div class="description-container">
      <apply-item :dataList="list" :isShowBtn="false"></apply-item>
      <div class="description">
        <span>任务简介任务简介任务简介任务简介任务简介任务简介任务简介任务简介任务简介任务简介任务</span>
        <div class="price-container">
          <span class="title">应用价格：</span>
          <span class="price">￥66666</span>
        </div>
      </div>

    </div>
    <div class="purchase-container">
      <div class="radio-item">
        <label>
          <input type="radio" name="purchase"><span class="title">为组织购买</span>
        </label>
        <span class="choose-organize" @click="chooseOrganize">选择组织&nbsp;></span>
      </div>
      <div class="radio-item">
        <label><input type="radio" name="purchase"><span class="title">为组织购买</span></label>
      </div>
      <div class="footer">
        <button class="footer-btn" @click="toggleShowPayWay">去支付</button>
        <button class="footer-btn" @click="payByOthers">找人代付</button>
      </div>
    </div>
    <!--<actionsheet v-model="isShowPayWays" :menus="menus5" show-cancel @on-click-menu="showPayWays"></actionsheet>-->
    <div class="pay-way-container" v-show="isShowPayWays">
      <div class="bg-color" @click="toggleShowPayWay"></div>
      <div class="content-container">
        <div class="title-container">
          <span class="cancel" @click="cancel">取消</span>
          <span class="title">确认付款</span>
          <div class="price">￥6666</div>
        </div>
        <div class="pay-container">
          <group title="支付方式" >
            <radio :options="waysList" @on-change="change"></radio>
          </group>
          <button class="pay-btn" @click="payImmediate">立即付款</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {XHeader, Group, Radio} from 'vux'
  import applyItem from './applyItem.vue'
  export default {
    name: 'purchaseApply',
    data () {
      return {
        isShowPayWays: false,
        waysList: [
          {
            key: 'wechat',
            value: '微信'
          },
          {
            key: 'zhifubao',
            value: '支付宝'
          },
          {
            key: 'yinlian',
            value: '银联'
          },
          {
            key: 'wanglian',
            value: '网联'
          }
        ],
        list: [
          {
            icon: require('../../assets/news/userImg.jpg'),
            title: '任务',
            version: '2.11',
            money: 1,
            rater: 1
          }
        ]
      }
    },
    components: {
      XHeader,
      applyItem,
      Group,
      Radio
    },
    methods: {
      chooseOrganize () {
        console.log('choose organize')
      },
      toggleShowPayWay () {
        this.isShowPayWays = !this.isShowPayWays
      },
      showPayWays (item) {
        console.log(item)
      },
      payByOthers () {
        console.log('pay by others')
      },
      cancel () {
        console.log('cancel')
        this.toggleShowPayWay()
      },
      change (item) {
        // onchange的时候获取支付方式
        console.log(item)
      },
      payImmediate () {
        console.log('pay immediate')
        this.$router.push({
          name: 'purchaseSuccess'
        })
      }
    }
  }
</script>
<style scoped lang="less">
  .purchase-wrapper{
    height: 100%;
    overflow: hidden;
    font-size: 14px;
    .description-container{
      .description{
        height: 74px;
        width: 333px;
        padding: 10px;
        background-color: #fff;
        margin: -10px auto 10px auto;
        position: relative;
        .price-container{
          margin-top: 10px;
          .title{}
          .price{
            color: #f00;
            font-size: 15px;
            font-weight: 700;
          }
        }
      }

    }
    .purchase-container{
      width: 333px;
      padding: 10px;
      background-color: #fff;
      margin: 10px auto 10px auto;
      .radio-item{
        display: block;
        margin-top: 10px;
        position: relative;
        .title{
          display: inline-block;
          margin-left: 10px;
        }
        .choose-organize {
          position: absolute;
          top: 0px;
          right: 5px;
        }
      }
    }
    .footer{
      position: fixed;
      bottom: 30px;
      left: 0px;
      text-align: center;
      width: 100%;
      .footer-btn{
        border: none;
        background-color: #0099ff;
        color: #fff;
        padding: 10px 20px;
        border-radius: 4px;
        margin-right: 10px;
      }
    }
    .pay-way-container {
      .content-container {
        z-index: 3;
        background-color: #fff;
        position: absolute;
        bottom: 0px;
        right: 0px;
        left: 0px;
        .title-container{
          text-align: center;
          font-size: 16px;
          padding-top: 10px;
          .cancel {
            position: absolute;
            top: 10px;
            left: 20px;
            color: #0099ff;
          }
          .price {
            margin-top: 10px;
            font-size: 20px;
            color: #f00;
          }
        }
        .pay-btn {
          border: none;
          background-color: #0099ff;
          color: #fff;
          width: 357px;
          height: 48px;
          text-align: center;
          margin: 10px auto;
          display: block;
          border-radius: 5px;
          font-size: 16px;
        }
      }
      .bg-color {
        position: absolute;
        top: 0px;
        bottom: 0px;
        left: 0px;
        right: 0px;
        background-color: rgba(7,17,27,0.3);
      }
    }
  }
</style>
