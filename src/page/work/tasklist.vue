<template>
  <div class="task-list-wrapper">
    <x-header title="任务" slot="overwrite-left" class="header">
      <!--<span slot="overwrite-left" @click="cancleCreateSchedule">取消</span>-->
      <span tag="span" slot="right" @click="createTask">创建</span>
    </x-header>
    <flexbox  :gutter="0" class="tab-container">
      <flexbox-item :span="7">
        <tab :line-width="1" custom-bar-width="60px" active-color="#10b4f7" class="s-tab-container" defaultColor="#aaa">
          <tab-item selected>
            <router-link to="/taskList/taskItem">我创建的</router-link>
          </tab-item>
          <tab-item>
            <router-link to="/taskList/taskItem">我收到的</router-link>
          </tab-item>
        </tab>
      </flexbox-item>
      <flexbox-item>
        <!--<group class="status-selector">-->
          <!--&lt;!&ndash;<selector :placeholder="list[0].value" :options="list"  class="status-selector"></selector>&ndash;&gt;-->
        <!--</group>-->
        <group :gutter="0">
          <cell
            :value="choosedStatus"
            is-link
            class="cell-style"
            :border-intent="false"
            :arrow-direction="showStatus ? 'up' : 'down'"
            @click.native="toggleStatusShow"></cell>
        </group>
      </flexbox-item>
    </flexbox>
    <div class="task-item-list" :style="{height: height + 'px'}">
      <div v-if="showStatus" class="choose-status" @click="changeStatus" >
        <div class="status-item" v-for="(item, index) in statuslist" :key="index">{{item.value}}</div>
      </div>
      <router-view></router-view>
      <div class="bg-color" v-if="showStatus" @click="toggleStatusShow"></div>
    </div>
  </div>
</template>
<script>
  import {XHeader, Tab, TabItem, Flexbox, FlexboxItem, Group, Cell, CellBox} from 'vux'
  export default {
    name: 'taskList',
    components: {
      XHeader,
      Tab,
      TabItem,
      Flexbox,
      FlexboxItem,
      Group,
      Cell,
      CellBox
    },
    data () {
      return {
        height: 0,
        statuslist: [{key: '0', value: '不限'}, {key: '1', value: '正在进行'}, {key: '2', value: '已结束'}],
        showStatus: false,
        choosedStatus: '不限'
      }
    },
    methods: {
      toggleStatusShow () {
        this.showStatus = !this.showStatus
      },
//      changeStatus = (e) => {
//        console.log(e)
//      }
      changeStatus (e) {
        let target = e.target
        this.choosedStatus = target.innerText
        this.toggleStatusShow()
      },
      createTask () {
        this.$router.push({
          name: 'createTask'
        })
      }

    },
    mounted () {
      this.height = document.body.offsetHeight - 86
    },
    beforeRouteLeave (to, from, next) {
      to.meta.keepAlive = false
      next()
    }
  }
</script>
<style scoped lang="less">
  .task-list-wrapper {
    height: 100%;
    overflow-y: hidden;
    .header span{
      color: #fff;
      font-size: 17px;
    }
    .tab-container{
      height: 40px;
      .s-tab-container{
        height: 40px;
        line-height: 40px;
      }
      .cell-style{
        height: 40px;
        line-height: 40px;
        padding: 0px;
        padding-right: 10px;
        font-size: 14px;
        color: #108ee9;
      }
    }
    .task-item-list{
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
</style>
