<template>
  <div>
    <div class="block-item-wrapper" v-for="(item, index) in dataList" :key="index">
      <div class="title-container">
        <span class="line"></span>
        <span class="title">{{ item.title }}<span v-show="item.isShowTip" class="tip">长按删除应用</span></span>
        <span class="title-right" >{{item.isDelete ? '删除分组' : '显示全部'}}</span>
      </div>
      <div class="content-container">
        <div class="item-container" v-for="(val, index) in item.list" :key="index" v-longtap="{fn:onlongpress,name:'长按'}">
          <img :src="val.icon" class="apply-icon">
          <x-icon type="ios-close" size="20" class="delete-icon" @click="deleteApply(val)" v-show="isShowDelete"></x-icon>
          <span class="name">{{ val.name }}</span>
        </div>
        <div class="item-container" v-show='isShowAddApply'>
          <img src="../assets/add_more.png" class="apply-icon">
          <span class="name">添加应用</span>
        </div>
      </div>
    </div>
    <div class="add-group-container" v-show="isShowAddGroup" @click="addNewGroup">
      <img src="../assets/add_more.png" class="add-icon">
      <span>新建分组</span>
    </div>
    <div v-transfer-dom>
      <confirm
        v-model="showConfirm"
        show-input
        hide-on-blur
        title="创建分组"
        placeholder="请输入分组名称"
        @on-confirm="onConfirm">
      </confirm>
    </div>

  </div>
</template>
<script>
  import {Confirm, TransferDomDirective as TransferDom} from 'vux'
  import { longtap } from '@/directives/vue-touch'
  export default {
    name: 'blockItem',
    directives: {
      TransferDom,
      longtap
    },
    components: {
      Confirm
    },
    data () {
      return {
        val: '',
        isShowAddGroup: true,
        isShowAddApply: false,
        showConfirm: false,
        isShowDelete: false,
        dataList: [
          {
            title: '常用',
            isShowTip: true,
            isDelete: false,
            list: [
              {
                icon: require('../assets/news/userImg.jpg'),
                name: '组织管理'
              },
              {
                icon: require('../assets/news/userImg.jpg'),
                name: '组织管理'
              },
              {
                icon: require('../assets/news/userImg.jpg'),
                name: '组织管理'
              },
              {
                icon: require('../assets/news/userImg.jpg'),
                name: '组织管理'
              },
              {
                icon: require('../assets/news/userImg.jpg'),
                name: '组织管理'
              },
              {
                icon: require('../assets/news/userImg.jpg'),
                name: '组织管理'
              },
              {
                icon: require('../assets/news/userImg.jpg'),
                name: '组织管理'
              },
              {
                icon: require('../assets/news/userImg.jpg'),
                name: '组织管理'
              },
              {
                icon: require('../assets/news/userImg.jpg'),
                name: '组织管理'
              },
              {
                icon: require('../assets/news/userImg.jpg'),
                name: '组织管理'
              },
              {
                icon: require('../assets/news/userImg.jpg'),
                name: '组织管理'
              }
            ]
          },
          {
            title: '财务管理',
            isDelete: false,
            isShowTip: false,
            list: [
              {
                icon: require('../assets/news/userImg.jpg'),
                name: '组织管理'
              },
              {
                icon: require('../assets/news/userImg.jpg'),
                name: '组织管理'
              },
              {
                icon: require('../assets/news/userImg.jpg'),
                name: '组织管理'
              },
              {
                icon: require('../assets/news/userImg.jpg'),
                name: '组织管理'
              },
              {
                icon: require('../assets/news/userImg.jpg'),
                name: '组织管理'
              },
              {
                icon: require('../assets/news/userImg.jpg'),
                name: '组织管理'
              },
              {
                icon: require('../assets/news/userImg.jpg'),
                name: '组织管理'
              },
              {
                icon: require('../assets/news/userImg.jpg'),
                name: '组织管理'
              },
              {
                icon: require('../assets/news/userImg.jpg'),
                name: '组织管理'
              },
              {
                icon: require('../assets/news/userImg.jpg'),
                name: '组织管理'
              },
              {
                icon: require('../assets/news/userImg.jpg'),
                name: '组织管理'
              }
            ]
          },
          {
            title: '日常出行',
            isDelete: false,
            isShowTip: false,
            list: [
              {
                icon: require('../assets/news/userImg.jpg'),
                name: '组织管理'
              },
              {
                icon: require('../assets/news/userImg.jpg'),
                name: '组织管理'
              },
              {
                icon: require('../assets/news/userImg.jpg'),
                name: '组织管理'
              },
              {
                icon: require('../assets/news/userImg.jpg'),
                name: '组织管理'
              },
              {
                icon: require('../assets/news/userImg.jpg'),
                name: '组织管理'
              },
              {
                icon: require('../assets/news/userImg.jpg'),
                name: '组织管理'
              },
              {
                icon: require('../assets/news/userImg.jpg'),
                name: '组织管理'
              },
              {
                icon: require('../assets/news/userImg.jpg'),
                name: '组织管理'
              },
              {
                icon: require('../assets/news/userImg.jpg'),
                name: '组织管理'
              },
              {
                icon: require('../assets/news/userImg.jpg'),
                name: '组织管理'
              },
              {
                icon: require('../assets/news/userImg.jpg'),
                name: '组织管理'
              }
            ]
          },
          {
            title: '其他',
            isDelete: false,
            isShowTip: false,
            list: [
              {
                icon: require('../assets/news/userImg.jpg'),
                name: '组织管理'
              },
              {
                icon: require('../assets/news/userImg.jpg'),
                name: '组织管理'
              },
              {
                icon: require('../assets/news/userImg.jpg'),
                name: '组织管理'
              },
              {
                icon: require('../assets/news/userImg.jpg'),
                name: '组织管理'
              },
              {
                icon: require('../assets/news/userImg.jpg'),
                name: '组织管理'
              },
              {
                icon: require('../assets/news/userImg.jpg'),
                name: '组织管理'
              },
              {
                icon: require('../assets/news/userImg.jpg'),
                name: '组织管理'
              },
              {
                icon: require('../assets/news/userImg.jpg'),
                name: '组织管理'
              },
              {
                icon: require('../assets/news/userImg.jpg'),
                name: '组织管理'
              },
              {
                icon: require('../assets/news/userImg.jpg'),
                name: '组织管理'
              },
              {
                icon: require('../assets/news/userImg.jpg'),
                name: '组织管理'
              }
            ]
          }
        ]

      }
    },
    methods: {
      addNewGroup () {
        this.showConfirm = true
      },
      onConfirm (value) {
        // value分组名
        console.log(value)
      },
      onlongpress (e) {
        e.preventDefault()
        this.isShowDelete = true
      },
      deleteApply (item) {
        console.log(item)
      }
    }
  }
</script>
<style scoped lang="less">
  .block-item-wrapper{
    .title-container{
      height: 30px;
      line-height: 30px;
      padding-left: 20px;
      position: relative;
      .line{
        display: inline-block;
        width: 4px;
        height: 16px;
        background-color: #0099ff;
        vertical-align: middle;
      }
      .title{
        font-size: 16px;
        .tip{
          display: inline-block;
          margin-left: 4px;
          font-size: 12px;
          color: #aaa;
        }
      }
      .title-right{
        font-size: 15px;
        position: absolute;
        top: 4px;
        right: 20px
      }
    }
    .content-container{
      /*margin: 10px auto 30px auto;*/
      background-color: #fff;
      width: 325px;
      margin: 10px auto;
      padding: 18px 0px 0px 26px;
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
        .delete-icon {
          position: absolute;
          top: 0px;
          right: 0px;
        }
        .name{
          height: 20px;
          line-height: 20px;
        }
      }
    }
  }
  .add-group-container{
    height: 75px;
    width: 57px;
    margin: 10px auto;
    text-align: center;
    font-size: 14px;
    color: #aaa;
    .add-icon{
      width: 52px;
      height: 52px;
    }
  }
</style>
