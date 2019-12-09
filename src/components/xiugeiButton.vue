<!--
 * @Author: your name
 * @Date: 2019-11-23 10:01:09
 * @LastEditTime: 2019-12-04 16:04:38
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
        <input type="button" value="退出账号" @touchstart="shancook">
    </div>
</template>
<script>
export default {
    name:"xiugeiButton",
    data(){
        return {
           
        }    
    },
    methods:{
        shancook(){
            this.removeCookie("username") ;
            setTimeout(()=>{
             let str = "/my";
             this.$router.push({path:str});
              },1); 
        },
         removeCookie(key){
        let str="username"+"="+""
         document.cookie = str;
        },
         getCookie(key){  
         var str = unescape(document.cookie);
         let arr = str.split("; "); 
         for(var i in arr){
         if(arr[i].startsWith(key+"=")){
         let [,value]=arr[i].split("=");
         return value;
        }
    }
    return null;
}
    }
}   
</script>
<style lang="scss" scoped type="text/css">
.box{
    width: 100%;
    height: .6rem;
    line-height: .6rem;
    background:#333;
    color:rgb(253, 250, 250);
    box-sizing: border-box;
    text-align: center;
    input{
        width:99%;
        line-height: .4rem;
        background:#333;
        outline:medium;
        border-radius: 10px;
        color:rgb(253, 250, 250);
        border:none;
        font-size: .22rem;
    }
}
.hai{
    width: 100%;
    height: .6rem;
    line-height: .6rem;
    background:rgb(255, 254, 254);
    color:rgb(250, 250, 250);
    box-sizing: border-box;
    text-align: center;
    input{
        width:99%;
        height:.4rem;
        background:rgb(255, 254, 254);
        outline:medium;
        border-radius: 10px;
        border:none;
        font-size: .22rem;
       
    }
}
</style>
