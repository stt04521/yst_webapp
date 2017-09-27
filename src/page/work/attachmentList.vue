<template>
  <div class="attachment-list-wrapper">
    <x-header title="附件列表" slot="overwrite-left" class="header">
      <!--<span slot="overwrite-left" @click="cancel">取消</span>-->
      <span slot="right" @click="create">批量操作</span>
    </x-header>
    <div class="attachment-list-container">
      <flexbox class="tab-container" :gutter="0">
        <flexbox-item :span="2" class="role vux-1px-b">执行者</flexbox-item>
        <flexbox-item>
          <tab active-color="#0099ff ">
            <tab-item selected>全部</tab-item>
            <tab-item>王明友</tab-item>
            <tab-item>蔡俊明</tab-item>
            <tab-item>罗西</tab-item>
          </tab>
        </flexbox-item>
        <flexbox-item :span="2" class="show-all" @click.native="toggleShow">
          <span class="triangle" :class="showAll ? 'triangle-up' : 'triangle-down'"></span>
        </flexbox-item>
      </flexbox>
      <div class="content-container" v-for="(item, index) in folderList" :key="index">
        <group :gutter="0">
          <cell
            is-link
            class="cell-style"
            :border-intent="false"
            :arrow-direction="nowIndex === index ? 'up' : 'down'"
            @click.native="showOperate(index)">
            <img slot="icon" class="folder-icon" :src="item.image" alt="">
            <span class="content-title">{{ item.content }}</span>
          </cell>
        </group>
        <div class="operate-container" v-show="nowIndex === index">
          <div @click="downLoad(item)">
            <img src="../../assets/down.png">
            <span>下载</span>
          </div>
          <div @click="deleteFold(item)">
            <img src="../../assets/delete.png">
            <span class="delete">删除</span>
          </div>
        </div>
      </div>
    </div>
    <div class="show-list">
      <div class="bg-color" v-if="showAll" @click="toggleShow"></div>
      <div class="list-container" v-if="showAll" @click="choosePeople">
        <div v-for="(item, index) in peopleList" class="list-item" :key="index">{{ item.name}}</div>
      </div>
    </div>
  </div>
</template>
<script>
  import {XHeader, Flexbox, FlexboxItem, Tab, TabItem, Group, Cell} from 'vux'
  export default {
    name: 'attachmentList',
    components: {
      XHeader,
      Flexbox,
      FlexboxItem,
      Tab,
      TabItem,
      Group,
      Cell
    },
    data () {
      return {
        nowIndex: 100,
        showAll: false,
        peopleList: [{name: '洛可可', id: '0'}, {name: '王明友', id: '1'}, {name: '张军民', id: '2'}, {name: '张俊明', id: '3'}, {name: '李俊明', id: '4'}, {name: '洛可可', id: '5'}],
        folderList: [
          {
            image: require('../../assets/folder.png'),
            content: '票据根据计划票核实计划票据几乎是大市反弹空间大森林发夹问哦if姐啊分'
          },
          {
            image: require('../../assets/folder.png'),
            content: '票据根据计划票核实计划票据几乎是大市反弹空间大森林发夹问哦if姐啊分'
          },
          {
            image: require('../../assets/folder.png'),
            content: '票据根据计划票核实计划票据几乎是大市反弹空间大森林发夹问哦if姐啊分'
          },
          {
            image: require('../../assets/folder.png'),
            content: '票据根据计划票核实计划票据几乎是大市反弹空间大森林发夹问哦if姐啊分'
          }
        ]
      }
    },
    methods: {
      create () {
        console.log('create')
      },
      toggleShow () {
        console.log('toggle show')
        this.showAll = !this.showAll
      },
      showOperate (index) {
        if (this.nowIndex === index) {
          this.nowIndex = 100
        } else {
          this.nowIndex = index
        }
        console.log('show operate')
      },
      downLoad (item) {
        console.log(item)
      },
      deleteFold (item) {
        console.log(item)
      },
      choosePeople (e) {
        let target = e.target
        console.log(target.innerText)
      }
    }
  }
</script>
<style scoped lang="less">
  .attachment-list-wrapper{
    .header span {
      color: #fff;
      font-size: 16px;
    }
    .attachment-list-container{
      height: 100%;
      position: relative;
      .tab-container {
        .role{
          background: #fff;
          height: 44px;
          line-height: 44px;
          text-align: center;
          font-size: 17px;
          color: #0099ff;
          font-weight: 600;
        }
        .show-all {
          position: relative;
          background-color: #fff;
          height: 44px;
          line-height: 44px;
          .triangle {
            width:0;
            height:0;
            border-width: 9px;
            border-style: solid;
            position: absolute;
            right: 20px;
            &.triangle-down{
              border-color: #ccc transparent transparent transparent;
              top: 18px;
            }
            &.triangle-up{
              border-color:transparent transparent #ccc transparent;
              top: 10px;
            }
          }

        }
      }
      .content-container {
        height: 100%;
        .cell-style{
          .content-title{
            display: inline-block;
            font-size: 14PX;
            text-align: left;
            margin-left: 10px;
          }
        }
        .operate-container {
          height: 35px;
          line-height: 35px;
          width: 100%;
          text-align: center;
          background: #fff;
          vertical-align: middle;
          font-size: 15px;
          div{
            display: inline-block;
          }
          img{
            height: 20px;
            width: 20px;
            vertical-align: middle;
            margin-right: 10px;
            margin-left: 10px;
          }
          .delete {
            color: #f00;
          }
        }
      }

    }
    .show-list{
      .list-container{
        background-color: #fff;
        z-index: 3;
        position: absolute;
        top: 90px;
        right: 0px;
        width: 100%;
        .list-item{
          display: inline-block;
          width: 80px;
          height: 40px;
          line-height: 40px;
          text-align: center;
        }
      }
      .bg-color{
        background-color: rgba(7,17,27,0.7);
        position: absolute;
        top: 90px;
        right: 0px;
        left: 0px;
        bottom: 0px;
        z-index:2;
      }
    }
  }
</style>
