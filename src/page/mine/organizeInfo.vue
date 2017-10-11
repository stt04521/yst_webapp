<template>
  <div class="organize-info-wrapper">
    <x-header title="组织认证" class="header">
    </x-header>
    <tab class="tab-container" active-color="#0099ff" :line-width="1">
      <tab-item selected @click.native="showBase">基本信息</tab-item>
      <tab-item @click.native="showAuthentication">认证信息</tab-item>
    </tab>
    <group :gutter="0" class="content-container" v-for="(item, index) in infoList" :key="index" v-show="baseInfo">
      <cell :title="baseTitle[index]">
        <img :src="item" alt="" v-if="index === 3" class="logo">
        <span slot="value" v-else style="font-size: 14px">{{ item }}</span>
      </cell>
    </group>
    <div class="content-container" v-show="anthenticationInfo">
      <group :gutter="0"  style="margin-bottom: 20px">
        <cell title="认证状态">
          <span slot="value" v-show="anthenticationList.status === 1">已认证</span>
          <span slot="value" v-show="anthenticationList.status === 0">未认证<span style="color: #0099ff">去认证>></span></span>
        </cell>
      </group>
      <group :gutter="0" v-show="anthenticationList.status === 1" v-for="(item, index) in anthenticationList.list" :key="index">
        <cell :title="anthenticationTitle[index]" align-items="flex-start">
          <span slot="value" style="font-size: 14px">{{ item }}</span>
        </cell>
      </group>
    </div>
  </div>
</template>
<script>
  import {XHeader, Tab, TabItem, Cell, Group} from 'vux'
  export default {
    name: 'organizeInfo',
    components: {
      XHeader,
      Tab,
      TabItem,
      Cell,
      Group
    },
    data () {
      return {
        baseInfo: true,
        anthenticationInfo: false,
        baseTitle: ['组织类型', '组织名称', '组织简称', '组织logo', '创建人', '所在地区', '详细地址', '联系电话', '联系邮箱', '公众号'],
        infoList: ['企业', '武汉黎宁游科技有限公司', '黎宁游科技', require('../../assets/news/userImg.jpg'), '李明友', '武汉市洪山区', '武汉市洪山区关山大道未来大厦1201', '1111111111111111111111111', '111@111.com', '武汉黎宁游科技有限公司'],
        anthenticationTitle: ['统一社会信用代码', '企业名称', '企业类型', '企业住所', '法定代表人', '注册资本', '成立时间', '经营范围'],
        anthenticationList: {
          status: 1,
          list: ['51264245MJK452163', '武汉黎宁游科技有限公司', '其他有限责任公司', '湖北省武汉市光谷大厦12楼1201', '李明友', '50(万元)', '2012-08-08', '企业管理咨询；企业形象策划；广告设计、制作、代理发布。']
        }
      }
    },
    methods: {
      showBase () {
        this.anthenticationInfo = false
        this.baseInfo = true
      },
      showAuthentication () {
        this.baseInfo = false
        this.anthenticationInfo = true
      }
    }
  }
</script>
<style scoped lang="less">
  .organize-info-wrapper {
    height: 100%;
    .tab-container{}
    .content-container{
      .logo{
        width: 27px;
        height: 27px;
        border-radius: 4px;
      }
    }
  }
</style>
