<!--
 * @Author: your name
 * @Date: 2019-11-23 10:01:09
 * @LastEditTime: 2019-12-02 20:08:39
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
       <p>关于书旗小说</p>
       <ul>
           <li>
               <div class="left">
                    <p class="shang">版本更新</p>
                   </div>
               <div class="right"><p>当前已经是最新版本</p></div>
           </li>
           <li>
               <div class="left">
                   <p class="shang">版本介绍</p>
                   </div>
               <div class="right"> <img :src="require('../assets/img/'+this.$store.state.str+'/black.png')" alt=""></div>
           </li>
       </ul>
    </div> 
</template>
<script>
export default {
    name:"shezhiFoot",
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
       width: 100%;
       p{
           width: 100%;
           height: .3rem;
           line-height: .3rem;
           color:16px;
           color:rgb(160, 158, 158);
           padding:0 15px;
           box-sizing: border-box;
       }
       ul{
           width: 100%;
           background: #333;
           li{
               width: 100%;
               display: flex;
               justify-content: space-between;
                .left{
                    width:50%;
                    display: flex;
                    align-items: center;
                     .shang{
                   color:rgb(231, 229, 229);
                   line-height: .5rem;
                   font-size: 18px;
                   height: .5rem;;
                    }
                }
                .right{
                    width: 47%;
                    display: flex;
                    flex-direction: row-reverse;
                    align-items: center;
                    img{
                        width: .3rem;
                        height: .3rem;
                    }
                }
               span{
                   height: .5rem;
                   color:rgb(231, 229, 229);
                   line-height: .5rem;
                   text-align: center;
                   font-size: 18px;
               }
           }
       }
   }
   .hai{
       width: 100%;
       p{
           width: 100%;
           height: .3rem;
           line-height: .3rem;
           color:16px;
           color:rgb(160, 158, 158);
           padding:0 15px;
           box-sizing: border-box;
       }
       ul{
           width: 100%;
           background: rgb(255, 252, 252);
           li{
               width: 100%;
               display: flex;
               justify-content: space-between;
                .left{
                    width:50%;
                    display: flex;
                    align-items: center;
                     .shang{
                   color:rgb(0, 0, 0);
                   line-height: .5rem;
                   font-size: 18px;
                   height: .5rem;;
                    }
                }
                .right{
                    width: 47%;
                    display: flex;
                    flex-direction: row-reverse;
                    align-items: center;
                    img{
                        width: .3rem;
                        height: .3rem;
                    }
                }
               span{
                   height: .5rem;
                   color:rgb(231, 229, 229);
                   line-height: .5rem;
                   text-align: center;
                   font-size: 18px;
               }
           }
       }
   }
</style>
