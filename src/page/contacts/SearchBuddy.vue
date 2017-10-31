<template>
  <div>
    <flexbox class="flex">
      <flexbox-item :span="1" class="img" @click.native="onBack"><img :src="backSrc" class="back"></flexbox-item>
      <flexbox-item>
        <search
        @result-click="resultClick"
        @on-change="getResult"
        :results="results"
        :autoFixed="autoFixed"
        :placeholder="placeholder"
        v-model="value"
        @on-focus="onFocus"
        @on-cancel="onCancel"
        @on-submit="onSubmit"
        ref="search">
        </search>
      </flexbox-item>
    </flexbox>
    <contact-list v-show="$route.params.type == 'search' && isShow" type="Friends"></contact-list>
    <Group v-show="$route.params.type == 'addFriends' && isShow">
      <cell>
        <span slot="title">{{userInfo.name}}</span>
        <img slot="icon" width="40" style="display:block;margin-right:25px;" :src="userInfo.portrait">
        <x-button mini plain @click.native="AddFriend">加为好友</x-button>
      </cell>
    </Group>
  </div>
</template>

<script>
  import { Search, Group, Cell, XButton, Flexbox, FlexboxItem, Divider } from 'vux'
  import contactList from './contactList.vue'
  import {mapActions} from 'vuex'
  export default {
    components: {
      Search,
      Group,
      Cell,
      XButton,
      Flexbox,
      FlexboxItem,
      Divider,
      contactList
    },
    computed: {
      placeholder () {
        console.log(this.$route.params.type)
        if (this.$route.params.type === 'search') {
          return '搜索'
        } else {
          return '请输入好友手机号或姓名'
        }
      }
    },
    methods: {
      ...mapActions([
        'FindUserByPhone',
        'GetDefaultGroup',
        'FriendAddFriend',
        'FuzzySearch'
      ]),
      setFocus () {
        this.$refs.search.setFocus()
      },
      resultClick (item) {
        window.alert('you click the result item: ' + JSON.stringify(item))
      },
      getResult (val) {
        let self = this
        if (!this.value) return
        if (self.$route.params.type === 'search') {
          self.FuzzySearch(val).then(res => {
            console.log(res)
          })
        } else {
          self.FindUserByPhone(val).then(res => {
            self.userInfo = res
            self.isShow = true
          })
        }
      },
      onSubmit () {
        this.$refs.search.setBlur()
        this.$vux.toast.show({
          type: 'text',
          position: 'top',
          text: 'on submit'
        })
      },
      onFocus () {
        console.log('on focus')
      },
      onCancel () {
        console.log('on cancel')
      },
      onBack () {
        this.$router.go(-1)
      },
      AddFriend () {
        let self = this
        self.GetDefaultGroup().then(res => {
          console.log(self.userInfo)
          let request = {
            friendId: self.userInfo.userId,
            friendGroupId: res.id
          }
          self.FriendAddFriend(request).then(res => {
            self.$router.push('/contacts')
          })
        })
      }
    },
    data () {
      return {
        results: [],
        isShow: false,
        userInfo: {},
        value: '',
        autoFixed: false,
        backSrc: require('@/assets/contacts/back.png')
      }
    }
  }
</script>

<style scoped lang="less">
  .flex{
    background-color: #EFEFF4;
    .img{
      padding: 8px 10px;
      height: 28px;
      .back{
        height: 28px;
      }
    }
  }
</style>
