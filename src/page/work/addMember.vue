<template>
  <div class="add-member-wrapper">
    <x-header title="添加成员" class="header">
      <span slot="overwrite-left" @click="cancel">取消</span>
      <span slot="right" @click="sure">确定</span>
    </x-header>
    <group :gutter="0">
      <cell title="已选成员：">
        <div class="choosed-container">
          <img src="../../assets/news/userImg.jpg" class="choosed-avatar" alt="">
          <img src="../../assets/news/userImg.jpg" class="choosed-avatar" alt="">
          <img src="../../assets/news/userImg.jpg" class="choosed-avatar" alt="">
          <img src="../../assets/news/userImg.jpg" class="choosed-avatar" alt="">
          <img src="../../assets/news/userImg.jpg" class="choosed-avatar" alt="">
          <img src="../../assets/news/userImg.jpg" class="choosed-avatar" alt="">
          <img src="../../assets/news/userImg.jpg" class="choosed-avatar" alt="">
          <img src="../../assets/news/userImg.jpg" class="choosed-avatar" alt="">
          <img src="../../assets/news/userImg.jpg" class="choosed-avatar" alt="">
          <img src="../../assets/news/userImg.jpg" class="choosed-avatar" alt="">
        </div>
      </cell>
    </group>
    <search
      @result-click="resultClick"
      @on-change="getResult"
      :results="results"
      v-model="searchValue"
      position="absolute"
      auto-scroll-to-top top="46px"
      @on-focus="onFocus"
      @on-cancel="onCancel"
      @on-submit="onSubmit"
      ref="search"></search>
    <div class="add-member-container" :style="{height: height + 'px'}">
      <div class="item-container" @click="toggleContentShow">
        <div class="title-container vux-1px-b">
          <span class="triangle" :class="showContent ? 'triangle-bottom' : 'triangle-left'"></span>
          <span>1111</span>
        </div>
        <radio-component :hasChoosedList="hasChoosedList" v-show="showContent" :radioType="radioType" :result.sync="result" :dataList="canChoosedList"></radio-component>
      </div>
    </div>
  </div>
</template>
<script>
  import radioComponent from '@/components/radioComponent'
  import {XHeader, Group, Cell, Search} from 'vux'
  import {mapActions} from 'vuex'
  export default {
    name: 'addMember',
    components: {
      XHeader,
      Group,
      Cell,
      Search,
      radioComponent
    },
    data () {
      return {
        showContent: false,
        canChoosedList: [],
        height: 0,
        searchValue: '',
        radioType: 'mulRadio',
        hasChoosedList: [],
        results: [],
        resultList: [],
        result: {
          choosedList: []
        },
        list: [
          {
            avatar: require('../../assets/news/userImg.jpg'),
            name: '111',
            id: '2'
          },
          {
            avatar: require('../../assets/news/userImg.jpg'),
            name: '111',
            id: '1'
          },
          {
            avatar: require('../../assets/news/userImg.jpg'),
            name: '111',
            id: '3'
          },
          {
            avatar: require('../../assets/news/userImg.jpg'),
            name: '111',
            id: '4'
          },
          {
            avatar: require('../../assets/news/userImg.jpg'),
            name: '111',
            id: '5'
          },
          {
            avatar: require('../../assets/news/userImg.jpg'),
            name: '111',
            id: '6'
          }
        ],
        list2: [
          {
            avatar: require('../../assets/news/userImg.jpg'),
            name: '111',
            id: '11111111'
          },
          {
            avatar: require('../../assets/news/userImg.jpg'),
            name: '111',
            id: '222222'
          },
          {
            avatar: require('../../assets/news/userImg.jpg'),
            name: '111',
            id: '3333333'
          },
          {
            avatar: require('../../assets/news/userImg.jpg'),
            name: '111',
            id: '44444444'
          },
          {
            avatar: require('../../assets/news/userImg.jpg'),
            name: '111',
            id: '555555555'
          },
          {
            avatar: require('../../assets/news/userImg.jpg'),
            name: '111',
            id: '6666666666'
          }
        ]
      }
    },
    methods: {
      ...mapActions([
        'GetFriendGroup',
        'getCollegeListAction'
      ]),
      getResult (val) {
        this.results = val ? this.getResult(this.value) : []
      },
      resultClick (item) {
        window.alert('you click the result item: ' + JSON.stringify(item))
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
      cancel () {
        this.$router.go(-1)
      },
      sure () {
        console.log('this.result.choosedList: ', this.result.choosedList)
        let role = this.$route.query.role
        this.$router.push({
          name: 'createTask',
          query: {
            role: role,
            result: this.result.choosedList
          }
        })
      },
      toggleContentShow () {
        this.showContent = !this.showContent
      }
    },
    mounted () {
      this.height = document.body.offsetHeight - 140
    },
    async created () {
      let queryParams = this.$route.query
      if (queryParams && queryParams.typeRadio) {
        this.radioType = queryParams.typeRadio
      }
      if (queryParams && queryParams.dataList) {
        this.result.choosedList = queryParams.dataList
      }
      let choosedList = []
      queryParams.hasChoosedList.map((item) => {
        choosedList = choosedList.concat(item.list)
        return choosedList
      })
      let res = await this.getCollegeListAction()
      this.canChoosedList = res
      console.log('choosedList: ', choosedList)
      console.log('friendGroup: ', this.canChoosedList)
//      this.canChoosedList = this._.difference(friendGroup, choosedList)
//      console.log('this.friendGroup: ', this.canChoosedList)
      // 暂时为接入真实数据，使用friendGroup中删除有已选人id的项
      choosedList.map((item) => {
        console.log(item.userId)
        this.canChoosedList = this._.remove(this.canChoosedList, (ite) => {
          return ite.userId !== item.userId
        })
      })
      console.log('this.canChoosedList: ', this.canChoosedList)
    }
  }
</script>
<style scoped lang="less">
  .add-member-wrapper{
    height: 100%;
    overflow: hidden;
    .header{
      span{
        font-size: 16px;
      }
    }
    .choosed-container{
      height: 30px;
      width: 252px;
      white-space: nowrap;
      .choosed-avatar{
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
    }
    .add-member-container{
      overflow-y: auto;

      .item-container{
        .title-container{
          height: 30px;
          line-height: 30px;
          background-color: #fff;
          border-bottom: 1px solid #eee;
          .triangle{
            display: inline-block;
            vertical-align: middle;
            margin-left: 5px;
            margin-right: 5px;
            &.triangle-left{
              width: 0;
              height: 0;
              border-top: 5px solid transparent;
              border-bottom: 5px solid transparent;
              border-left: 7px solid #aaa;
            }
            &.triangle-bottom{
              width: 0;
              height: 0;
              border-left: 5px solid transparent;
              border-right: 5px solid transparent;
              border-top: 7px solid #aaa;
            }
          }
        }

      }

    }
  }
</style>
