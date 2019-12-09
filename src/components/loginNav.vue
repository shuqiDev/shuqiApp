<!--
 * @Author: your name
 * @Date: 2019-11-23 10:01:09
 * @LastEditTime: 2019-12-02 16:11:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit<!--
 * @Author: 熊小兜
 * @Date: 2019-11-07 00:23:30
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-11-16 14:59:42
 * @Description:"搜索"
 -->
<template>
    <div :class="this.$store.state.str">
     <span v-for="(ti,index) in tit" :key="index" @touchstart="changecolor(index)"  class="nav" :class="{list:chang==index}">{{ti}}</span>
    </div>
</template>
<script>
export default {
    name:"loginNav",
    data(){
        return {
           tit:[
              "手机验证码",
              "账户密码"
           ],
      chang:0
        }    
    },
    methods:{
         changecolor(index){
        this.chang = index;
         this.$emit('changemsg',index);
        }
    }
}
   
</script>
<style lang="scss" scoped type="text/css">
.box{
    width: 100%;
    height: .5rem;
    display:flex;
    justify-content: space-between;
    border-bottom: 1px solid rgb(58, 58, 58);
    .nav{
        width: 50%;
        height: .5rem;
        line-height: .5rem;
        text-align: center;
        font-size: .20rem;
        color:rgb(231, 229, 229);
    }
    .list{
        color: rgb(13, 110, 29);
        border-bottom:2px solid rgb(13, 110, 29);
    }
}
.hai
    {
    width: 100%;
    height: .5rem;
    display:flex;
    justify-content: space-between;
    border-bottom: 1px solid rgb(212, 212, 212);
    .nav{
        width: 50%;
        height: .5rem;
        line-height: .5rem;
        text-align: center;
        font-size: .20rem;
        color:rgb(2, 2, 2);
    }
    .list{
        color: rgb(13, 110, 29);
        border-bottom:2px solid rgb(13, 110, 29);
    }
}
</style>
