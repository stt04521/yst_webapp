<template>
  <div class="payed-apply-wrapper">
    <x-header title="已购应用" class="header">
      <span slot="overwrite-left" @click="cancel">取消</span>
      <span slot="right" @click="ensure">确定{{choosedList.length > 0 ? '(' + choosedList.length + ')' : ''}}</span>
    </x-header>
    <div class="content-container" :style="{height: height + 'px'}">
      <div class="item-container" v-for="(val, index) in list" :key="index" @click="chooseItem(val)">
        <img :src="val.icon" class="apply-icon">
        <icon type="success" class="choose-icon" :style="{color: val.isChoosed ? '#09BB07' : '#aaa'}"></icon>
        <span class="name">{{ val.name }}</span>
      </div>
    </div>
  </div>
</template>
<script>
  import {XHeader, Icon} from 'vux'
  export default{
    name: 'payedApply',
    components: {
      XHeader,
      Icon
    },
    methods: {
      cancel () {
        console.log('cancel')
      },
      ensure () {
        console.log('ensure')
      },
      chooseItem (item) {
        console.log(item)
        item.isChoosed = true
        this.choosedList.push(item)
      }
    },
    data () {
      return {
        height: 0,
        choosedList: [],
        list: [
          {
            icon: require('../../assets/news/userImg.jpg'),
            isChoosed: false,
            name: '组织管理'
          },
          {
            icon: require('../../assets/news/userImg.jpg'),
            isChoosed: false,
            name: '组织管理'
          },
          {
            icon: require('../../assets/news/userImg.jpg'),
            isChoosed: false,
            name: '组织管理'
          },
          {
            icon: require('../../assets/news/userImg.jpg'),
            isChoosed: false,
            name: '组织管理'
          },
          {
            icon: require('../../assets/news/userImg.jpg'),
            isChoosed: false,
            name: '组织管理'
          },
          {
            icon: require('../../assets/news/userImg.jpg'),
            isChoosed: false,
            name: '组织管理'
          },
          {
            icon: require('../../assets/news/userImg.jpg'),
            isChoosed: false,
            name: '组织管理'
          },
          {
            icon: require('../../assets/news/userImg.jpg'),
            isChoosed: false,
            name: '组织管理'
          },
          {
            icon: require('../../assets/news/userImg.jpg'),
            isChoosed: false,
            name: '组织管理'
          },
          {
            icon: require('../../assets/news/userImg.jpg'),
            isChoosed: false,
            name: '组织管理'
          },
          {
            icon: require('../../assets/news/userImg.jpg'),
            isChoosed: false,
            name: '组织管理'
          }
        ]
      }
    },
    mounted () {
      this.height = document.body.offsetHeight - 4
    }
  }
</script>
<style scoped lang="less">
  .payed-apply-wrapper{
    height: 100%;
    overflow: hidden;
    .header span {
      color: #fff;
      font-size: 14px;
    }
    .content-container{
      background-color: #fff;
      width: 325px;
      margin: 10px auto;
      padding: 18px 0px 0px 26px;
      overflow-y: auto;
      .item-container{
        width: 50px;
        height: 74px;
        margin-right: 30px;
        margin-bottom: 28px;
        text-align: center;
        display: inline-block;
        position: relative;
        .apply-icon{
          width: 50px;
          height: 50px;
        }
        .choose-icon{
          position: absolute;
          top: -2px;
          right: -8px;
        }
        .name{
          height: 20px;
          line-height: 20px;
        }
      }
    }
  }
</style>
