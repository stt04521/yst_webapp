<template>
  <div class="count-safe-wrapper">
    <x-header title="帐号安全"></x-header>
    <group :gutter="0" v-for="(item, index) in countInfo" :key="index">
      <cell :title="item.title" :value="item.value" class="cell-item"></cell>
    </group>
    <span class="toast-tip">提示： 绑定手机号或邮箱后，可直接用于帐号登录</span>
  </div>
</template>
<script>
  import {XHeader, Group, Cell} from 'vux'
  export default {
    name: 'countSafe',
    data () {
      return {
        countInfo: [
          {
            title: '用户名',
            value: '李明友'
          },
          {
            title: '手机号',
            value: '132547931'
          },
          {
            title: 'Email',
            value: '未绑定'
          },
          {
            title: '密码',
            value: '*******'
          }
        ]
      }
    },
    components: {
      XHeader,
      Group,
      Cell
    }
  }
</script>
<style scoped lang="less">
  .count-safe-wrapper{
    height: 100%;
    overflow: auto;
    .cell-item{
      font-size: 15px;
    }
    .toast-tip{
      color: #aaa;
      display: inline-block;
      padding-left: 10px;
    }
  }
</style>
