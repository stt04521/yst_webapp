<template>
  <div class="contacts">
    <router-link to="/SearchBuddy/search">
      <search @on-submit="onSubmit" :auto-fixed="autoFixed" @on-focus="onFocus" @on-cancel="onCancel"></search>
    </router-link>
    <div>
      <tab :line-width=2 active-color='#008EE5' v-model="index">
        <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
      </tab>
      <swiper v-model="index" :height="height + 'px'" :show-dots="false">
        <swiper-item>
          <contact-list type="Friends" :list="FriendGroup" v-on:refresh="getAllGroup"></contact-list>
        </swiper-item>
        <swiper-item>
          <contact-list type="Colleague"></contact-list>
        </swiper-item>
        <swiper-item>
          <contact-list type="GroupChat" :list="ChatGroup" v-on:refresh="getChatGroup"></contact-list>
        </swiper-item>
      </swiper>
      <!--<div class="content">-->
        <!--<contact-list v-show="isHailFellow"></contact-list>-->
        <!--<contact-list v-show="isColleague"></contact-list>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>
  import { Search, Tab, TabItem, Swiper, SwiperItem } from 'vux'
  import contactList from './contactList.vue'
  import {mapActions} from 'vuex'
  const list = () => ['好友', '同事', '群聊']
  export default {
    components: {
      Search,
      Tab,
      TabItem,
      Swiper,
      SwiperItem,
      contactList
    },
    mounted () {
      this.height = document.documentElement.clientHeight - 189
    },
    created () {
      this.getAllGroup()
      let index = this.$route.query.index
      if (index) {
        this.index = Number(index)
      }
    },
    watch: {
      index (value) {
        switch (value) {
          case 2:
            this.getChatGroup()
            break
          default:
            break
        }
      }
    },
    methods: {
      ...mapActions([
        'GetFriendGroup',
        'GetChatGroup'
      ]),
      onSubmit (val) {
        window.alert('on submit' + val)
      },
      onCancel () {
        console.log('on cancel')
      },
      onFocus () {
        console.log('on focus')
      },
      // 获取好友列表信息
      getAllGroup () {
        let self = this
        self.GetFriendGroup().then(res => {
          self.FriendGroup = res
        })
      },
      // 获取群组分组
      getChatGroup () {
        let self = this
        self.GetChatGroup().then(res => {
          self.ChatGroup = [{name: '好友', value: res, showContent: false, index: 1}]
        })
      }
    },
    data () {
      return {
        height: 0,
        FriendGroup: [],
        ChatGroup: [],
        isHailFellow: true,
        isColleague: false,
        demo2: '好友',
        list2: list(),
        index: 0,
        results: [],
        autoFixed: false,
        value: '',
        value1: 'hello',
        value2: 'vux'
      }
    }
  }

</script>

<style scoped lang="less">

  /*.contacts .vux-slider .vux-swiper{*/
    /*overflow: auto !important;*/
  /*}*/
</style>
