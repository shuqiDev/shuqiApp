<!--
 * @Author: 党婉珍
 * @Date: 2019-11-29 14:59:15
 * @LastEditors: 党婉珍
 * @LastEditTime: 2019-12-06 20:30:08
 * @Description: 
 -->
<template>
  <div class="head">
    <div class="first">
      <h2>让阅读成为习惯</h2>
      <div class="rightBox">
        <i class="el-icon-search"></i>
        <i class="el-icon-more" @touchstart="getMore"></i>
      </div>
    </div>
    <div class="mengban" @touchstart="getOut">
      <ul class="bookConfig">
        <li style="border-bottom:1px solid gray;">
          <i class="el-icon-edit"></i>
          <span @touchstart="manageBook" >管理书架</span>
        </li>
        <li style="border-bottom:1px solid gray;">
          <i class="el-icon-download"></i>
          <span>下载管理</span>
        </li>
        <li>
          <i class="el-icon-sort"></i>
          <span>WiFi传书</span>
        </li>
      </ul>
    </div>
    <div class="delete" :class="{isShowdel:$store.state.isShowdel}">
      <h2 @touchstart="allCheck">全选</h2>
      <h2 @touchstart="cancel">取消</h2>
  </div>
  </div>
</template>

<script>
import $ from 'jquery';
export default {
  name: 'BHead',
  props:[],
  methods:{
    getMore(){
      $('.mengban').css('display','block');
    },
    getOut(){
      $('.mengban').css('display','none');
    },
    manageBook(){
      $('.delete').css('display','block');
      $('.mengban').css('display','none');
      $('.first').css('display','none');
      this.$store.commit('manageBook');
    },
    allCheck(){
      this.$store.commit('allCheck');
    },
    cancel(){   //点击取消
      $('.delete').css('display','none');
      $('.first').css('display','block');
      this.$store.commit('cancel');
    } 
    // ,
    // toDelete(index){
    //   this.$store.commit('del',index);
    // }
  }
}
</script>
<style lang="scss" type="text/css" scoped>
.head {
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: rgb(234, 235, 236);
  .first{
    h2 {
      float: left;
      margin-top: 0.18rem;
      margin-left: 0.2rem;
    }
    .rightBox {
      display: flex;
      padding-left: 1.27rem;
      .el-icon-more,.el-icon-search{
        display: block;
        font-size: 26px;
        margin-top: 0.2rem;
        padding-left: 0.15rem;
      }
    }
  }
  .mengban{
    display:none;
    position: fixed;
    width:100%;
    height:100%;
    background-color: rgba(90,92,90,.4);
    .bookConfig{
      background-color: white;
      width: 1.35rem;
      height: 1.5rem;
      border-radius: .1rem;
      position:absolute;
      right: .2rem;
      top: .6rem;
      li{
        width:100%;
        height: 33%;
        text-align: center;
        line-height: .6rem;
        i{
          font-size: 0.25rem;
        }
      }
    }
  }
  .isShowdel{
    display:none;
  }
  .delete{
    display:none;
    width:98%;
    height:.46rem;
    justify-content: space-between;
    z-index:99;
    h2{
      margin: .15rem;
      float: left;
    }
    :nth-child(2){
      margin-left: 2.3rem;
      width: .4rem;
    }
    :last-child{
      position: fixed;
      top: -.02rem;
      left: 1rem;
    }
  }
}
</style>
