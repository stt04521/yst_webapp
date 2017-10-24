<template>
  <div class="gruopManage">
    <actionsheet v-model="show3" :menus="menus3"  show-cancel @on-click-menu-delete="onDelete"></actionsheet>
    <x-header>分组管理</x-header>
    <group>
      <cell>
        <span slot="title">添加分组</span>
        <img slot="icon" @click.stop="showPlugin" class="gm_icon" :src="require('@/assets/contacts/add.jpg')" >
      </cell>
      <draggable element="div" v-model="FriendGroup" @update="datadragEnd">
        <cell v-for="(item, index) in FriendGroup" :key="item.id">
          <span slot="title" :class="index == 0 ? 'close' :''">{{item.name}}</span>
          <img slot="icon" v-if="index != 0" class="gm_icon" :src="require('@/assets/contacts/remove.jpg')" @click.stop="onDele(item.id)">
          <img class="gm_icon" :src="require('@/assets/contacts/sort.jpg')">
        </cell>
      </draggable>
    </group>

  </div>
</template>

<script>
  import { Cell, CellBox, Group, Badge, XHeader, XButton, Actionsheet } from 'vux'
  import { mapActions } from 'vuex'
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
        FriendGroup: [],
        delId: '',
        show3: false,
        menus3: {
          title: '<p style="color:#666666;font-size: 14px">选定的分组将被删除</p><p style="color:#A199A1;font-size: 8px"> 组内联系人将会移到默认分组“好友”</p>',
          delete: '<span style="color:red">确定删除</span>'
        }
      }
    },
    created () {
      this.getAllGroup()
    },
    methods: {
      ...mapActions([
        'GetFriendGroup',
        'FriendGetGroup',
        'GroupSortGroup',
        'FriendAddGroup',
        'FriendDelGroup'
      ]),
      getAllGroup () {
        let self = this
        self.GetFriendGroup().then(res => {
          self.FriendGroup = res
        })
      },
      showPlugin () {
        let self = this
        this.$vux.confirm.prompt('请输入分组名', {
          title: '添加分组',
          onConfirm (msg) {
            self.FriendAddGroup(msg).then(res => {
              self.getAllGroup()
            })
          }
        })
      },
      onDele (id) {
        this.delId = id
        this.show3 = true
      },
      onDelete () {
        let self = this
        self.FriendDelGroup(self.delId).then(res => {
          self.getAllGroup()
        })
      },
      datadragEnd () {
        let self = this
        let idList = this.FriendGroup.map(item => {
          return item.id
        })
        self.GroupSortGroup(idList).then(res => {
          self.getAllGroup()
        })
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
