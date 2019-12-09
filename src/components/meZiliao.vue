<!--
 * @Author: your name
 * @Date: 2019-11-23 10:01:09
 * @LastEditTime: 2019-12-05 16:05:19
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
        <div class="shang">
            <div class="photo">
               <img :src="require('../assets/img/'+this.$store.state.str+'/me.png')" alt="">
            </div>
            <span @touchstart="change">{{username}}</span>
        </div>
        <ul class="xia">
            <li v-for="(item,index) in  xia"  :key="index">
                <p class="count">{{item.count}}</p>
                <p class="name">{{item.name}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"meZiliao",
    data(){
        return {
           xia:[
               {
               count:0,
               name:"书豆"
               },
               {
               count:0,
               name:"豆卷"
               },
               {
               count:0,
               name:"章节卷"
               },
               {
               count:0,
               name:"月票"
               }
           ],
           username:"登录/注册"
        }    
    },
    methods:{
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
   },
   change(){
       if(this.username=="登录/注册"){
           setTimeout(()=>{
						let str = "/login";
						this.$router.push({path:str});
					},1);
       }
       else{
            setTimeout(()=>{
						let str = "/xiugei";
						this.$router.push({path:str});
					},1);
       }
      }
    },
    created() {
        let cook=this.getCookie("username")
        if(cook!=""){
           this.username=cook;
        }else{
            this.username="登录/注册"
        }
       
    },
    updated(){
        let cook=this.getCookie("username")
        if(cook!=""){
           this.username=cook;
        }else{
            this.username="登录/注册"
        }  
    }
}   
</script>
<style lang="scss" scoped type="text/css">
.box{
    width: 100%;
    height: 1.2rem;
    .shang{
        display:flex;
        align-items: center;
        justify-content: flex-start;
        margin: 10px 0px;
        .photo{
            width: .5rem;
            height: .5rem;
            border-radius: 50%;
            background: #333333;
            margin:0 20px 0 15px;
            img{
                width: 100%;
            }    
        }
        span{
                color:rgb(207, 207, 207);
                font-size: .24rem;
            }
        }
        .xia{
            display: flex;
            width: 100%;
            height: .7rem;
            justify-content:space-around;
           .count{
               width: 100%;
               color:rgb(207, 207, 207);
               font-size: 18px;
               text-align:center; 
           } 
           .name{
              width: 100%;
              color:rgb(97, 96, 96);
              font-size: 12px;
              text-align:center; 
           }
        }
}
.hai{
    width: 100%;
    height: 1.2rem;
    background: rgb(236, 233, 233);
    .shang{
        display:flex;
        align-items: center;
        justify-content: flex-start;
        margin: 10px 0px;
        .photo{
            width: .5rem;
            height: .5rem;
            border-radius: 50%;
            border: 2px solid rgb(221, 221, 221);
            background: #ebe8e8;
            margin:0 20px 0 15px;
            img{
                width: 100%;
            }    
        }
        span{
                color:rgb(15, 15, 15);
                font-size: .24rem;
            }
        }
        .xia{
            display: flex;
            width: 100%;
            height: .7rem;
            justify-content:space-around;
           .count{
               width: 100%;
               color:rgb(19, 18, 18);
               font-size: 18px;
               text-align:center; 
           } 
           .name{
              width: 100%;
              color:rgb(163, 162, 162);
              font-size: 12px;
              text-align:center; 
           }
        }
}
</style>
