<template>
  <div class="edit-organize-wrapper">
    <x-header title="组织基本信息">
      <span slot="overwrite-left" @click="goBack">取消</span>
      <span slot="right" @click="updateOrganizeInfo">确定</span>
    </x-header>
    <div class="edit-container">
      <group :gutter="0" class="content-container" v-for="(item, index) in baseTitle" :key="index">
        <x-input :title="item.title" text-align="right"
                  @click.native="changeLogo(index)"
                  :readonly="[0,1,2,3].indexOf(index) > -1"
                  :placeholder="$store.state.mine.currentOrganize[item.value] || ''"
                  :show-clear="false"
                  @on-focus="focus(item)"
                  @on-blur="blur"

        >
          <img slot="right" width="24px" height="24px" :src="$store.state.mine.currentOrganize.organizeLogo || defaultLogo" alt="" v-if="index === 2" class="logo">
        </x-input>
      </group>
    </div>
  </div>

</template>
<script>
  import {XHeader, Group, XInput} from 'vux'
  import {mapActions} from 'vuex'
  export default{
    name: 'editOrganizeInfo',
    components: {
      XHeader,
      Group,
      XInput
    },
    data () {
      return {
        defaultLogo: require('../../assets/default_organize_logo.png'),
        itemKey: '',
        params: {},
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
            value: 'street'
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
            value: 'account'
          }]
      }
    },
    methods: {
      ...mapActions([
        'updateOrganizeInfoAction'
      ]),
      changeLogo (idx) {
        if (idx === 2) {
          console.log('change logo')
        }
      },
      goBack () {
        this.$router.go(-1)
      },
      updateOrganizeInfo () {
        let paramsData = {
          id: this.$store.state.mine.currentOrganize.id,
          params: this.params
        }
        this.updateOrganizeInfoAction(paramsData).then((res) => {
          this.$router.go(-1)
        }).catch((err) => {
          console.log(err)
        })
      },
      focus (item) {
        this.itemKey = item.value
      },
      blur (val) {
        if (val.trim() === '') {
          return
        } else {
          this.params[this.itemKey] = val
        }
        console.log(this.params)
      }
    },
    created () {
      console.log(this.$store.state.mine.currentOrganize)
    }
  }
</script>
<style scoped lang="less">
  .edit-organize-wrapper{
    height: 100%;
    overflow: hidden;
  }
</style>
