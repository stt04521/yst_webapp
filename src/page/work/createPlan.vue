<template>
  <div class="create-plan-wrapper">
    <x-header title="计划" class="header">
      <span slot="overwrite-left" @click="cancel">取消</span>
      <span slot="right" @click="create">创建</span>
    </x-header>
    <view-box class="create-plan-contaienr">
      <group :gutter="0" style="padding: 0px">
        <x-input placeholder="请输入计划标题" :max="40" show-clear class="title"></x-input>
      </group>
      <group :gutter="0" style="margin-top: 5px;">
        <x-textarea :max="1000" placeholder="请输入日程内容" @on-focus="onEvent('focus')" @on-blur="onEvent('blur')" :height="183"></x-textarea>
      </group>
      <group :gutter="0" style="margin-top: 5px;">
        <datetime format="YYYY-MM-DD HH:mm" @on-change="startTimeChange" title="开始时间"></datetime>
        <datetime format="YYYY-MM-DD HH:mm" @on-change="endTimeChange" :start-date="beginTime" title="截止时间"></datetime>
      </group>
      <group :gutter="0" style="margin-top: 5px">
        <cell title="添加附件" @click.native="addFile" class="add-file">
          <img slot="icon" width="20" class="file-icon" src="../../assets/addFile.png">
        </cell>
        <cell v-show="fileList" v-for="(item, index) in fileList" :key="item.id" :title="item.title" class="add-file" >
          <img slot="icon" width="25" class="fold-icon" src="../../assets/folder.png">
          <img slot="value" width="20" src="../../assets/delete.png" @click="deleteFile">
        </cell>
      </group>
      <div class="v-transfer-dom">
        <confirm v-model="showConfirm"
                 title="确定要删除已上传的附件吗？"
                 @on-cancel="onCancel"
                 @on-confirm="onConfirm">
        </confirm>
      </div>
      <toast class="toast" v-model="showToast">添加成功</toast>
    </view-box>
  </div>
</template>
<script>
  import {XHeader, ViewBox, Group, XInput, XTextarea, Datetime, Cell, Confirm, Toast} from 'vux'
  export default {
    name: 'createPlan',
    components: {
      XHeader,
      ViewBox,
      Group,
      XInput,
      XTextarea,
      Datetime,
      Cell,
      Confirm,
      Toast
    },
    data () {
      return {
        beginTime: '2017-07-18',
        showConfirm: false,
        showToast: false,
        fileList: [
          {
            title: '票据核实计划',
            id: '0'
          },
          {
            title: '123.png',
            id: '1'
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
      startTimeChange (val) {
        this.startTime = val
        this.beginTime = this.startTime.split(' ')[0]
      },
      endTimeChange (val) {
        console.log('end time change')
      },
      addFile () {
        console.log('add file')
        this.showToast = true
      },
      deleteFile () {
        console.log('delete file')
        this.showConfirm = true
      },
      onCancel () {
        console.log('on cancel')
      },
      onConfirm () {
        console.log('on confirm')
      }
    }
  }
</script>
<style scoped lang="less">
  .create-plan-wrapper{
    height: 100%;
    overflow-y: hidden;
    .header span {
      font-size: 16px;
      color: #fff;
    }
    .create-plan-contaienr{
      height: 100%;
      .title{
        height: 55px;
        line-height: 55px;
        padding-top: 0px;
        padding-bottom: 0px;
      }
      .add-file{
        color: #999999;
        .file-icon {
          display: block;
          margin-right: 5px;
        }
        .fold-icon {
          display: block;
          margin-left: 5px;
          margin-right: 20px;
        }
      }
      .toast {
        border-radius: 12px
      }
    }
  }
</style>
