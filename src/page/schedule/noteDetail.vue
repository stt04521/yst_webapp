<template>
  <div class="note-detail-wrapper">
    <x-header title="记事详情" slot="overwrite-left" class="header">
    </x-header>
    <view-box class="content-container">
      <div class="note-container">
        <div class="note-content">{{ info.content }}</div>
        <div class="start-time">开始时间：{{this.$moment(info.startTime).format('YYYY-MM-DD HH:mm:ss')}}</div>
        <div class="modify-time">{{this.$moment(info.updatedAt).format('YYYY-MM-DD HH:mm:ss')}}</div>
      </div>
      <div class="operate-container">
        <button class="operate-btn" @click="editNote">编辑</button>
        <button class="delete-btn" @click="cancelNote">删除</button>
      </div>
    </view-box>

  </div>
</template>
<script>
  import {XHeader, ViewBox} from 'vux'
  import {mapActions} from 'vuex'
  export default {
    name: 'noteDetail',
    components: {
      XHeader,
      ViewBox
    },
    data () {
      return {
        info: {}
      }
    },
    methods: {
      ...mapActions([
        'getNoteDetail',
        'deleteNote'
      ]),
      back () {
        console.log('back')
      },
      editNote () {
        let data = this.info
        console.log('data: ', data)
        this.$router.push({
          name: 'createNote',
          query: {
            info: data
          }
        })
      },
      cancelNote () {
        this.deleteNote(this.info.id).then((res) => {
          this.$router.go(-1)
        }, (err) => {
          console.log(err)
        }).catch((err) => {
          console.log(err)
        })
      }
    },
    created () {
      let id = this.$route.params.id
      console.log('id: ', id)
      this.getNoteDetail(id).then((res) => {
        this.info = res
        console.log(this.info)
      }, (err) => {
        console.log(err)
      }).catch((err) => {
        console.log(err)
      })
    }
  }
</script>
<style scoped lang="less">
  .note-detail-wrapper {
    .header span{
      font-size: 17px;
      color: #fff;
    }
    .content-container{
      width: 336px;
      margin: 10px auto;
      .note-container{
        padding: 20px 10px;
        background-color: #fff;
        .note-content {
          height: 100%;
        }
        .start-time{
          margin-top: 10px;
        }
        .modify-time{
          margin-top: 40px;
        }
      }
      .operate-container {
        text-align: center;
        margin-top: 40px;
        margin-bottom: 20px;
        .btn{
          width: 130px;
          height: 35px;
          line-height: 35px;
          border-radius: 5px;
          border-width: 0;
        }
        .operate-btn {
          .btn;
          background-color: #108ee9;
          color: #fff;
          margin-right: 10px;
        }
        .delete-btn{
          .btn;
          background-color: #f3f3f3;
          color: #aaa;
        }
      }
    }

  }
</style>
