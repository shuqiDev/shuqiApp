<!--
 * @Author: your name
 * @Date: 2019-11-23 10:01:09
 * @LastEditTime: 2019-12-02 20:11:31
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
       <p>基本设置</p>
       <ul>
           <li>
               <div class="left">
                   <p class="shang">消息推送</p>
                   <p>可以关闭通知栏的消息提醒</p>
                   </div>
               <div class="right"> <img :src="require('../assets/img/'+this.$store.state.str+'/black.png')" alt=""></div>
           </li>
            <li>
               <div class="left">
                   <p class="shang">自动购买设置</p>
                   <p>可以取消书籍章节自动购买</p>
                   </div>
               <div class="right"> <img :src="require('../assets/img/'+this.$store.state.str+'/black.png')" alt=""></div>
           </li>
            <li>
               <div class="left">
                   <p class="shang">全局亮度</p>
                   </div>
               <div class="right"> <img :src="require('../assets/img/'+this.$store.state.str+'/black.png')" alt=""></div>
           </li>
            <li>
               <div class="left">
                   <p class="shang">启动时打开最近阅读数</p>
                   <p>开启后，应用启动默认打开最近阅读的书籍</p>
                   </div>
               <div class="right"> <img :src="require('../assets/img/'+this.$store.state.str+'/black.png')" alt=""></div>
           </li>
            <li>
               <div class="left">
                   <p class="shang">启用听书悬浮窗</p>
                   <p>开始后，在播放时可通过悬浮窗回到听书页</p>
                   </div>
               <div class="right"> <img :src="require('../assets/img/'+this.$store.state.str+'/black.png')" alt=""></div>
           </li>
            <li>
               <div class="left">
                   <p class="shang">好评支持一下</p>
                   </div>
           </li>
            <li>
               <div class="left">
                   <p class="shang">清除缓存</p>
               </div>
           </li>
       </ul>
    </div> 
</template>
<script>
export default {
    name:"shezhimidder",
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
               padding-bottom: 10px;
               border-bottom: 2px solid rgb(87, 84, 84);
                .left{
                    width:80%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    font-size: 13px;
                    .shang{
                   color:rgb(231, 229, 229);
                   line-height: .5rem;
                   font-size: 18px;
                   height: .5rem;;
                    }
               
                }
                .right{
                    width: 20%;
                    display: flex;
                    flex-direction: row-reverse;
                    align-items: center;
                    img{
                        width: .3rem;
                        height: .3rem;
                    }
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
           background: rgb(255, 255, 255);
           li{
               width: 100%;
               display: flex;
               justify-content: space-between;
               padding-bottom: 10px;
               border-bottom: 2px solid rgb(175, 173, 173);
                .left{
                    width:80%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                     font-size: 13px;
                    .shang{
                   color:rgb(0, 0, 0);
                   line-height: .5rem;
                   font-size: 18px;
                   height: .5rem;;
                    }
                }
                .right{
                    width: 20%;
                    display: flex;
                    flex-direction: row-reverse;
                    align-items: center;
                    img{
                        width: .3rem;
                        height: .3rem;
                    }
                }
               
           }
       }
   }
</style>
