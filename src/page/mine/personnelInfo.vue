<template>
  <div class="personnel-info-wrapper">
    <x-header title="个人资料" class="header">
    </x-header>
    <div class="personnel-info-container">
      <group class="user-info" :gutter="0">
        <cell value="编辑头像" is-link>
          <div slot="title">
            <img :src="infoList.portrait ? infoList.portrait : defaultAvatar" class="avatar" alt="">
            <span class="name">{{ infoList.realName }}</span>
            <img src="../../assets/erwei_code.png" class="code" alt="">
          </div>
        </cell>
      </group>
      <group title="基本信息">
        <cell title="用户名" :value="accountInfo.user"></cell>
        <cell title="手机号" :value="accountInfo.phone"></cell>
        <cell title="Email" :value="accountInfo.email"></cell>
      </group>
      <group v-show="organizeList">
        <group-title slot="title">组织信息<span style="float:right; color: #0099ff" @click="showMoreOrganize">更多组织>></span></group-title>
        <cell title="组织" :value="name"></cell>
        <cell title="工号" value="暂无数据"></cell>
        <cell title="部门" value="暂无数据"></cell>
        <cell title="职务" value="暂无数据"></cell>
      </group>
      <group v-if="infoList.authState" title="身份信息">
        <cell title="姓名" :value="infoList.realName"></cell>
        <cell title="性别" :value="infoList.sex"></cell>
        <cell title="身份证号" :value="infoList.id"></cell>
      </group>
      <group v-else>
        <group-title slot="title" class="vux-1px-b">
          身份信息（未认证）
          <span style="float:right; color: #0099ff" @click="gotoAuthentication">去认证>></span>
        </group-title>
      </group>
    </div>
  </div>
</template>
<script>
  import {XHeader, Group, Cell, GroupTitle} from 'vux'
  import {mapActions} from 'vuex'
//  import {eventBus} from '../../utils/eventBus'
  export default {
    name: 'personnelInfo',
    components: {
      XHeader,
      Group,
      Cell,
      GroupTitle
    },
    data () {
      return {
        orId: '',
        organizeList: [],
        choosedId: '',
        defaultAvatar: require('../../assets/default_organize_logo.png'),
        personnelAuthenticationInfo: {
          type: 'personnel',
          pageTitle: '身份认证',
          title01: '真实姓名',
          title02: '身份证号',
          title03: '资质证明',
          title04: '身份证'
        },
        infoList: {},
        accountInfo: {}
      }
    },
    methods: {
      ...mapActions([
        'GetSyncUserInfo',
        'GetMyInfo'
      ]),
      gotoAuthentication () {
        console.log('personnelInfo')
        this.$router.push({
          name: 'authentication',
          params: {
            type: 'personnel',
            paramList: this.personnelAuthenticationInfo
          }
        })
      },
      showMoreOrganize () {
        let orId
        if (this.$route.query.id) {
          orId = this.$route.query.id
        } else {
          orId = this.organizeList[0].id
        }
        this.$router.push({
          name: 'myOptionalOrganize',
          params: {
            id: orId
          }
        })
      },
      changeOrganize () {
        console.log('change organize')
      }
    },
    created () {
      this.infoList = this.$store.getters.myInfo
      this.organizeList = this.infoList.organizeId
      // 其他地方获取不到数据
//      let res = await this.GetMyInfo()
//      this.infoList = res
//      this.organizeList = res.organizeId
      this.GetSyncUserInfo().then((res) => {
        this.accountInfo = res
      }).catch((err) => {
        console.log(err)
      })
    },
    computed: {
      name () {
        if (this.$route.query.id) {
          let result = this.infoList.organizeId.filter(res => {
            return res.id === this.$route.query.id
          })
          return result[0].organizeName
        } else {
          return this.infoList.organizeId[0].organizeName
        }
      }
    }
  }
</script>
<style scoped lang="less">
  .personnel-info-wrapper{
    height: 100%;
    overflow: hidden;
    .personnel-info-container{
      heigth: 100%;
      overflow-y: auto;
      .user-info{
        font-size: 13px;
        .avatar{
          width: 50px;
          height: 50px;
          border-radius: 50%;
          vertical-align: middle;
        }
        .name{
          min-width: 50px;
          display: inline-block;
        }
        .code{
          width: 20px;
          height: 20px;
          vertical-align: middle;
        }
      }
    }
  }
</style>
