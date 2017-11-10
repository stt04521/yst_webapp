<template>
  <div class="hello">
    <group class="news">
      <cell-box @click.native="toundealTask">
        <Flexbox>
          <FlexboxItem :span="2">
            <div class="news_img">
              <i class="iconfont icon-renwu icon-position"></i>
            </div>
          </FlexboxItem>
          <FlexboxItem :span="8">
            <h4>待办任务</h4>
            <p class="f_14">{{newList[0].lastMsg.content}}</p>
          </FlexboxItem>
          <FlexboxItem :span="2">
            <p class="f_12">13:00</p>
            <badge v-if="newList[0].count!=0" :text="newList[0].count"></badge>
          </FlexboxItem>
        </Flexbox>
      </cell-box>
      <cell-box>
        <router-link to="/system/noticeMsg" class="w100">
          <Flexbox>
            <FlexboxItem :span="2">
              <div class="news_img task-notify">
                <i class="iconfont icon-naozhong icon-position"></i>
              </div>
            </FlexboxItem>
            <FlexboxItem :span="8">
              <h4>任务通知</h4>
              <p class="f_14">{{newList[1].lastMsg.content}}</p>
            </FlexboxItem>
            <FlexboxItem :span="2">
              <p class="f_12">7/31</p>
              <badge v-if="newList[1].count!=0" :text="newList[1].count"></badge>
            </FlexboxItem>
          </Flexbox>
        </router-link>
      </cell-box>
      <cell-box>
        <router-link to="/newsList" class="w100">
        <Flexbox >
          <FlexboxItem :span="2">
            <div class="news_img chat-message">
              <i class="iconfont icon-qunzu icon-position"></i>
            </div>
          </FlexboxItem>
          <FlexboxItem :span="8">
            <h4>会话消息</h4>
            <p class="f_14">{{last}}</p>
          </FlexboxItem>
          <FlexboxItem :span="2">
            <p class="f_12">7/31</p>
            <badge v-show="total > 0" :text="total > 99 ? '...' : total"></badge>
          </FlexboxItem>
        </Flexbox>
        </router-link>
      </cell-box>
      <cell-box @click.native="toHelp">
        <Flexbox>
          <FlexboxItem :span="2">
            <div class="news_img help-feed">
              <i class="iconfont icon-zhinan icon-position"></i>
            </div>
          </FlexboxItem>
          <FlexboxItem :span="8">
            <h4>帮助反馈</h4>
            <p class="f_14">&nbsp;</p>
          </FlexboxItem>
          <FlexboxItem :span="2">
          </FlexboxItem>
        </Flexbox>
      </cell-box>

      <cell-box @click.native="toVerification">
        <Flexbox>
          <FlexboxItem :span="2">
            <div class="news_img verify">
              <i class="iconfont icon-yanzheng icon-position"></i>
            </div>
          </FlexboxItem>
          <FlexboxItem :span="8">
            <h4>验证消息</h4>
            <p class="f_14">您已加入***组织</p>
          </FlexboxItem>
          <FlexboxItem :span="2">
          </FlexboxItem>
        </Flexbox>
      </cell-box>

      <cell-box>
        <router-link to="/system/sysMsg" class="w100">
          <Flexbox>
            <FlexboxItem :span="2">
              <div class="news_img system-message">
                <i class="iconfont icon-iconshezhi01 icon-position"></i>
              </div>
            </FlexboxItem>
            <FlexboxItem :span="8">
              <h4>系统消息</h4>
              <p class="f_14">{{newList[2].lastMsg.content}}</p>
            </FlexboxItem>
            <FlexboxItem :span="2">
              <p class="f_12">7/31</p>
              <badge v-if="newList[2].count!=0" :text="newList[2].count"></badge>
            </FlexboxItem>
          </Flexbox>
        </router-link>
      </cell-box>
    </group>
  </div>
</template>

<script>
  import {Group, Cell, CellBox, Flexbox, FlexboxItem, Badge} from 'vux'
  import { mapActions } from 'vuex'
  import { notify } from '@/utils'
  export default {
    components: {
      Group,
      Cell,
      CellBox,
      Flexbox,
      FlexboxItem,
      Badge
    },
    name: 'news',
    data () {
      return {
        total: 0,
        last: '',
        newList: [
          {count: 0, lastMsg: {}, type: 'taskMsg'},
          {count: 0, lastMsg: {}, type: 'noticeMsg'},
          {count: 0, lastMsg: {}, type: 'sysMsg'}
        ]
      }
    },
    methods: {
      ...mapActions([
        'Count',
        'msgList'
      ]),
      getAllNew () {
        let self = this
        self.Count().then(res => {
          self.newList = res
        })
      },
      getMsgList () {
        let self = this
        self.msgList().then(res => {
          self.total = res.reduce(self.add, 0)
          res.length > 0 ? self.last = res[0]['content'] : ''
        })
      },
      add (sumSoFar, item) {
        sumSoFar = sumSoFar + item.num
        return sumSoFar
      },
      toHelp () {
        this.$router.push({
          name: 'feedback'
        })
      },
      toVerification () {
        console.log('验证消息')
      },
      toundealTask () {
        this.$router.push({
          name: 'undealTask'
        })
      }
    },
    beforeDestroy () {
      notify.removeListener('upData', this.getMsgList)
    },
    created () {
      this.getAllNew()
      this.getMsgList()
      notify.on('upData', this.getMsgList)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .news {
    h4 {
      color: black;
    }
    .news_img {
      height: 50px;
      width: 50px;
      border-radius: 50%;
      background: #03BD80;
      text-align: center;
      vertical-align: middle;
      display: table-cell;
      .icon-position{
        color: #fff;
        font-size: 22px;
        vertical-align: middle;
      }
      &.task-notify {
        background-color: #3db8c1;
      }
      &.chat-message{
        background-color: #7265e6;
      }
      &.help-feed {
        background-color: #ffce3d;
      }
      &.verify {
        background-color: #f5317f;
      }
      &.system-message {
        background-color: #f78e3d;
      }
    }

  }
</style>
