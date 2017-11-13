<template>
  <div class="shopping-cart-wrapper">
    <x-header title="购物车">
    </x-header>
    <div class="shopping-cart-container">
      <div class="item-container" @click="chooseGoods(item)" v-for="(item, index) in goodsList" :key="index">
        <left-slider :index="index" @deleteItem="deleteItem">
          <icon :type="item.isChoose ? 'success' : 'circle'" class="check-icon"></icon>
          <img :src="item.icon" class="item-icon">
          <div class="right">
            <div class="title">{{ item.title }}<span class="name">版本{{ item.version }}</span></div>
            <div class="price">￥{{ item.price }}</div>
          </div>
        </left-slider>
      </div>
      <div class="footer">
        <span class="total">合计：￥{{ totalPrice }}</span>
        <button class="footer-btn">购买{{ chooseList.length > 0 ? '(' + chooseList.length + ')' : '' }}</button>
      </div>
    </div>
  </div>
</template>
<script>
  import {XHeader, Icon} from 'vux'
  import leftSlider from '@/components/leftSlider'
  export default {
    name: 'shoppingCart',
    components: {
      XHeader,
      Icon,
      leftSlider
    },
    data () {
      return {
        chooseList: [],
        totalPrice: 0,
        goodsList: [
          {
            icon: require('../../assets/news/userImg.jpg'),
            isChoose: false,
            title: '任务',
            version: 'V1.21',
            price: 6666,
            id: 1
          },
          {
            icon: require('../../assets/news/userImg.jpg'),
            isChoose: false,
            title: '111',
            version: 'V1.21',
            price: 66,
            id: 2
          },
          {
            icon: require('../../assets/news/userImg.jpg'),
            isChoose: false,
            title: '33',
            version: 'V1.21',
            price: 22,
            id: 3
          },
          {
            icon: require('../../assets/news/userImg.jpg'),
            isChoose: false,
            title: 'dgagaf',
            version: 'V1.21',
            price: 88,
            id: 4
          },
          {
            icon: require('../../assets/news/userImg.jpg'),
            isChoose: false,
            title: '短发恶法WE',
            version: 'V1.21',
            price: 2222,
            id: 4
          }
        ]
      }
    },
    methods: {
      chooseGoods (item) {
        if (item.isChoose) {
          item.isChoose = false
          this.totalPrice -= item.price
          this.chooseList = this._.filter(this.chooseList, (ite) => {
            return ite.id !== item.id
          })
        } else {
          item.isChoose = true
          this.totalPrice += item.price
          this.chooseList.push(item)
        }
      },
      deleteItem (item) {
        console.log(item)
      }
    }
  }
</script>
<style scoped lang="less">
  .shopping-cart-wrapper{
    .shopping-cart-container{
      .item-container{
        width: 313px;
        height: 74px;
        padding: 10px 20px;
        margin: 5px auto;
        background-color: #fff;
        .check-icon{
          vertical-align: top;
          margin-top: 25px;

        }
        .item-icon{
          width: 70px;
          height: 70px;
          border-radius: 50%;
        }
        .right{
          display: inline-block;
          height: 70px;
          line-height: 70px;
          vertical-align: top;
          margin-left: 10px;
          .title{
            height: 35px;
            line-height: 35px;
            font-size: 18px;
            .name{
              font-size: 14px;
              display: inline-block;
              margin-left: 10px;
            }
          }
          .price{
            height: 35px;
            line-height: 35px;
            font-size: 16px;
            color: #f00;
          }
        }
      }
    }
    .footer{
      height: 95px;
      line-height: 95px;
      font-size: 16px;
      position: fixed;
      bottom: 0px;
      left: 0px;
      .total{
        display: inline-block;
        margin-left: 100px;
      }
      .footer-btn{
        border: none;
        background-color: #0099ff;
        color: #fff;
        border-radius: 4px;
        height: 44px;
        line-height: 44px;
        width: 125px;
        text-align: center;
        display: inline-block;
        margin-right: 20px;
        position: fixed;
        right: 0px;
        bottom: 25px;

      }
    }
  }
</style>
