<template>
  <div class="input-info-wrapper">
    <x-header title="验证什么信息"></x-header>
    <group :gutter="0">
      <x-input title="手机号" v-model="tel"></x-input>
      <x-input title="发送验证码" class="weui-vcode" v-model="testCode">
        <x-button slot="right" type="default" mini>发送验证码</x-button>
      </x-input>
    </group>
    <button class="info-btn" @click="ensureInfo">确认</button>
    <div class="show-error">
      <icon type="safe_warn"></icon>
      <span>输入有误</span>
    </div>
  </div>
</template>
<script>
  import {XHeader, Group, XInput, Icon, XButton} from 'vux'
  export default {
    name: 'inputInfo',
    components: {
      XHeader,
      Group,
      XInput,
      Icon,
      XButton
    },
    data () {
      return {
        tel: '请输入手机号',
        testCode: ' 请输入验证码'
      }
    },
    created () {
//      let infoList = this.$route.params.infoList
//      this.dataList = infoList
    },
    methods: {
      ensureInfo () {
        console.log(this.tel)
        console.log(this.testCode)
      }
    }
  }
</script>
<style scoped lang="less">
  .input-info-wrapper{
    height: 100%;
    .info-btn{
      width: 355px;
      height: 45px;
      line-height: 45px;
      color: #fff;
      background-color: #0099ff;
      border: none;
      border-radius: 5px;
      margin-top: 10px;
      margin-left: 10px;
    }
    .show-error {
      width: 100px;
      margin: 0 auto;
    }
  }
</style>
