<template>
  <div class="Info">
    <x-header
      title="好友资料"
    >
      <span slot="overwrite-left" @click="goBack" class="header-left-title">＜返回</span>
    </x-header>
    <group>
      <cell>
        <span slot="title">{{contactInfo.realName || '未填写'}}</span>
        <img slot="icon" width="40" style="display:block;margin-right:25px;" :src="baseurl + contactInfo.portrait">
      </cell>
    </group>
    <group title="基本信息">
      <cell title="手机号">
        <div slot="value">
          <span class="f_b">{{contactInfo.phone}}</span>
        </div>
      </cell>
      <cell title="Email">
        <div slot="value">
          <span class="f_b">{{contactInfo.email || '未填写'}}</span>
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
          <span class="f_b">{{contactInfo.realName || '未填写'}}</span>
        </div>
      </cell>
      <cell title="性别">
        <div slot="value">
          <span class="f_b">{{contactInfo.sex || '未填写'}}</span>
        </div>
      </cell>
    </group>
    <div class="button_group">
      <x-button class="blue_bg" @click.native="onJutmp({path: `/newsPage/${contactInfo.realName}`, query: {id: $route.query.id, type: 0}})">发消息</x-button>
      <x-button class="blue_bg" v-if="$route.params.type == 'Colleague'">加为好友</x-button>
    </div>

  </div>
</template>

<script>
  import { Cell, CellBox, Group, Badge, XHeader, XButton } from 'vux'
  import { mapActions } from 'vuex'
  export default {
    created () {
      let self = this
      self.FriendData(self.$route.query.id).then(res => {
        self.contactInfo = res
      })
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
      ...mapActions([
        'FriendData'
      ]),
      onClick () {
        console.log('on click')
      },
      onJutmp (url) {
        this.$router.push(url)
      },
      goBack () {
        let idx
        if (this.$route.path.indexOf('Friends') > -1) {
          idx = 0
        }
        if (this.$route.path.indexOf('Colleague') > -1) {
          idx = 1
        }
        this.$router.push({
          name: 'contacts',
          query: {
            index: idx
          }
        })
      }
    },
    data () {
      return {
        baseurl: 'http://192.168.0.12:7000',
        contactInfo: {}
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
