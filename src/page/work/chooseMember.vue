<template>
  <div class="deliver-task-wrapper">
    <x-header :title="themeTitle" slot="overwrite-left" class="header">
      <span slot="overwrite-left" @click="cancel">取消</span>
      <span slot="right" @click="deliver">确定</span>
    </x-header>
    <div class="deliver-task-container">
      <group :gutter="0" style="margin-top: 10px">
        <cell :title="cellTitle" is-link class="choose-deliver"></cell>
      </group>
      <group :title="groupTitle" v-show="options.length">
        <radio :options="options" ></radio>
      </group>
    </div>
  </div>
</template>
<script>
  import {XHeader, Group, Cell, Radio} from 'vux'
  export default{
    name: 'chooseMember',
    components: {
      XHeader,
      Group,
      Cell,
      Radio
    },
    data () {
      return {
        themeTitle: '标题',
        groupTitle: '已选择人员',
        cellTitle: '选择人员',
        options: [
          {
            icon: require('../../assets/news/userImg.jpg'),
            key: '001',
            value: 'radio001'
          }, {
            icon: require('../../assets/news/userImg.jpg'),
            key: '002',
            value: 'radio002'
          }
        ]   // 在页面create的时候处理以上数据
      }
    },
    methods: {
      cancel () {
        console.log('cancel')
      },
      deliver () {
        console.log('deliver')
        // 发送emit
      },
      change (val) {
        console.log(val)
      }
    }
  }
</script>
<style scoped lang="less">
  .deliver-task-wrapper{
    .header{
      span{
        color: #fff;
        font-size: 16px;
      }
    }
    .deliver-task-container{
      .choose-deliver{
        padding: 0px;
        height: 55px;
        line-height: 55px;
        padding-left: 20px;
        padding-right: 20px;
      }
    }
  }
</style>
