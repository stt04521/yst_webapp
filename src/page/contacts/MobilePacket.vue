<template>
  <div class="Info">
    <x-header>移动分组</x-header>
    <group >
      <group >
        <radio :options="radio001" @on-change="change"></radio>
      </group>
    </group>
    <div class="button_group">
      <x-button class="blue_bg" @click.native="onSure">确认</x-button>
    </div>

  </div>
</template>

<script>
  import { Cell, CellBox, Group, Badge, XHeader, XButton, Radio } from 'vux'

  export default {
    mounted () {
    },
    components: {
      Group,
      Cell,
      CellBox,
      Badge,
      XHeader,
      XButton,
      Radio
    },
    methods: {
      change (value, label) {
        console.log('change:', value, label)
      },
      onSure () {
        this.$vux.toast.show({
          type: 'success',
          text: '移动成功'
        })
      }
    },
    data () {
      return {
        radio001: [ '好友', '家人', '同学', '其他' ]
      }
    }
  }
</script>

<style lang="less">
  .Info {
    .weui-cells__title{
      color: black;
    }
    .vux-no-group-title{
      margin-top: 0 !important;
    }
    .weui-cells{
      margin-top: 0 !important;
    }
    .button_group{
      padding: 0 10px;
      box-sizing: border-box;
      position: fixed;
      width: 100%;
      bottom: 0;
      .blue_bg{
        background-color: #008EE5;
        color: white;
        margin-bottom: 10px;
      }
    }
    .weui-cells_radio .weui-check:checked + .weui-icon-checked{
      &:before{
        color: #008EE5;
      }
    }
  }
</style>
