<template>
  <div class="plan-list-wrapper">
    <x-header title="计划" slot="overwrite-left" class="header">
      <!--<span slot="overwrite-left" @click="cancel">取消</span>-->
      <span slot="right" @click="create">创建</span>
    </x-header>
    <div class="plan-list-container">
      <flexbox :gutter="0" direction="row">
        <flexbox-item>
          <router-link to="#">
            <group :gutter="0">
              <cell
                :value="creatorValue"
                is-link
                class="cell-style"
                :border-intent="false"
                :arrow-direction="showCreatorModel ? 'up' : 'down'"
                @click.native="changeModelShow('plan')"></cell>
            </group>
          </router-link>
        </flexbox-item>
        <flexbox-item>
          <router-link to="#">
            <group :gutter="0">
              <cell
                :value="statusValue"
                is-link
                class="cell-style"
                :border-intent="false"
                :arrow-direction="showStatusModel ? 'up' : 'down'"
                @click.native="changeModelShow('status')"></cell>
            </group>
          </router-link>
        </flexbox-item>
      </flexbox>
      <!-- 主体内容 -->
      <div class="content-container">
        <div v-if="showCreatorModel" class="choose-status" @click="changeCreator" >
          <div class="status-item" v-for="(item, index) in creatorList" :key="index">{{item.value}}</div>
        </div>
        <div v-if="showStatusModel" class="choose-status" @click="changeStatus" >
          <div class="status-item" v-for="(item, index) in statuslist" :key="index">{{item.value}}</div>
        </div>
        <div class="bg-color" v-if="showCreatorModel || showStatusModel" @click="toggleModelShow"></div>
        <plan-item :planList="planList"></plan-item>
      </div>
    </div>
  </div>
</template>
<script>
  import {XHeader, Tab, ViewBox, TabItem, Group, Cell, Flexbox, FlexboxItem} from 'vux'
  import PlanItem from './planItem.vue'

  export default{
    name: 'planList',
    components: {
      PlanItem,
      XHeader,
      Tab,
      TabItem,
      ViewBox,
      Group,
      Cell,
      Flexbox,
      FlexboxItem
    },
    data () {
      return {
        vauleCharacter: 'value显示的值',
        showCreatorModel: false,
        showStatusModel: false,
        creatorValue: '全部',
        statusValue: '全部状态',
        dataList: [],
        creatorList: [{key: '0', value: '全部'}, {key: '1', value: '李明友'}, {key: '2', value: '罗茜茜'}],
        statuslist: [{key: '0', value: '全部状态'}, {key: '1', value: '未通过'}, {key: '2', value: '已通过'}],
        planList: [
          {
            title: '本次完成第三阶段工作',
            status: '未通过',
            content: '完成今日的报表完成今日的报表完成今日的报表完成今日的报报表完成今日的报表完成今日的报表',
            startTime: '2017-7-26 18：00',
            endTime: '2017-7-26 18：00',
            taskTitle: '今天完成财务报表分析今天完成财务报表分析',
            createTime: '13: 00',
            recoverLength: '3'
          },
          {
            title: '本次完成第三阶段工作',
            status: '未通过',
            content: '完成今日的报表完成今日的报表完成今日的报表完成今日的报报表完成今日的报表完成今日的报表',
            startTime: '2017-7-26 18：00',
            endTime: '2017-7-26 18：00',
            taskTitle: '今天完成财务报表分析今天完成财务报表分析',
            createTime: '13: 00',
            recoverLength: '3'
          },
          {
            title: '本次完成第三阶段工作',
            status: '未通过',
            content: '完成今日的报表完成今日的报表完成今日的报表完成今日的报报表完成今日的报表完成今日的报表',
            startTime: '2017-7-26 18：00',
            endTime: '2017-7-26 18：00',
            taskTitle: '今天完成财务报表分析今天完成财务报表分析',
            createTime: '13: 00',
            recoverLength: '3'
          },
          {
            title: '本次完成第三阶段工作',
            status: '未通过',
            content: '完成今日的报表完成今日的报表完成今日的报表完成今日的报报表完成今日的报表完成今日的报表',
            startTime: '2017-7-26 18：00',
            endTime: '2017-7-26 18：00',
            taskTitle: '今天完成财务报表分析今天完成财务报表分析',
            createTime: '13: 00',
            recoverLength: '3'
          }
        ]
      }
    },
    methods: {
      create () {
        console.log('create')
      },
      changeModelShow (val) {
        if (val === 'plan') {
          this.showCreatorModel = true
          this.showStatusModel = false
        } else {
          this.showCreatorModel = false
          this.showStatusModel = true
        }
      },
      toggleModelShow () {
        this.showCreatorModel = false
        this.showStatusModel = false
      },
      changeCreator (e) {
        let target = e.target
        this.creatorValue = target.innerText
        this.toggleModelShow()
      },
      changeStatus (e) {
        let target = e.target
        this.statusValue = target.innerText
        this.toggleModelShow()
      }
    }
  }
</script>
<style scoped lang="less">
  .plan-list-wrapper{
    height: 100%;
    overflow: hidden;
    .header span {
      font-size: 16px;
      color: #fff;
    }
    .plan-list-container {
      height: 100%;
      overflow: hidden;
      .cell-style{
        height: 40px;
        line-height: 40px;
        padding: 0px;
        padding-right: 60px;
        font-size: 14px;
        color: #108ee9;
      }
      .content-container{
        height:100%;
        overflow-y: auto;
        .choose-status{
          z-index: 3;
          position: absolute;
          background-color: #fff;
          text-align: center;
          font-size: 16px;
          width: 100%;
          .status-item{
            height: 45px;
            line-height: 45px;
          }
        }
        .bg-color{
          width:100%;
          height: 100%;
          background-color: rgba(7,17,27,0.7);
          position: absolute;
          top: 86px;
          right: 0px;
          z-index:2;
        }
      }
    }

  }
</style>
