<template>
  <div class="add-member-wrapper">
    <x-header title="添加成员" class="header">
      <span slot="overwrite-left" @click="cancel">取消</span>
      <span slot="right" @click="sure">确定</span>
    </x-header>
    <group :gutter="0">
      <cell title="已选成员：">
        <div class="choosed-container">
          <div class="item-container" v-if="hasChoosedList.length" v-for="(item, index) in hasChoosedList" @click="deleteChoose(item)">
            <img :src="baseurl + item.portrait" class="choosed-avatar">
            <icon type="cancel" class="cancel-icon"></icon>
          </div>
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
        <radio-component v-show="showContent" :radioType="radioType" :result.sync="result" :dataList="canChoosedList"></radio-component>
      </div>
    </div>
  </div>
</template>
<script>
  import radioComponent from '@/components/radioComponent'
  import {XHeader, Group, Cell, Search, Icon} from 'vux'
  import {mapActions} from 'vuex'
  export default {
    name: 'addMember',
    components: {
      XHeader,
      Group,
      Cell,
      Search,
      radioComponent,
      Icon
    },
    data () {
      return {
        baseurl: 'http://192.168.0.12:7000',
        showContent: false,
//        canChoosedList: [],
        role: '',
        height: 0,
        searchValue: '',
        radioType: 'mulRadio',
        results: [],
        resultList: [],
        colleageList: [],
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
//      setList (role, list) {
//        this.$store.commit(role, list)
//      },
      sure () {
//        this.setList(this.role, this.hasChoosedList)
        if (this.role === 'PRINCIPAL') {
          this.$store.commit('SET_PRINCIPAL_LIST', this.hasChoosedList)
        }
        if (this.role === 'EXECUTOR') {
//          this.resultList = this.result.choosedList.concat(this.$store.state.task.executorList)
          this.$store.commit('SET_EXECUTOR_LIST', this.hasChoosedList)
        }
        if (this.role === 'CHECKER') {
          this.$store.commit('SET_CHECKER_LIST', this.hasChoosedList)
        }
        if (this.role === 'PARTICIPANT') {
          this.$store.commit('SET_PARTICIPANT_LIST', this.hasChoosedList)
        }
        this.$router.push({
          name: 'createTask'
        })
      },
      toggleContentShow () {
        this.showContent = !this.showContent
      },
      deleteChoose (val) {
        this.result.choosedList = this._.remove(this.result.choosedList, (item) => {
          return val.userId !== item.userId
        })
//        console.log(this.result.choosedList)
//        this.hasChoosedList = this.hasChoosedList.map((item) => {
//          return item.userId !== val.userId
//        })
      }
    },
    computed: {
      hasChoosedList () {
        if (this.role === 'PRINCIPAL') {
          return this.$store.state.task.principalList
        }
        if (this.role === 'EXECUTOR') {
          this.result.choosedList = this.result.choosedList.concat(this.$store.state.task.executorList)
          return this.result.choosedList
        }
        if (this.role === 'CHECKER') {
          this.result.choosedList = this.result.choosedList.concat(this.$store.state.task.checkerList)
          return this.result.choosedList
        }
        if (this.role === 'PARTICIPANT') {
          this.result.choosedList = this.result.choosedList.concat(this.$store.state.task.participantList)
          return this.result.choosedList
        }
      },
      canChoosedList () {
        let choosedList = []
        let list = this.colleageList
        choosedList = choosedList.concat(this.$store.state.task.principalList).concat(this.$store.state.task.executorList).concat(this.$store.state.task.checkerList).concat(this.$store.state.task.participantList)
        choosedList.map((item) => {
          list = this._.remove(list, (ite) => {
            return ite.userId !== item.userId
          })
        })
        console.log(list)
        return list
      }
    },
    mounted () {
      this.height = document.body.offsetHeight - 140
    },
    async created () {
      let queryParams = this.$route.query
      this.role = queryParams.role
      if (queryParams && queryParams.typeRadio) {
        this.radioType = queryParams.typeRadio
      }
//      if (queryParams.role === 'PRINCIPAL') {
//        this.hasChoosedList = this.$store.state.task.principalList
//      }
//      if (queryParams.role === 'EXECUTOR') {
//        this.hasChoosedList = this.result.choosedList.concat(this.$store.state.task.executorList)
//      }
//      if (queryParams.role === 'CHECKER') {
//        this.hasChoosedList = this.$store.state.task.checkerList
//      }
//      if (queryParams.role === 'PARTICIPANT') {
//        this.hasChoosedList = this.$store.state.task.participantList
//      }
//      let res = await this.getCollegeListAction() // 获取同事列表
      this.colleageList = await this.getCollegeListAction()
//      this.canChoosedList = res
//      this.canChoosedList = this._.difference(friendGroup, choosedList)
//      console.log('this.friendGroup: ', this.canChoosedList)
      // 暂时为接入真实数据，使用friendGroup中删除有已选人
//      let choosedList = []
//      choosedList = choosedList.concat(this.$store.state.task.principalList).concat(this.$store.state.task.executorList).concat(this.$store.state.task.checkerList).concat(this.$store.state.task.participantList)
//      choosedList.map((item) => {
//        this.canChoosedList = this._.remove(this.canChoosedList, (ite) => {
//          return ite.userId !== item.userId
//        })
//      })
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
      .item-container {
        display: inline-block;
        position: relative;
        margin-right: 10px;
        .choosed-avatar{
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }
        .cancel-icon{
          position: absolute;
          top: -5px;
          right: -15px;
        }
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
