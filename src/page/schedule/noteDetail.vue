<template>
  <div class="note-detail-wrapper">
    <x-header title="记事详情" slot="overwrite-left" class="header">
    </x-header>
    <view-box class="content-container">
      <div class="note-container">
        <div class="note-content">笔记详情笔记详情笔记详情笔记详情笔记详情笔记详情笔记详情笔记详情笔记详情笔记详情笔记详情笔记详情笔记记详情笔记详情笔记详情笔记详情笔记详情笔记详情笔记详情笔记详情笔记详情笔记详情笔记详情笔记详情笔记详情笔记详情笔记详情笔记详情笔记详情笔记详情笔记详情笔记详情笔记详情笔记详情笔记详情笔记详情笔记详情</div>
        <div class="start-time">开始时间：2017-7-26 18:00</div>
        <div class="modify-time">13:00</div>
      </div>
      <div class="operate-container">
        <button class="operate-btn" @click="editNote">编辑</button>
        <button class="delete-btn" @click="deleteNote">删除</button>
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
    methods: {
      ...mapActions([
        'getNoteDetail'
      ]),
      back () {
        console.log('back')
      },
      editNote () {
        this.$router.push({
          name: 'createNote'
        })
      },
      deleteNote () {
        this.$router.go(-1)
      }
      // toShowNote () {
      //   console.log('111')
      //   // this.$router.push({
      //   //   path: '/schedule/showNote'
      //   // })
      // }
    },
    mounted () {
      this.getNoteDetail()
    },
    created () {
//      console.log('////')
//      console.log(this.getNoteDetail())
//      this.getNoteDetail()
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
