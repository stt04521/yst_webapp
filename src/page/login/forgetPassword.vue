<template>
  <div class="registry-container">
    <v-header :title="title"></v-header>
    <div class="content-container" v-if="isShowPassPage">
      <group :gutter="0">
        <x-input v-model="tel" placeholder="请输入手机号" class="v-input">
          <cell slot="label"
                class="title-slot vux-1px-r"
                is-link
                :arrow-direction="showList ? 'up' : 'down'"
                @click.native="showTelList">
            +86
          </cell>
        </x-input>
        <x-input v-model="vCode" placeholder="请输入验证码" class="v-input">
          <x-button slot="right" mini @click.native="sendVCode">{{sendCode}}</x-button>
        </x-input>
      </group>
      <button class="next-step" @click="nextStep">下一步</button>
    </div>
    <div class="content-container" v-else>
      <group :gutter="0">
        <x-input v-model="newPassword" placeholder="请输入新密码" class="v-input" :type='passwordType'>
          <img slot="right" :src="isPasswordAvalible" @click="changePasswordType" alt="">
        </x-input>
      </group>
      <button class="next-step" @click="ensurePassword">确定</button>
    </div>
  </div>

</template>
<script>
  import VHeader from './header'
  import {Group, XInput, XButton, Cell} from 'vux'
  export default {
    name: 'forgetPassword',
    data () {
      return {
        title: '忘记密码',
        tel: '',
        vCode: '',
        sendCode: '获取验证码',
        isSendCode: false,
        waitTime: 60,
        showList: false,
        isShowPassPage: true,
        newPassword: '',
        isPasswordAvalible: require('../../assets/un_watch.png'),
        passwordType: 'password',
        isWatchPw: false
      }
    },
    components: {
      VHeader,
      Group,
      XInput,
      XButton,
      Cell
    },
    methods: {
      nextStep () {
        let registryInfo = {
          tel: this.tel,
          vCode: this.vCode
        }
        console.log(registryInfo)
        this.isShowPassPage = false
      },
      sendVCode () {
        this.isSendCode = true
        if (this.isSendCode) {
          this.sendCode = '重新获取(' + this.waitTime + '秒)'
        }
      },
      showTelList () {
        this.showList = !this.showList
      },
      changePasswordType () {
        this.isWatchPw = !this.isWatchPw
        if (this.isWatchPw) {
          this.isPasswordAvalible = require('../../assets/watch.png')
          this.passwordType = 'text'
        } else {
          this.isPasswordAvalible = require('../../assets/un_watch.png')
          this.passwordType = 'password'
        }
      },
      ensurePassword () {
        console.log(this.newPassword)
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
