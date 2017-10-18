<template>
  <div class="registry-container">
    <v-header :title="$route.params.type == 'registry'?'注册':'忘记密码'"></v-header>
    <div class="content-container" v-if="isShowPassPage">
      <group :gutter="0">
        <x-input v-model="tel" :required="true" ref="tel" placeholder="请输入手机号" class="v-input"  :max="13" is-type="china-mobile">
          <span slot="label" class="title-slot vux-1px-r">+86</span>
        </x-input>
        <x-input v-model="vCode" :required="true" placeholder="请输入验证码" class="v-input" ref="vCode">
          <x-button slot="right" mini @click.native="sendVCode">{{sendCode}}</x-button>
        </x-input>
      </group>
      <button class="next-step" @click="nextStep" v-if="$route.params.type == 'registry'">下一步</button>
      <button class="next-step" @click="fgpwNextStep" v-else>下一步</button>
    </div>
    <div class="content-container" v-else>
      <group :gutter="0">
        <x-input v-model="newPassword" placeholder="请输入新密码" class="v-input" :type='passwordType' :min="6" :max="18" :required="true" ref="newPW">
          <img slot="right" :src="isPasswordAvalible" @click="changePasswordType" alt="">
        </x-input>
      </group>
      <button class="next-step" @click="ensurePassword">确定</button>
    </div>
  </div>
</template>
<script>
  import VHeader from './header'
  import { Group, XInput, XButton, Cell } from 'vux'
  import { mapActions } from 'vuex'
  export default {
    name: 'sureRegistry',
    data () {
      return {
        title: '注册',
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
      ...mapActions([
        'LoginByPhone',
        'ForgetPassword'
      ]),
      // 注册下一步操作
      nextStep () {
        let self = this
        if (!self.$refs.tel.valid || !self.$refs.vCode.valid) {
          self.$vux.toast.text('请填写正确信息')
          return false
        }
        this.$router.push({
          path: '/sureRegistry',
          query: {tel: self.tel}
        })
      },
      // 忘记密码下一步操作
      fgpwNextStep () {
        let self = this
        let registryInfo = {
          phone: self.tel,
          authCode: self.vCode
        }
        if (!self.$refs.tel.valid || !self.$refs.vCode.valid) {
          self.$vux.toast.text('请填写正确信息')
          return false
        }
        self.LoginByPhone(registryInfo).then(() => {
          self.isShowPassPage = false
        })
      },
      sendVCode () {
        this.isSendCode = true
        if (this.isSendCode) {
          this.sendCode = '重新获取(' + this.waitTime + '秒)'
        }
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
        let self = this
        if (!self.$refs.newPW.valid) {
          self.$vux.toast.text('请填写正确信息')
          return false
        }
        self.ForgetPassword({password: self.newPassword})
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
