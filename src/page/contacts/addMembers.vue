<template>
  <div class="hello">
    <x-header
      title="添加成员"
    >
      <span slot="right" style="font-size: 17px; color: #fff" @click="addMember">
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
        :autoFixed="false"
        v-model="value"
        class="search"
      >
      </search>
      <contact-list type="Friends" select="true" :list="FriendGroup" :userId="$route.query.userId" ref="Friends"></contact-list>
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
        msg: 'Welcome to Your Vue.js App',
        value: ''
      }
    },
    created () {
      this.getAllGroup()
      console.log(this.$route.query)
    },
    methods: {
      ...mapActions([
        'GetFriendGroup',
        'AddGroupMembers'
      ]),
      getAllGroup () {
        let self = this
        self.GetFriendGroup().then(res => {
          self.FriendGroup = res
        })
      },
      addMember () {
        let self = this
        let userId = self.$refs.Friends.result.choosedList.map(item => { return item.userId })
        let request = {
          groupId: self.$route.query.id,
          userId: userId
        }
        self.AddGroupMembers(request).then((res) => {
          self.$router.push('/contacts')
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
