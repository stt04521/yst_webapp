<template>
  <div class="hello">
    <x-header
      title="添加成员"
    >
      <span slot="right" style="font-size: 17px; color: #fff">
        确认
      </span>
    </x-header>
    <div class="addMem">
      <div class="group_list">
        <span>选择群成员:</span>
        <div class="fr" >
          <div style="width: 1111px">
            <img slot="icon"  src="../../assets/news/userImg.jpg" v-for="i in 11">
          </div>
        </div>

      </div>
      <search
        @result-click="resultClick"
        @on-change="getResult"
        :results="results"
        :autoFixed="false"
        :placeholder="placeholder"
        v-model="value"
        @on-focus="onFocus"
        @on-cancel="onCancel"
        @on-submit="onSubmit"
        ref="search"
        class="search"
      >
      </search>
      <contact-list type="Friends" select="true" :list="FriendGroup"></contact-list>
    </div>
  </div>
</template>

<script>
  import { XHeader, Flexbox, FlexboxItem, Cell, Group, XSwitch, XButton, Search } from 'vux'
  import { mapActions } from 'vuex'
  import contactList from './contactList'
  export default {
    components: {
      Search,
      XHeader,
      Flexbox,
      FlexboxItem,
      Cell,
      Group,
      XSwitch,
      XButton,
      contactList
    },
    data () {
      return {
        FriendGroup: [],
        msg: 'Welcome to Your Vue.js App'
      }
    },
    created () {
      this.getAllGroup()
    },
    methods: {
      ...mapActions([
        'GetFriendGroup'
      ]),
      getAllGroup () {
        let self = this
        self.GetFriendGroup().then(res => {
          self.FriendGroup = res
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less">
  body{
    background-color: white !important;
  }
  .addMem{
    .group_list{
      padding: 10px;
      .fr{
        width: 78%;
        overflow: auto;
      }
      img{
        width: 30px;
        display:inline-block;
        padding-right:2px;
      }
    }
    .search{
      margin-top: 10px;
    }
  }
</style>
