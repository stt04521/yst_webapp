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
          <contact-list type="Friends"></contact-list>
        </swiper-item>
        <swiper-item>
          <contact-list type="Colleague"></contact-list>
        </swiper-item>
        <swiper-item>
          <contact-list type="Friends"></contact-list>
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
  import { Search, Tab, TabItem, Swiper, SwiperItem, ViewBox } from 'vux'
  import contactList from './contactList.vue'
  const list = () => ['好友', '同事', '群聊']
  export default {
    components: {
      Search,
      Tab,
      TabItem,
      Swiper,
      SwiperItem,
      contactList,
      ViewBox
    },
    mounted () {
      this.height = document.body.offsetHeight - 189
    },
    methods: {
      onSubmit (val) {
        window.alert('on submit' + val)
      },
      onCancel () {
        console.log('on cancel')
      },
      onFocus () {
        console.log('on focus')
      }
    },
    data () {
      return {
        height: 0,
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

  .contacts .vux-slider .vux-swiper{
    overflow: auto !important;
  }
</style>
