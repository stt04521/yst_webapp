
<template>
  <div class="cgc">
    <x-header
      title="创建群聊"
      :left-options="leftOptions"
    >
      <div slot="left">
        <span v-if="step == 2 || step == 3" @click="changeStep(step-1)">上一步</span>
      </div>
      <div slot="right">
        <span v-if="step == 1 || step == 2" @click="changeStep(step+1)">下一步</span>
        <span v-if="step == 3" @click="createdGroup">创建</span>
      </div>
    </x-header>
    <flexbox>
      <flexbox-item v-for="item, index in stepList" :key="index">
        <div :class="['flex-demo', index+1 == step?'active':'']" >
          <p>{{item.name}}</p>
          <p>({{item.value}})</p>
        </div>
      </flexbox-item>
    </flexbox>
    <hr>
    <div class="step_one" v-if="step == 1">
      <h2>选择群类型：</h2>
      <span class="chat_type" @click="chooseGroupType" :style="{borderColor: isChoosed ? '#0099ff' : '#D9D9D9'}">
        好友
      </span>
      <!--<select class="chat_type">-->
        <!--<option>武汉新华科技有…</option>-->
        <!--<option>武汉新华科技有…</option>-->
      <!--</select>-->
    </div>
    <div class="step_two" v-show="step == 2">
      <div class="group_list">
        <span>选择群成员:</span>
        <div class="fr" >
          <div style="width: 277px; overflow-x: auto">
            <img slot="icon" v-for="(item, index) in result.choosedList"  :src="baseurl + item.portrait">
          </div>
        </div>
      </div>
      <contact-list :result="result" type="Friends" select="true" :list="FriendGroup" ref="Friends"></contact-list>
    </div>
    <div class="step_three" v-show="step == 3">
      <label for="groupName">群名称：</label>
      <input type="text" id="groupName" placeholder="请输入群名称" v-model="groupName">
    </div>
  </div>
</template>

<script>
  import { XHeader, Flexbox, FlexboxItem, Divider, Selector, Group } from 'vux'
  import contactList from './contactList'
  import { mapActions } from 'vuex'
  export default {
    name: 'hello',
    data () {
      return {
        baseurl: 'http://192.168.0.12:7000',
        isChoosed: false,
        result: {
          choosedList: []
        },
        stepList: [
          {name: '第一步', value: '选择群类型'},
          {name: '第二步', value: '选择群成员'},
          {name: '第三步', value: '编辑群名称'}
        ],
        groupName: '',
        FriendGroup: [],
        step: 1,
        list: [{key: 'gd', value: '好友'}, {key: 'gx', value: '同事'}],
        value2: 'gd'
      }
    },
    components: {
      contactList,
      XHeader,
      Flexbox,
      FlexboxItem,
      Divider,
      Selector,
      Group
    },
    computed: {
      leftOptions () {
        if (this.step === 1) {
          return {showBack: true}
        } else {
          return {showBack: false}
        }
      }
    },
    created () {
      this.getAllGroup()
    },
    methods: {
      ...mapActions([
        'GetFriendGroup',
        'GroupCreate'
      ]),
      changeStep (num) {
        this.step = num
      },
      getAllGroup () {
        let self = this
        self.GetFriendGroup().then(res => {
          self.FriendGroup = res
        })
      },
      createdGroup () {
        let self = this
        let userId = self.$refs.Friends.result.choosedList.map(item => { return item.userId })
        let request = {
          userId: userId,
          description: '',
          name: self.groupName
        }
        this.GroupCreate(request).then((res) => {
          this.$router.push({
            name: 'contacts'
          })
        })
      },
      chooseGroupType () {
        this.isChoosed = !this.isChoosed
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .cgc{
    font-size: 14px;
    min-height: 100%;
    background-color: white!important;
    .flex-demo {
      padding-top: 4px;
      text-align: center;
      color: #A1A1A5;
      background-clip: padding-box;
    }
    hr{
      color: #A1A1A5;
    }
    .active{
      color:#4F8EE5;
    }
    .step_one{
      padding: 20px;
      select{
       width: auto;
       padding: 0 2%;
       margin: 0;
       }
      option{
      text-align:center;
       }
    .chat_type{
      margin-top: 10px;
      margin-right: 8px;
      font-size: 14px;
      border:1px solid #D9D9D9;
      padding: 4px;
      background-color: #F3F3F3;
      }
    }
    .step_two{
      .group_list{
        padding: 10px;
        .fr{
          width: 78%;
          overflow: auto;
        }
        img{
          width: 30px;
          display:inline-block;
          padding-right:2px;
        }
      }
    }
    .step_three{
      padding: 10px 20px;
      input{
        background-color: #F1F1F1;
        outline: 0;
        border: 0;
        padding: 4px;
        border-radius: 4px;
      }
    }
  }
  .choosed {
    border-color: #0099ff
  }

</style>
