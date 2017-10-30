<template>
  <div class="input-info-wrapper">
    <x-header :title="infoList.title"></x-header>
    <group :gutter="0" class="input-container">
      <x-input :title="infoList.title01" v-model="tel" :placeholder="infoList.value01" class="normal-font"></x-input>
      <x-input v-show="isShowTestcode" :title="infoList.title02" v-model="testCode" :placeholder="infoList.value02"  class="normal-font">
        <x-button slot="right" type="default" mini>发送验证码</x-button>
      </x-input>
      <x-input v-show="isShowNewPsw" :title="infoList.title02" v-model="newPassword" :placeholder="infoList.value02" class="normal-font" :type='passwordType'>
        <img slot="right" :src="isPasswordAvalible" @click="changePasswordType">
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
  import {mapActions} from 'vuex'
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
        tel: '',
        testCode: '',
        isWatchPw: false,
        passwordType: 'password',
        isPasswordAvalible: require('../../assets/un_watch.png'),
        newPassword: '',
        infoList: {},
        setType: '',
        isShowTestcode: false,
        isShowNewPsw: false
      }
    },
    created () {
      let paramList = this.$route.params
      this.infoList = paramList.setInfo
      this.setType = paramList.setType
      if (this.setType === 'SET_TEL') {
        this.isShowNewPsw = false
        this.isShowTestcode = true
      } else if (this.setType === 'SET_PSW') {
        this.isShowTestcode = false
        this.isShowNewPsw = true
      } else {
        this.isShowTestcode = false
        this.isShowNewPsw = false
      }
    },
    methods: {
      ...mapActions([
        'editEmailOrPhone',
        'ForgetPassword',
        'changePassword'
      ]),
      ensureInfo () {
        // 根据setType值的不同，处理不同的提交事件
//        console.log(this.tel)
//        console.log(this.testCode)
        if (this.setType === 'SET_TEL') {
          let paramsData = {
            type: 'phone',
            phone: this.tel
          }
          this.editEmailOrPhone(paramsData).then((res) => {
            this.$router.push({
              name: 'countSafe'
            })
          }, (err) => {
            console.log(err)
          })
        }
        if (this.setType === 'SET_EMAIL') {
          let paramsData = {
            type: 'email',
            email: this.tel
          }
          this.editEmailOrPhone(paramsData).then((res) => {
            this.$router.push({
              name: 'countSafe'
            })
          }, (err) => {
            console.log(err)
          })
        }
        if (this.setType === 'SET_PSW') {
          let paramsData = {
            password: this.tel,
            newPassword: this.newPassword
          }
          console.log('input info password: ', paramsData)
          this.changePassword(paramsData).then((res) => {
            console.log('input info : ', res)
          }, (err) => {
            console.log(err)
          })
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
      }
    }
  }
</script>
<style scoped lang="less">
  .input-info-wrapper{
    height: 100%;
    .normal-font{
      font-size: 14px;
    }
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
