<template>
  <div class="participator-wrapper">
    <x-header title="参与者" slot="overwrite-left" class="header">
      <span slot="overwrite-left" @click="cancleChoose">取消</span>
      <span slot="right" @click="confirm">确定</span>
    </x-header>
    <view-box ref="viewBox" class="content-container">
      <group>
        <cell is-link title="选择人员" @click.native="chooseFriend"></cell>
      </group>
      <checklist title="已选择的接收人" :options="inlineDescList" v-model="inlineDescListValue" @on-change="change"></checklist>
    </view-box>
  </div>
</template>
<script>
  import {Group, Cell, Checklist, XHeader, ViewBox} from 'vux'
  export default {
    name: 'chooseParticipator',
    data () {
      return {
        checklist001: [],
        inlineDescList: [
          {key: '1', value: '王明友', inlineDesc: ''},
          {key: '2', value: '李明友', inlineDesc: ''},
          {key: '3', value: '张明友'}
        ],
        inlineDescListValue: [1, 2, 3]
      }
    },
    components: {
      Group,
      Cell,
      Checklist,
      XHeader,
      ViewBox
    },
    methods: {
      change (val) {
        console.log(val)
      },
      chooseFriend () {
        console.log('choose friend')
      },
      cancleChoose () {
        console.log('cancel choose')
      },
      confirm () {
        console.log('confirm choose')
      }
    }
  }
</script>
<style scoped lang="less">
  .participator-wrapper {
    height: 100%;
    overflow: hidden;
    .header span{
      font-size: 17px;
      color: #fff
    }
    .content-container {
      margin-top: -20px;
    }
  }
</style>
