<template>
  <div>
    <search @on-submit="onSubmit" :auto-fixed="autoFixed" @on-focus="onFocus" @on-cancel="onCancel"></search>
    <div>
      <tab :line-width=2 active-color='#008EE5' v-model="index">
        <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
      </tab>
      <swiper v-model="index" height="100px" :show-dots="false">
        <swiper-item v-for="(item, index) in list2" :key="index">
          <div class="tab-swiper vux-center">{{item}} Container</div>
        </swiper-item>
      </swiper>
    </div>
  </div>
</template>

<script>
  import { Search, Tab, TabItem, Swiper, SwiperItem } from 'vux'
  const list = () => ['好友', '同事', '群聊']
  export default {
    components: {
      Search,
      Tab,
      TabItem,
      Swiper,
      SwiperItem
    },
    methods: {
      resultClick (item) {
        window.alert('you click the result item: ' + JSON.stringify(item))
      },
      getResult (val) {
        this.results = val ? getResult(this.value) : []
      },
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

  function getResult (val) {
    let rs = []
    for (let i = 0; i < 8; i++) {
      rs.push({
        title: `${val} result: ${i + 1} `,
        other: i
      })
    }
    return rs
  }
</script>

<style scoped>
  p {
    padding: 10px 15px;
    font-size: 14px;
    color: #888;
  }
</style>
