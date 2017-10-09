<template>
  <div class="registry-container">
    <v-header :title="title"></v-header>
    <div class="content-container">
      <group :gutter="0">
        <x-input v-model="tel" placeholder="请输入手机号" class="v-input">
          <span slot="label" class="title-slot vux-1px-r">+86</span>
        </x-input>
        <x-input v-model="vCode" placeholder="请输入验证码" class="v-input">
          <x-button slot="right" mini @click.native="sendVCode">{{sendCode}}</x-button>
        </x-input>
      </group>
      <button class="next-step" @click="nextStep">下一步</button>
    </div>
  </div>

</template>
<script>
  import VHeader from './header'
  import {Group, XInput, XButton} from 'vux'
  export default {
    name: 'registry',
    data () {
      return {
        title: '注册',
        tel: '',
        vCode: '',
        sendCode: '获取验证码',
        isSendCode: false,
        waitTime: 60
      }
    },
    components: {
      VHeader,
      Group,
      XInput,
      XButton
    },
    methods: {
      nextStep () {
        let registryInfo = {
          tel: this.tel,
          vCode: this.vCode
        }
        console.log(registryInfo)
      },
      sendVCode () {
        this.isSendCode = true
        if (this.isSendCode) {
          this.sendCode = '重新获取(' + this.waitTime + '秒)'
        }
      }
    }
  }
</script>
<style scoped lang="less">
  .registry-container{
    .content-container{
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      width: 300px;
      background-color: transparent;
      .v-input{
        font-size: 14px;
        padding-left: 10px;
        .title-slot{
          display: inline-block;
          padding: 0px 10px 0px 10px
        }
      }
      .next-step{
        background-color: #0099ff;
        border: none;
        padding: 10px 55px;
        border-radius: 5px;
        color: #fff;
        margin: 30px auto 0px auto;
        display: block;
      }
    }
  }
</style>
