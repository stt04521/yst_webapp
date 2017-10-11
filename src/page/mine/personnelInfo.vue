<template>
  <div class="personnel-info-wrapper">
    <x-header title="个人资料" class="header">
    </x-header>
    <div class="personnel-info-container">
      <group class="user-info" :gutter="0">
        <cell value="编辑头像" is-link>
          <div slot="title">
            <img src="../../assets/news/userImg.jpg" class="avatar" alt="">
            <span class="name">李明友</span>
            <img src="../../assets/news/userImg.jpg" class="code" alt="">
          </div>
        </cell>
      </group>
      <group title="基本信息">
        <cell title="用户名" :value="infoList.spellName"></cell>
        <cell title="手机号" :value="infoList.tel"></cell>
        <cell title="Email" :value="infoList.Email"></cell>
      </group>
      <group title="组织信息" v-if="infoList.organize && infoList.organize.length > 0">
        <cell title="组织" :value="infoList.organize[0].name" is-link></cell>
        <cell title="工号" :value="infoList.organize[0].address"></cell>
        <cell title="部门" :value="infoList.organize[0].partMent"></cell>
        <cell title="职务" :value="infoList.organize[0].personPart"></cell>
      </group>
      <group v-if="infoList.id" title="身份信息">
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
        personnelAuthenticationInfo: {
          type: 'personnel',
          pageTitle: '身份认证',
          title01: '真实姓名',
          title02: '身份证号',
          title03: '资质证明',
          title04: '身份证'
        },
        infoList: {
          realName: '李明友',
          tel: '12233455666',
          Email: '1111@111.com',
          spellName: 'limingyou',
//          id: '326483920543572390451',
          sex: '女',
          organize: [
            {
              name: '武汉李宁游科技有限公司',
              address: '123132',
              partMent: '产品部',
              personPart: '产品助理'
            }
          ]
        }
      }
    },
    methods: {
      gotoAuthentication () {
        console.log('personnelInfo')
        this.$router.push({
          name: 'authentication',
          params: {
            type: 'personnel',
            paramList: this.personnelAuthenticationInfo
          }
        })
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
        .name{}
        .code{
          width: 20px;
          height: 20px;
          vertical-align: middle;
        }
      }
    }
  }
</style>
