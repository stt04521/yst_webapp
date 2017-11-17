<template>
  <div class="order-item-wrapper">
    <div class="order-item-container" v-for="(item, index) in dataList" :key="index">
      <div class="title-container">
        <span class="small-font">下单时间： {{ item.setOrderTime }}</span>
        <span class="small-font pay-status">{{ item.payStatus === 0 ? '未支付' : '已支付' }}</span>
      </div>
      <group class="item-container" :gutter="0" v-for="(val, idx) in item.orderList" :key="idx">
        <cell>
          <span slot="title">
            <img :src="val.orderIcon" class="order-img">
            <div class="order-detail">
              <span class="title">{{ val.taskName }}</span>
              <span class="detail">{{ val.taskDetail }}</span>
            </div>
          </span>
          <span slot="value" class="normal-font">￥{{ val.price }}</span>
        </cell>
        <cell class="vux-1px-b reset-padding">
          <span slot="value" class="normal-font">合计：{{ val.totalPrice }}元</span>
        </cell>
      </group>
      <div class="operate" v-if="item.payStatus === 0">
        <button class="operate-btn" @click="payForItem">去付款</button>
        <button class="operate-btn" @click="payForItem">找人代付</button>
        <button class="operate-btn" @click="cancelOrder">取消订单</button>
      </div>
      <div class="operate" v-else>
        <button class="operate-btn" @click="deleteOrder(item)">删除订单</button>
        <button class="operate-btn" @click="refund(item)">申请退款</button>
      </div>
    </div>

  </div>
</template>
<script>
  import {XHeader, Group, GroupTitle, Cell} from 'vux'
  export default {
    name: 'orderItem',
    components: {
      XHeader,
      Group,
      GroupTitle,
      Cell
    },
    props: {
      dataList: {
        type: Array
      }
    },
    methods: {
      deleteOrder (order) {
        console.log('delete-order')
        this.$emit('delete-order', order)
        console.log('111')
      },
      refund () {
        console.log('申请退款')
      },
      payForItem () {
        this.$router.push({
          name: 'purchaseApply'
        })
      },
      cancelOrder () {
        console.log('cancel order')
      }
    }
  }
</script>
<style scoped lang="less">
  .order-item-wrapper{
    height: 100%;
    overflow-y: auto;
    .order-item-container{
      background-color: #fff;
      margin-top: 10px;
      .title-container {
        height: 30px;
        line-height: 30px;
        padding-left: 15px;
        position: relative;
        .pay-status{
          position: absolute;
          right: 20px;
        }
        .small-font{
          font-size: 12px;
        }
      }
      .item-container {
        .order-detail{
          display: inline-block;
          .title{
            display: block;
            font-size: 14px;
          }
          .detail{
            width: 193px;
            display: block;
            font-size: 12px;
            margin-top: 5px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
        }
        .reset-padding{
          padding-top: 0px;
          padding-bottom: 0px;
        }
        .normal-font{
          font-size: 14px;
          color: #000;
        }
      }
      .order-img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        vertical-align: top;
      }
      .operate{
        padding: 10px 10px 10px 10px;
        .operate-btn{
          width: 66px;
          height: 21px;
          line-height: 21px;
          text-align: center;
          font-size: 10px;
          background-color: #fff;
          border: none;
          border: 1px solid #0099ff;
          color: #0099ff;
          border-radius: 5px;
        }
      }
    }
  }
</style>
