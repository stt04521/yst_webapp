<template>
  <div class="organize-info-wrapper">
    <x-header title="组织信息" class="header">
    </x-header>
    <tab class="tab-container" active-color="#0099ff" :line-width="1">
      <tab-item selected @click.native="showBase">基本信息</tab-item>
      <tab-item @click.native="showAuthentication">认证信息</tab-item>
    </tab>
    <group :gutter="0" class="content-container" v-for="(item, index) in baseTitle" :key="index" v-show="baseInfo">
      <x-input :title="item.title" text-align="right"
               @click.native="changeLogo(index)"
               :readonly="isReadOnly || [0,1,2,3].indexOf(index) > -1"
               :placeholder="organizeDetail[0] && organizeDetail[0][item.value] ? organizeDetail[0][item.value] : ''"
      >
        <img slot="right" :src="organizeDetail[0] && organizeDetail[0].organizeLogo ? organizeDetail[0].organizeLogo : defaultLogo" alt="" v-if="index === 2" class="logo" @click="changeLogo">
      </x-input>
    </group>
    <div class="content-container" v-show="anthenticationInfo">
      <group :gutter="0"  style="margin-bottom: 20px">
        <cell title="认证状态">
          <span slot="value" v-show="anthenticationList.status === 1">已认证</span>
          <span slot="value" v-show="anthenticationList.status === 0">未认证<span style="color: #0099ff" @click="gotoAuthentication" v-show="isCreator">去认证>></span></span>
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
  import {XHeader, Tab, TabItem, Cell, Group, XInput} from 'vux'
  import {mapActions} from 'vuex'
  export default {
    name: 'organizeInfo',
    components: {
      XInput,
      XHeader,
      Tab,
      TabItem,
      Cell,
      Group
    },
    data () {
      return {
        defaultLogo: require('../../assets/default_organize_logo.png'),
        baseInfo: true,
        anthenticationInfo: false,
        isReadOnly: true,
        isCreator: false,
        organizeDetail: [],
        baseTitle: [
          {
            title: '组织类型',
            value: 'organizeType'
          },
          {
            title: '组织名称',
            value: 'organizeName'
          },
          {
            title: '组织logo',
            value: 'organizeLogo'
          },
          {
            title: '创建人',
            value: 'creator'
          },
          {
            title: '所在地区',
            value: 'address'
          },
          {
            title: '详细地址',
            value: 'address'
          },
          {
            title: '联系电话',
            value: 'phone'
          },
          {
            title: '联系邮箱',
            value: 'email'
          },
          {
            title: '公众号',
            value: ''
          }],
//        infoList: ['企业', '武汉黎宁游科技有限公司', '黎宁游科技', require('../../assets/news/userImg.jpg'), '李明友', '武汉市洪山区', '武汉市洪山区关山大道未来大厦1201', '1111111111111111111111111', '111@111.com', '武汉黎宁游科技有限公司'],
        anthenticationTitle: ['统一社会信用代码', '企业名称', '企业类型', '企业住所', '法定代表人', '注册资本', '成立时间', '经营范围'],
        anthenticationList: {
          status: 0,
          list: ['51264245MJK452163', '武汉黎宁游科技有限公司', '其他有限责任公司', '湖北省武汉市光谷大厦12楼1201', '李明友', '50(万元)', '2012-08-08', '企业管理咨询；企业形象策划；广告设计、制作、代理发布。']
        },
        organizeAuthenticationInfo: {
          pageTitle: '企业认证',
          title01: '统一社会信用代码',
          title02: '企业名称',
          title03: '资质证明',
          title04: '营业执照'
        }
      }
    },
    methods: {
      ...mapActions([
        'getMyInfoAction',
        'findPersonInfoByUserIdAction'
      ]),
      showBase () {
        this.anthenticationInfo = false
        this.baseInfo = true
      },
      showAuthentication () {
        this.baseInfo = false
        this.anthenticationInfo = true
      },
      gotoAuthentication () {
        this.$router.push({
          name: 'authentication',
          params: {
            type: 'etag',
            paramList: this.organizeAuthenticationInfo
          }
        })
      },
      changeLogo (idx) {
        if (idx === 2) {
          console.log('change logo')
        }
      }
    },
    async created () {
      let organizeId = this.$route.params.id
      let res = await this.getMyInfoAction()
      this.organizeDetail = res.organizeId.filter((item) => {
        return item.id === organizeId
      })
      if (res.userId === this.organizeDetail[0].creator) {
        this.isCreator = true
        this.isReadOnly = false
      }
      let creatordetail = await this.findPersonInfoByUserIdAction(this.organizeDetail[0].creator)
      this.organizeDetail[0].creator = creatordetail.data.result.realName
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
