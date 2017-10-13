<template>
  <div class="count-safe-wrapper">
    <x-header title="帐号安全"></x-header>
    <group :gutter="0">
      <cell title="用户名" value="limingyou" class="cell-item"></cell>
      <cell title="手机号" value="15236478934" class="cell-item" @click.native="changeInfo('tele')"></cell>
      <cell title="Email" value="未绑定" class="cell-item" @click.native="changeInfo('email')"></cell>
      <cell title="密码" value="*****" class="cell-item" @click.native="changeInfo('password')"></cell>
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
        dataList: {},
        setType: '',
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
        ],
        setTel: {
          title: '手机号',
          title01: '新手机号',
          value01: '请输入新的手机号',
          title02: '验证码',
          value02: '请输入验证码'
        },
        setPsw: {
          title: '密码',
          title01: '原密码',
          value01: '请输入原密码',
          title02: '新密码',
          value02: '请输入新密码'
        },
        setEmail: {
          title: '邮箱',
          title01: 'Email',
          value01: '请输入邮箱地址'
        }
      }
    },
    components: {
      XHeader,
      Group,
      Cell
    },
    methods: {
      changeInfo (val) {
        console.log(val)
        if (val === 'tele') {
          this.dataList = this.setTel
          this.setType = 'tel'
        }
        if (val === 'email') {
          this.dataList = this.setEmail
          this.setType = 'email'
        }
        if (val === 'password') {
          this.dataList = this.setPsw
          this.setType = 'password'
        }
        this.$router.push({
          name: 'inputInfo',
          params: {
            setType: this.setType,
            setInfo: this.dataList
          }
        })
      }
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
