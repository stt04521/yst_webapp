<template>
  <div class="hello">
    <x-header
      title="群聊资料"
    >
      <span slot="right" style="font-size: 17px; color: #fff">
        添加人员
      </span>
    </x-header>
    <div class="member">
      <h2>本组织成员</h2>
      <Flexbox wrap="wrap" :gutter="0" >
        <FlexboxItem :span="2" v-for="i in GroupList" :key="i.id">
          <img  :src="require('@/assets/DefaultAvatar.svg')" onerror="onerror=null;src='123.jpg'">
          <p>{{i.personInfo.realName}}</p>
        </FlexboxItem>
      </Flexbox>
      <!--<h2>武汉先天科技有限公司</h2>-->
      <!--<Flexbox wrap="wrap" :gutter="0" >-->
        <!--<FlexboxItem :span="2" v-for="i in 3" :key="i">-->
          <!--<img  src="../../assets/news/userImg.jpg"  >-->
          <!--<p>陈周</p>-->
        <!--</FlexboxItem>-->
      <!--</Flexbox>-->
      </div>
    <group >
      <cell title="群聊名称">
        <div>
          <span style="color: black"> 产品组</span>
        </div>
      </cell>
      <cell title="群二维码">
        <div>
          <img  :src="require('@/assets/contacts/qcode.jpg')" width="20">
        </div>
      </cell>
    </group>
    <group >
      <x-switch title="免打扰"></x-switch>
      <x-switch title="置顶群聊"></x-switch>
    </group>
    <div class="button_group">
      <x-button class="blue_bg">发消息</x-button>
    </div>
  </div>

</template>

<script>
  import { XHeader, Flexbox, FlexboxItem, Cell, Group, XSwitch, XButton } from 'vux'
  import { mapActions } from 'vuex'
  import { longtap } from '@/directives/vue-touch'
  export default {
    name: 'hello',
    components: {
      XHeader,
      Flexbox,
      FlexboxItem,
      Cell,
      Group,
      XSwitch,
      XButton
    },
    directives: {
      longtap
    },
    data () {
      return {
        GroupList: []
      }
    },
    created () {
      this.getGroupList(this.$route.query.id)
    },
    methods: {
      ...mapActions([
        'GetGroupInfo'
      ]),
      getGroupList (id) {
        let self = this
        this.GetGroupInfo(id).then(res => {
          self.GroupList = res
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less">
  .member{
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    background-color: white;
    p{
      text-align: center;
    }
    img{
      width: 40px;
    }
    .vux-flexbox .vux-flexbox-item{
      text-align: center;
    }
  }
  .weui-switch:checked, .weui-switch-cp__input:checked ~ .weui-switch-cp__box{
    border-color:#118EE9!important;
    background-color: #118EE9!important;
  }
  .button_group{
    padding: 0 10px;
    box-sizing: border-box;
    position: fixed;
    width: 100%;
    bottom: 0;
    .blue_bg{
      background-color: #008EE5;
      color: white;
      margin-bottom: 10px;
    }
  }
</style>
