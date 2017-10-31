<template>
  <div class="organize-authenticate-wrapper">
    <x-header :title="pageTitle" class="header">
    </x-header>
    <group :gutter="0" class="content-container">
      <x-input
        :title="title01"
        placeholder="请输入"
        show-clear placeholder-align="right"
        text-align="right"
        v-model="creditCode"
      ></x-input>
      <x-input
        :title="title02"
        placeholder="请输入"
        show-clear placeholder-align="right"
        text-align="right"
        v-model="enterpriseName"
      ></x-input>
      <cell>
        <span slot="title">{{ title03 }}<span style="color: #aaa">(请上传{{ title04 }}原件照片)</span></span>
      </cell>
      <div class="authentication-container vux-1px-t">
        <img class="img-style" v-for="(item, index) in imgList" :key="index" :src="item.image" alt="">
        <img class="img-style" src="../../assets/default_img.png" @click="upLoadImg">
      </div>
    </group>
    <actionsheet v-model="showUploadChoose" :menus="menusList" @on-click-menu="showAction" show-cancel></actionsheet>
    <button class="btn" :class="creditCode.length > 0 && enterpriseName.length > 0 && imgList.length > 0 ? 'submit': ''" @click="submitCertificate">提交</button>
  </div>
</template>
<script>
  import {XHeader, Group, Cell, XInput, Actionsheet} from 'vux'
  import {mapActions} from 'vuex'
  export default {
    name: 'authentication',
    components: {
      XHeader,
      Group,
      Cell,
      XInput,
      Actionsheet
    },
    data () {
      return {
        creditCode: '',
        enterpriseName: '',
        showUploadChoose: false,
        pageTitle: '111',
        title01: '',
        title02: '',
        title03: '',
        title04: '',
        type: '',
        imgList: [
          {
            image: require('../../assets/yingyezhizhao.png')
          },
          {
            image: require('../../assets/yingyezhizhao.png')
          }
        ],
        menusList: [
          {
            label: '拍照'
          },
          {
            label: '相册'
          }
        ]
      }
    },
    methods: {
      ...mapActions([
        'identityVerification',
        'organizeVerification'
      ]),
      upLoadImg () {
        console.log('upLoadImg')
        this.showUploadChoose = true
      },
      submitCertificate () {
        console.log(this.creditCode)
        console.log(this.enterpriseName)
        console.log(this.imgList)
        if (this.$route.params.type === 'etag') {
          let paramsData = {
            organizeName: this.enterpriseName,
            creditCode: this.creditCode,
            organizeLicense: ''
          }
          this.organizeVerification(paramsData).then((res) => {
            console.log(res)
          }).catch(err => console.log(err))
        } else if (this.$route.params.type === 'personnel') {
          let paramsData = {
            IdentityCard: this.creditCode,
            IdentityName: this.enterpriseName,
            IdentityCardImg: ''
          }
          console.log('paramsData: ', paramsData)
          this.identityVerification(paramsData).then((res) => {
            console.log(res)
          }).catch((err) => {
            console.log(err)
          })
        } else {
          console.log('error')
        }
      },
      showAction (key, item) {
        console.log('show action')
        console.log(item)
      }
    },
    created () {
      let titleList = this.$route.params.paramList
      this.pageTitle = titleList.pageTitle
      this.title01 = titleList.title01
      this.title02 = titleList.title02
      this.title03 = titleList.title03
      this.title04 = titleList.title04
    }
  }
</script>
<style scoped lang="less">
  .organize-authenticate-wrapper{
    height:100%;
    overflow: hidden;
    font-size: 13px;
    font-weight: 100;
    position: relative;
    .authentication-container{
      width: 100%;
      height: 200px;
      padding-left: 30px;
      .img-style{
        width: 106px;
        height: 156px;
      }
    }
    .btn{
      width: 355px;
      height: 45px;
      line-height: 45px;
      background-color: #ccc;
      border: none;
      border-radius: 4px;
      position: absolute;
      left: 10px;
      bottom: 20px;
      color: #fff;
      &.submit{
        background-color: #0099ff;
      }

    }

  }
</style>
