<template>
  <div class="create-note-wrapper">
    <x-header title="新建计划" slot="overwrite-left" class="header">
      <span slot="overwrite-left" @click="cancleCreateNote">取消</span>
      <span slot="right" @click="createNote">创建</span>
    </x-header>
    <view-box class="content-container">
      <group>
        <x-textarea :max="1000" placeholder="请输入记事内容" @on-focus="onEvent('focus')" @on-blur="onEvent('blur')" :height="183"></x-textarea>
      </group>
      <group>
        <datetime format="YYYY-MM-DD HH:mm" @on-change="startTimeChange" title="开始时间"></datetime>
      </group>
    </view-box>
  </div>
</template>
<script>
  import {Group, XTextarea, Datetime, ViewBox, XHeader} from 'vux'
  export default {
    name: 'createNote',
    components: {
      ViewBox,
      Group,
      XTextarea,
      Datetime,
      XHeader
    },
    methods: {
      startTimeChange (val) {
        console.log(val)
      },
      onEvent (event) {
        console.log('on', event)
      },
      cancleCreateNote () {
        console.log('cancel create note')
      },
      createNote () {
        console.log('create note')
      }
    }
  }
</script>
<style scoped lang="less">
  .create-note-wrapper{
    height: 100%;
    overflow: hidden;
    .header span{
      font-size: 17px;
      color: #fff;
    }
    .content-container {
      margin-top: -20px;
    }
  }
</style>
