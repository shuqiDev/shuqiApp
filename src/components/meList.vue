<!--
 * @Author: your name
 * @Date: 2019-11-23 10:01:09
 * @LastEditTime: 2019-12-02 14:26:24
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
       <ul>
           <li>
                 <img :src="require('../assets/img/'+this.$store.state.str+'/xiaoxi.png')" alt="">
                 <p>消息</p>
           </li>
            <li>
                 <img :src="require('../assets/img/'+this.$store.state.str+'/shoucang.png')" alt="">
                 <p>收藏</p>
           </li>
            <li>
                 <img :src="require('../assets/img/'+this.$store.state.str+'/biaoqing.png')" alt="">
                 <p>书评</p>
           </li>
            <li>
                 <img :src="require('../assets/img/'+this.$store.state.str+'/taoyan.png')" alt="">
                 <p>阅历</p>
           </li>
       </ul>
   </div> 
</template>
<script>
export default {
    name:"meList",
    data(){
        return {
           
        }    
    },
    methods:{
        
    }
}


    
</script>
<style lang="scss" scoped type="text/css">
.box{
    width: 95%;
    height: .8rem;
    background: #333;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 8px;
    margin: 10px;
    ul{
       display: flex;
       justify-content:space-around;
       li{
           width: 33.3%;
           text-align: center;
           img{
               width: 28px;
           }
           p{
               width: 100%;
                color:rgb(97, 96, 96);
           }
       }
    }
}
.hai{
    width: 95%;
    height: .8rem;
    background:rgb(255, 254, 254);
    padding: 20px;
    box-sizing: border-box;
    border-radius: 8px;
    margin: 10px;
    ul{
       display: flex;
       justify-content:space-around;
       li{
           width: 33.3%;
           text-align: center;
           img{
               width: 28px;
           }
           p{
               width: 100%;
                color:rgb(97, 96, 96);
           }
       }
    }
}
</style>
