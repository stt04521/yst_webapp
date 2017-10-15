<template>
  <div class="gruopManage">
    <actionsheet v-model="show3" :menus="menus3" @on-click-menu="click" @on-click-menu-delete="onDelete" show-cancel></actionsheet>
    <x-header>分组管理</x-header>
    <group>
      <cell>
        <span slot="title">添加分组</span>
        <img slot="icon" @click.stop="showPlugin" class="gm_icon" :src="require('@/assets/contacts/add.jpg')" >
      </cell>
      <draggable element="div" v-model="msg" >
        <cell v-for="(item, index) in msg" :key="item">
          <span slot="title" :class="index == 0 ? 'close' :''">{{item}}</span>
          <img slot="icon" v-if="index != 0" class="gm_icon" :src="require('@/assets/contacts/remove.jpg')" @click.stop="onDele">
          <img class="gm_icon" :src="require('@/assets/contacts/sort.jpg')">
        </cell>
      </draggable>
    </group>
    <div class="button_group">
      <x-button class="blue_bg">确认</x-button>
    </div>
  </div>
</template>

<script>
  import { Cell, CellBox, Group, Badge, XHeader, XButton, Actionsheet } from 'vux'

  import draggable from 'vuedraggable'
  export default {
    components: {
      draggable,
      Group,
      Cell,
      CellBox,
      Badge,
      XHeader,
      XButton,
      Actionsheet
    },
    data () {
      return {
        msg: ['1', '2', '3'],
        show3: false,
        menus3: {
          title: '<p style="color:#666666;font-size: 14px">选定的分组将被删除</p><p style="color:#A199A1;font-size: 8px"> 组内联系人将会移到默认分组“好友”</p>',
          delete: '<span style="color:red">确定删除</span>'
        }
      }
    },
    methods: {
      showPlugin () {
//        const _this = this
        this.$vux.confirm.prompt('请输入分组名', {
          title: '添加分组',
          content: '<span>sss</span>',
          onShow () {
            console.log('promt show')
//            _this.$vux.confirm.setInputValue('请输入分组名')
          },
          onHide () {
            console.log('prompt hide')
          },
          onCancel () {
            console.log('prompt cancel')
          },
          onConfirm (msg) {
          }
        })
      },
      onDele () {
        this.show3 = true
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less">
  .gruopManage {
    .close{
      margin-left:35px;
    }
    .weui-cells__title{
      color: black;
    }
    .vux-no-group-title{
      margin-top: 0 !important;
    }
    .weui-cells{
      margin-top: 0 !important;
    }
    .gm_icon{
      width: 20px;
      display:block;
      margin-right:15px;
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
