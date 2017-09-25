<template>
  <div class="plan-list-wrapper">
    <x-header title="计划" slot="overwrite-left" class="header">
      <!--<span slot="overwrite-left" @click="cancel">取消</span>-->
      <span slot="right" @click="create">创建</span>
    </x-header>
    <view-box class="plan-list-container">
      <tab :line-width="1" custom-bar-width="60px" active-color="#10b4f7" class="s-tab-container" defaultColor="#aaa">
        <tab-item select>
          <router-link to="/taskList/taskItem">我创建的</router-link>
        </tab-item>
        <tab-item>
          <router-link to="/taskList/taskItem">全部状态</router-link>
        </tab-item>
      </tab>
    </view-box>
  </div>
</template>
<script>
  import {XHeader, Tab, ViewBox, TabItem} from 'vux'
  export default{
    name: 'planList',
    components: {
      XHeader,
      Tab,
      TabItem,
      ViewBox
    },
    methods: {
      create () {
        console.log('create')
      }
    }
  }
</script>
<style scoped lang="less">
  .plan-list-wrapper{
    height: 100%;
    overflow: hidden;
    .plan-list-container {

    }
  }
</style>
