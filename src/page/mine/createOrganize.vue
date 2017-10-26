<template>
  <div class="create-organize-wrapper">
    <x-header title="创建组织" class="header">
    </x-header>
    <div class="create-organize-container">
      <group :gutter="0" class="content-container">
        <x-input class="reset-padding"
                 title="组织名称"
                 v-model="organizeName"
                 placeholder="至少两个字符"
                 show-clear placeholder-align="right"
                 text-align="right"
        >
        </x-input>
        <cell class="reset-padding" title="组织类型" :value="type" is-link @click.native="changeType" :border-intent="false"></cell>
        <x-address title="所在地区" v-model="area" :list="addressData" placeholder="必填"></x-address>
      </group>
      <button class="btn" :class="organizeName.length > 2 && area.length > 0 && type !== '必填' ? 'create' : ''" @click="createorganize">创建组织</button>
      <actionsheet v-model="showTypeChoose" :menus="typeList" @on-click-menu="chooseType" show-cancel></actionsheet>

    </div>

  </div>
</template>
<script>
  import {XHeader, Group, XInput, Cell, Actionsheet, XAddress, ChinaAddressV4Data, Value2nameFilter as value2name} from 'vux'
  import {mapActions} from 'vuex'
  export default {
    name: 'createOrganize',
    components: {
      XHeader,
      Group,
      XInput,
      Cell,
      Actionsheet,
      XAddress
    },
    data () {
      return {
        organizeName: '',
        type: '必填',
        area: [],
        showTypeChoose: false,
        addressData: ChinaAddressV4Data,
        typeList: [
          {
            label: '企业'
          },
          {
            label: '社会团体'
          },
          {
            label: '事业单位'
          },
          {
            label: '政府机构'
          },
          {
            label: '自有团体'
          },
          {
            label: '家庭'
          }
        ]
      }
    },
    methods: {
      ...mapActions([
        'createOrganize'
      ]),
      verificate () {
        console.log(this.organizeName.length)
      },
      changeType () {
        console.log('changeType')
        this.showTypeChoose = true
      },
      chooseType (key, item) {
        console.log('chooseType')
        this.type = item.label
      },
      changeArea () {
        console.log('changeArea')
      },
      createorganize () {
        console.log('1111')
        if (this.organizeName.length > 2 && this.area.length > 0 && this.type !== '必填') {
          let paramsData = {
            organizeType: this.type,
            organizeName: this.organizeName,
            address: value2name(this.area, ChinaAddressV4Data)
          }
          console.log('params data: ', paramsData)
          this.createOrganize(paramsData).then((res) => {
            this.$router.push({
              name: 'myOrganize'
            })
            console.log('createOrganize page: ', res)
          }, (err) => {
            console.log(err)
          })
        }
      }
    }
  }
</script>
<style scoped lang="less">
  .create-organize-wrapper{
    height: 100%;
    overflow: hidden;
    .create-organize-container{
      text-align: center;
      .content-container{
        text-align: left;
        .reset-padding{
          padding-top: 25px;
          padding-bottom: 25px;
        }
      }
      .btn{
        width: 355px;
        height: 45px;
        line-height: 45px;
        border-radius: 4px;
        background-color: #ccc;
        border: none;
        margin-top: 10px;
        color: #fff;
        &.create{
          background-color: #0099ff;
        }
      }
    }
  }
</style>
