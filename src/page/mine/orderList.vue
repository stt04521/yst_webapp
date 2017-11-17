<template>
  <div class="order-list-wrapper">
    <x-header title="我的订单"></x-header>
    <tab active-color="#0099ff">
      <tab-item selected @on-item-click="toggleList(2)">
        <router-link to="/orderList/orderItem">全部订单</router-link>
      </tab-item>
      <tab-item @on-item-click="toggleList(0)">
        <router-link to="">未支付</router-link>
      </tab-item>
      <tab-item @on-item-click="toggleList(1)">
        <router-link to="">已支付</router-link>
      </tab-item>
    </tab>
    <div class="order-list-container" @delete-order="deleteOrder" :style="{height: height + 'px'}">
      <router-view :dataList="orderList"></router-view>
    </div>
  </div>
</template>
<script>
  import {XHeader, Tab, TabItem} from 'vux'
  export default {
    name: 'orderList',
    components: {
      XHeader,
      Tab,
      TabItem
    },
    data () {
      return {
        height: 0,
        orderList: [],
        allList: [
          {
            setOrderTime: '2017-10-11 15:55',
            payStatus: 0,
            orderList: [
              {
                orderIcon: require('../../assets/news/userImg.jpg'),
                taskName: '签到',
                taskDetail: '快来签到，快来快来,快来签到，',
                price: '55'
              },
              {
                orderIcon: require('../../assets/news/userImg.jpg'),
                taskName: '签到',
                taskDetail: '快来签到，快来快来,快来签到，',
                price: '55'
              }
            ],
            totalPrice: '66'
          },
          {
            setOrderTime: '2017-10-11 15:55',
            payStatus: 1,
            orderList: [
              {
                orderIcon: require('../../assets/news/userImg.jpg'),
                taskName: '签到',
                taskDetail: '快来签到，快来快来,快来签到，',
                price: '55'
              }
            ],
            totalPrice: '66'
          },
          {
            setOrderTime: '2017-10-11 15:55',
            payStatus: 0,
            orderList: [
              {
                orderIcon: require('../../assets/news/userImg.jpg'),
                taskName: '签到',
                taskDetail: '快来签到，快来快来,快来签到，',
                price: '55'
              },
              {
                orderIcon: require('../../assets/news/userImg.jpg'),
                taskName: '签到',
                taskDetail: '快来签到，快来快来,快来签到，',
                price: '55'
              }
            ],
            totalPrice: '66'
          },
          {
            setOrderTime: '2017-10-11 15:55',
            payStatus: 1,
            orderList: [
              {
                orderIcon: require('../../assets/news/userImg.jpg'),
                taskName: '签到',
                taskDetail: '快来签到，快来快来,快来签到，',
                price: '55'
              }
            ],
            totalPrice: '66'
          }
        ],
        unpayedList: [
          {
            setOrderTime: '2017-10-11 15:55',
            payStatus: 0,
            orderList: [
              {
                orderIcon: require('../../assets/news/userImg.jpg'),
                taskName: '签到',
                taskDetail: '快来签到，快来快来,快来签到，',
                price: '55'
              },
              {
                orderIcon: require('../../assets/news/userImg.jpg'),
                taskName: '签到',
                taskDetail: '快来签到，快来快来,快来签到，',
                price: '55'
              }
            ],
            totalPrice: '66'
          },
          {
            setOrderTime: '2017-10-11 15:55',
            payStatus: 0,
            orderList: [
              {
                orderIcon: require('../../assets/news/userImg.jpg'),
                taskName: '签到',
                taskDetail: '快来签到，快来快来,快来签到，',
                price: '55'
              },
              {
                orderIcon: require('../../assets/news/userImg.jpg'),
                taskName: '签到',
                taskDetail: '快来签到，快来快来,快来签到，',
                price: '55'
              }
            ],
            totalPrice: '66'
          }
        ],
        payedList: [
          {
            setOrderTime: '2017-10-11 15:55',
            payStatus: 1,
            orderList: [
              {
                orderIcon: require('../../assets/news/userImg.jpg'),
                taskName: '签到',
                taskDetail: '快来签到，快来快来,快来签到，',
                price: '55'
              },
              {
                orderIcon: require('../../assets/news/userImg.jpg'),
                taskName: '签到',
                taskDetail: '快来签到，快来快来,快来签到，',
                price: '55'
              }
            ],
            totalPrice: '66'
          },
          {
            setOrderTime: '2017-10-11 15:55',
            payStatus: 1,
            orderList: [
              {
                orderIcon: require('../../assets/news/userImg.jpg'),
                taskName: '签到',
                taskDetail: '快来签到，快来快来,快来签到，',
                price: '55'
              },
              {
                orderIcon: require('../../assets/news/userImg.jpg'),
                taskName: '签到',
                taskDetail: '快来签到，快来快来,快来签到，',
                price: '55'
              }
            ],
            totalPrice: '66'
          }
        ]
      }
    },
    created () {
      this.orderList = this.allList
    },
    mounted () {
      this.height = document.body.offsetHeight - 90
    },
    methods: {
      toggleList (orderStatus) {
        if (orderStatus === 1) {
          this.orderList = this.payedList
        } else if (orderStatus === 0) {
          this.orderList = this.unpayedList
        } else {
          this.orderList = this.allList
        }
      },
      deleteOrder (order) {
        console.log('deleteOrder')
        console.log(order)
      }
    }
  }
</script>
<style scoped lang="less">
  .order-list-wrapper{
    height: 100%;
    overflow: hidden;
    .order-list-container{
      overflow-y: auto;
    }
  }
</style>
