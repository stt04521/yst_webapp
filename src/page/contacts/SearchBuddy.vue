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
    <contact-list v-show="$route.params.type == 'search' && isShow"></contact-list>
    <Group v-show="$route.params.type == 'addFriends' && isShow">
      <cell>
        <span slot="title">General</span>
        <img slot="icon" width="40" style="display:block;margin-right:25px;" src="../../assets/news/userImg.jpg">
        <x-button mini plain>加为好友</x-button>
      </cell>
    </Group>
  </div>
</template>

<script>
  import { Search, Group, Cell, XButton, Flexbox, FlexboxItem, Divider } from 'vux'
  import contactList from './contactList.vue'
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
      isShow () {
        if (this.value) {
          return true
        } else {
          return false
        }
      },
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
      setFocus () {
        this.$refs.search.setFocus()
      },
      resultClick (item) {
        window.alert('you click the result item: ' + JSON.stringify(item))
      },
      getResult (val) {
        this.results = val ? getResult(this.value) : []
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
        console.log('11')
        this.$router.go(-1)
      }
    },
    data () {
      return {
        results: [],
        value: '',
        autoFixed: false,
        backSrc: require('@/assets/contacts/back.png')
      }
    }
  }

  function getResult (val) {
    let rs = []
    for (let i = 0; i < 20; i++) {
      rs.push({
        title: `${val} result: ${i + 1} `,
        other: i
      })
    }
    return rs
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
