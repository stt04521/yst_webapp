<template>
  <div class="Info">
    <x-header>好友资料</x-header>
    <group>
      <cell>
        <span slot="title">General</span>
        <img slot="icon" width="40" style="display:block;margin-right:25px;" src="../../assets/news/userImg.jpg">
      </cell>
    </group>
    <group title="基本信息">
      <cell title="手机号">
        <div slot="value">
          <span class="f_b">{{'132-1254-1536'}}</span>
        </div>
      </cell>
      <cell title="Email">
        <div slot="value">
          <span class="f_b">{{'未填写'}}</span>
        </div>
      </cell>
    </group>
    <group title="组织信息" v-if="$route.params.type == 'Colleague'">
      <cell title="工号">
        <div slot="value">
          <span class="f_b">{{'123456'}}</span>
        </div>
      </cell>
      <cell title="部门">
        <div slot="value">
          <span class="f_b">{{'产品部'}}</span>
        </div>
      </cell>
      <cell title="职务">
        <div slot="value">
          <span class="f_b">{{'产品助理'}}</span>
        </div>
      </cell>
    </group>
    <group title="身份信息">
      <cell title="姓名">
        <div slot="value">
          <span class="f_b">{{'李明友'}}</span>
        </div>
      </cell>
      <cell title="性别">
        <div slot="value">
          <span class="f_b">{{'男'}}</span>
        </div>
      </cell>
      <cell title="身份证号">
        <div slot="value">
          <span class="f_b">{{'420443****1254'}}</span>
        </div>
      </cell>
    </group>
    <div class="button_group">
      <x-button class="blue_bg">发消息</x-button>
      <x-button class="blue_bg" v-if="$route.params.type == 'Colleague'">加为好友</x-button>
    </div>

  </div>
</template>

<script>
  import { Cell, CellBox, Group, Badge, XHeader, XButton } from 'vux'

  export default {
    mounted () {
      setTimeout(() => {
        this.money = -1024
      }, 2000)
    },
    components: {
      Group,
      Cell,
      CellBox,
      Badge,
      XHeader,
      XButton
    },
    methods: {
      onClick () {
        console.log('on click')
      }
    },
    data () {
      return {
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
  }
</style>
