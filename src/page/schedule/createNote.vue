<template>
  <div class="create-note-wrapper">
    <x-header title="新建计划" slot="overwrite-left" class="header">
      <span slot="overwrite-left" @click="cancleCreateNote">取消</span>
      <span slot="right" @click="create">创建</span>
    </x-header>
    <view-box class="content-container">
      <group>
        <x-textarea :max="1000" v-model="content" placeholder="请输入记事内容" @on-focus="onEvent('focus')" @on-blur="onEvent('blur')" :height="183"></x-textarea>
      </group>
      <group>
        <datetime v-model="startTime" format="YYYY-MM-DD HH:mm" @on-change="startTimeChange" title="开始时间"></datetime>
      </group>
    </view-box>
  </div>
</template>
<script>
  import {Group, XTextarea, Datetime, ViewBox, XHeader} from 'vux'
  import {mapActions} from 'vuex'
  export default {
    name: 'createNote',
    components: {
      ViewBox,
      Group,
      XTextarea,
      Datetime,
      XHeader
    },
    data () {
      return {
        startTime: '',
        content: ''
      }
    },
    methods: {
      ...mapActions([
        'createNote'
      ]),
      startTimeChange (val) {
        console.log(val)
      },
      onEvent (event) {
        console.log('on', event)
      },
      cancleCreateNote () {
        console.log('cancel create note')
        this.$router.go(-1)
      },
      create () {
        console.log('create note')
        let that = this
        let data = {
          content: this.content,
          startTime: this.startTime
        }
        console.log('data', data)
        this.createNote(data).then(() => {
          that.$router.push({
            name: 'showNote'
          })
        }, (err) => {
          console.log(err)
        })

        this.$router.push({
          name: 'noteDetail'
        })
      }
    }
  }
</script>
<style scoped lang="less">
  .create-note-wrapper{
    height: 100%;
    overflow: hidden;
    .header span{
      font-size: 17px;
      color: #fff;
    }
    .content-container {
      margin-top: -20px;
    }
  }
</style>
