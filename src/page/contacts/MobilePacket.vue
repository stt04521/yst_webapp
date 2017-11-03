<template>
  <div class="Info">
    <x-header>移动分组</x-header>
    <group >
      <group >
        <radio :options="FriendGroup" @on-change="change"></radio>
      </group>
    </group>
    <div class="button_group">
      <x-button class="blue_bg" @click.native="onSure">确认</x-button>
    </div>
  </div>
</template>

<script>
  import { Cell, CellBox, Group, Badge, XHeader, XButton, Radio } from 'vux'
  import { mapActions } from 'vuex'
  export default {
    mounted () {
    },
    components: {
      Group,
      Cell,
      CellBox,
      Badge,
      XHeader,
      XButton,
      Radio
    },
    created () {
      this.getAllGroup()
    },
    methods: {
      ...mapActions([
        'GetFriendGroup',
        'MoveFriendToGroup'
      ]),
      change (value, label) {
        this.GroupId = value
        console.log('change:', value, label)
      },
      onSure () {
        let self = this
        let request = {
          friendId: self.$route.query.id,
          friendGroupId: self.GroupId
        }
        self.MoveFriendToGroup(request).then(res => {
          self.$vux.toast.show({
            type: 'success',
            text: '移动成功'
          })
          self.$router.push('/contacts')
        })
      },
      getAllGroup () {
        let self = this
        self.GetFriendGroup().then(res => {
          self.FriendGroup = res.map(item => {
            return {
              value: item.name,
              key: item.id
            }
          })
          console.log(res)
        })
      }
    },
    data () {
      return {
        GroupId: '',
        FriendGroup: []
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
    .weui-cells_radio .weui-check:checked + .weui-icon-checked{
      &:before{
        color: #008EE5;
      }
    }
  }
</style>
