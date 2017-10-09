<!--对于责任人等各个角色渲染部分，首先必须五个都显示，然后根据选择显示value-->
<template>
  <div class="create-task-wrapper">
    <x-header title="新建任务" slot="overwrite-left" class="header">
      <span slot="overwrite-left" @click="cancel">取消</span>
      <span slot="right" @click="create">创建</span>
    </x-header>
    <view-box class="content-container">
      <group>
        <x-textarea :max="1000" placeholder="请输入任务内容" @on-focus="onEvent('focus')" @on-blur="onEvent('blur')" :height="183"></x-textarea>
      </group>
      <group>
        <datetime format="YYYY-MM-DD HH:mm" @on-change="startTimeChange" title="开始时间"></datetime>
        <datetime format="YYYY-MM-DD HH:mm" @on-change="endTimeChange" :start-date="beginTime" title="截止时间"></datetime>
      </group>
      <group>
        <cell v-for="(item, index) in relatedList"
              :key="index"
              :title="item.title"
              is-link
        >
          <div slot="value" class="value-container" v-show="item.list.length">
            <!--根据角色判断，暂时使用title判断-->
            <div v-for="(ite, idx) in item.list.slice(0,5)" class="avatar">
              <img :src="ite.avatar" alt="">
            </div>
            <span>{{item.title === '责任人' ? item.list[0].name : (item.list.length+1)+'人'}}</span>
          </div>
        </cell>
      </group>
    </view-box>
  </div>
</template>
<script>
  import {XHeader, ViewBox, XTextarea, Group, Datetime, Cell} from 'vux'
  export default {
    name: 'createTask',
    components: {
      XHeader,
      ViewBox,
      XTextarea,
      Group,
      Datetime,
      Cell
    },
    data () {
      return {
        beginTime: '2017-01-01',
        relatedList: [
          {
            title: '责任人',
            list: [
              {
                name: '李明友',
                avatar: require('../../assets/news/userImg.jpg')
              }
            ]
          },
          {
            title: '执行者',
            list: [
              {
                name: '李明友',
                avatar: require('../../assets/news/userImg.jpg')
              },
              {
                name: '李明友',
                avatar: require('../../assets/news/userImg.jpg')
              },
              {
                name: '李明友',
                avatar: require('../../assets/news/userImg.jpg')
              },
              {
                name: '李明友',
                avatar: require('../../assets/news/userImg.jpg')
              },
              {
                name: '李明友',
                avatar: require('../../assets/news/userImg.jpg')
              },
              {
                name: '李明友',
                avatar: require('../../assets/news/userImg.jpg')
              }
            ]
          },
          {
            title: '审核者',
            list: [
              {
                name: '李明友',
                avatar: require('../../assets/news/userImg.jpg')
              }
            ]
          },
          {
            title: '参与者',
            list: [
              {
                name: '李明友',
                avatar: require('../../assets/news/userImg.jpg')
              }
            ]
          }
        ]
      }
    },
    methods: {
      cancel () {
        console.log('cancel')
      },
      create () {
        console.log('create')
      },
      onEvent (event) {
        console.log('on', event)
      },
      startTimeChange (val) {
        // 任务开始时间 截止时间的startDate设置为开始时间
        this.startTime = val
        this.beginTime = this.startTime.split(' ')[0]
      },
      endTimeChange (val) {
        this.endTime = val
      }
    }
  }
</script>
<style scoped lang="less">
  .create-task-wrapper{
    height: 100%;
    overflow: hidden;
    .header span {
      color: #fff;
      font-size: 16px;
    }
    .content-container {
      height: 100%;
      .value-container{
        .avatar{
          display: inline-block;
          img{
            width: 26px;
            height: 26px;
          }
        }
        span{
          vertical-align: top;
        }
      }

    }
  }
</style>
