<!--
 * @Author: your name
 * @Date: 2019-11-23 10:01:09
 * @LastEditTime: 2019-12-02 16:41:41
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
    <div class="content">
        <p>账号：<input type="text" placeholder="手机号/邮箱" v-model="username"></p>
        <p class="xia">密码:&nbsp; <input type="text" placeholder="请输入密码" v-model="userpass"></p>
    </div>
    <loginButton v-bind:username='username' v-bind:userpass='userpass'></loginButton>
    <loginFoot></loginFoot>
    </div>
</template>
<script>
import loginButton  from './loginButton';
import loginFoot  from './loginFoot';
export default {
    name:"loginConter2",

    data(){
        return {
           username:"",
           userpass:""
        }    
    },
    components:{
    loginButton,loginFoot
  },
    methods:{
        
    }
}   
</script>
<style lang="scss" scoped type="text/css">
.box{
    width: 100%;
    height: .8rem;
.content{
    width: 100%;
    height: 1rem;
    color:rgb(231, 229, 229);
    padding: 0 20px;
    box-sizing: border-box;
    margin-top:.3rem;
    p{
        width: 100%;
        height: .5rem;
        line-height: .6rem;
        box-sizing: border-box;
        font-size: .18rem;
        border-bottom: 1px solid rgb(58, 58, 58);
    input{
        border: none;
        width: 55%;
        height: .3rem;
        background: #000;
        color:rgb(231, 229, 229);
        outline:medium;
        font-size: .18rem;
    }
    span{
        width: 80px;
        height: .26rem;
        text-align: center;
        line-height: .26rem;
        background: rgb(13, 110, 29);
        border-radius: 8px;
        display: inline-block;
        font-size: 14px;
        color:black;
    }        
    }
}
}
.hai{
    width: 100%;
    height: .8rem;
.content{
    width: 100%;
    height: 1rem;
    color:rgb(17, 17, 17);
    padding: 0 20px;
    box-sizing: border-box;
    margin-top:.3rem;
    p{
        width: 100%;
        height: .5rem;
        line-height: .6rem;
        box-sizing: border-box;
        font-size: .18rem;
        border-bottom: 1px solid rgb(58, 58, 58);
    input{
        border: none;
        width: 55%;
        height: .3rem;
        background: rgb(255, 254, 254);
        color:rgb(24, 23, 23);
        outline:medium;
        font-size: .18rem;
    }
    span{
        width: 80px;
        height: .26rem;
        text-align: center;
        line-height: .26rem;
        background: rgb(13, 110, 29);
        border-radius: 8px;
        display: inline-block;
        font-size: 14px;
        color:black;
    }        
    }
}
}
</style>
