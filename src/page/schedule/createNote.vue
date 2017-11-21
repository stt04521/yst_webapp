<template>
  <div class="create-note-wrapper">
    <x-header :title="noteTitle" slot="overwrite-left" class="header">
      <span slot="overwrite-left" @click="cancleCreateNote">取消</span>
      <span slot="right" @click="create">{{isEdit ? '保存' : '创建'}}</span>
    </x-header>
    <view-box class="content-container">
      <group>
        <x-textarea :max="1000" v-model="content" :placeholder="placeHolder" @on-focus="onEvent('focus')" @on-blur="onEvent('blur')" :height="183"></x-textarea>
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
        isEdit: false,
        startTime: '',
        content: '',
        placeHolder: '请输入记事内容',
        id: '',
        noteTitle: '新建记事'
      }
    },
    methods: {
      ...mapActions([
        'createNote',
        'editNotepad'
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
        let that = this
        let data
        if (this.isEdit) {
          data = {
            content: this.content,
            startTime: this.startTime,
            notepadId: this.id
          }
          this.editNotepad(data).then(() => {
            that.$router.push({
              name: 'showNote'
            })
          }, (err) => {
            console.log(err)
          })
        } else {
          data = {
            content: this.content,
            startTime: this.startTime
          }
          this.createNote(data).then(() => {
            that.$router.push({
              name: 'showNote'
            })
          }, (err) => {
            console.log(err)
          })
        }
      }
    },
    created () {
      let info = this.$route.query.info
      if (info) {
        this.noteTitle = '修改记事'
        this.isEdit = true
        this.content = info.content
        this.startTime = this.$moment(info.startTime).format('YYYY-MM-DD HH:mm:ss')
        this.id = info.id
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
