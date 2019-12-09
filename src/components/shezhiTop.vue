<!--
 * @Author: your name
 * @Date: 2019-11-23 10:01:09
 * @LastEditTime: 2019-12-07 21:04:18
 * @LastEditors: 党婉珍
 * @Description: In User Settings Edit<!--
 * @Author: 熊小兜
 * @Date: 2019-11-07 00:23:30
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-11-16 14:59:42
 * @Description:"搜索"
 -->
<template>
   <div :class="this.$store.state.str">
       <p>账号设置</p>
       <ul>
           <li>
               <div class="left"><img :src="require('../assets/img/'+this.$store.state.str+'/me.png')" alt="">&nbsp;&nbsp;&nbsp;&nbsp;<span @touchstart="denlu">{{title}}</span></div>
               <div class="right" @touchstart="change"> <img :src="require('../assets/img/'+this.$store.state.str+'/black.png')" alt=""></div>
           </li>
       </ul>
       <mt-popup v-model="t" class="ccc">
       <div class="tuichu">
           <p>退出账号</p>
           <div class="shifuo">
               退出后不再同步书籍信息、阅读记录等。确定要退出吗
           </div>
           <div class="btu"><span @touchstart="quxiao">取消</span><span class="bbt" @touchstart="shancook">退出账号</span></div>
       </div>
       </mt-popup>
    </div> 
</template>
<script>
import Vue from 'vue'
import { Popup } from 'mint-ui';
Vue.component(Popup.name, Popup);

export default {
    name:"shezhiTop",
    data(){
        return {
           t:false,
           title:"立即登录",
        }    
    },
     created() {
        let cook=this.getCookie("username")
        if(cook!=""){
            this.title="退出当前账号" 
        }else{
             this.title="立即登录" 
        }
    },updated() {
        let cook=this.getCookie("username")
        if(cook!=""){
            this.title="退出当前账号" 
        }else{
             this.title="立即登录" 
        }
    },
    methods:{
        change(){
             this.t=true;
        },
        quxiao(){
            this.t=false;
        },
        shancook(){
            this.removeCookie("username")
             this.t=false;  
        },
        removeCookie(key){
        let str="username"+"="+""
         document.cookie = str;
        },
        denlu(){
            if(this.title=="立即登录"){
                 setTimeout(()=>{
						let str = "/login";
						this.$router.push({path:str});
					},1000);
            }
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
       .ccc{
           position: fixed;
           left: 0;
           right: 0;
           top:0;
           bottom: 0;
           margin:auto;
       }
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
                    width:80%;
                    display: flex;
                    align-items: center;
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
               span{
                   height: .5rem;
                   color:rgb(231, 229, 229);
                   line-height: .5rem;
                   text-align: center;
                   font-size: 18px;
               }
           }
       }
       img{
          width: .4rem;
          height: .4rem; 
       }
       .tuichu{
          width: 3rem;
          height: 1.8rem;
          background: rgb(6, 1, 51);
          text-align: center;
          p{
              color: #fff;
              font-size: 18px;
              height: .4rem;
              line-height: .4rem;
              border-bottom: 1px solid rgb(73, 70, 70);
          }
          .shifuo{
              width: 100%;
              color: #fff;
              font-size: 15px;
              padding:20px;
              box-sizing: border-box;
              text-align: center;
          }
          .btu{
              width: 100%;
              display: flex;
              justify-content: space-around;
              span{
                  width: 36%;
                  color:rgb(158, 155, 155);
                  height: .35rem;
                  font-size: 16px;
                  border-radius: 8px;
                  line-height: .3rem;
                  border:1px solid rgb(173, 172, 172);
              }
              .bbt{
                  background: rgb(51, 146, 83);
                  color:#000;
                  border: none;
              }
          }
       }
       .xianshi{
          width: 3rem;
          height: 1.8rem;
          background: rgb(6, 1, 51);
          position: fixed;
          left: 0;
          right: 0;
          top:0;
          bottom: 0;
          margin: auto;
          text-align: center;
          display:block;
          p{
              color: #fff;
              font-size: 18px;
              height: .4rem;
              line-height: .4rem;
              border-bottom: 1px solid rgb(73, 70, 70);
          }
          .shifuo{
              width: 100%;
              color: #fff;
              font-size: 15px;
              padding:20px;
              box-sizing: border-box;
              text-align: center;
          }
          .btu{
              width: 100%;
              display: flex;
              justify-content: space-around;
              span{
                  width: 36%;
                  color:rgb(158, 155, 155);
                  height: .35rem;
                  font-size: 16px;
                  border-radius: 8px;
                  line-height: .3rem;
                  border:1px solid rgb(173, 172, 172);
              }
              .bbt{
                  background: rgb(51, 146, 83);
                  color:#000;
                  border: none;
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
           color:rgb(14, 13, 13);
           padding:0 15px;
           box-sizing: border-box;
       }
       ul{
           width: 100%;
           background: rgb(253, 252, 252);
           li{
               width: 100%;
               display: flex;
               justify-content: space-between;
                .left{
                    width:80%;
                    display: flex;
                    align-items: center;
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
               span{
                   height: .5rem;
                   color:rgb(15, 15, 15);
                   line-height: .5rem;
                   text-align: center;
                   font-size: 18px;
               }
           }
       }
       img{
          width: .4rem;
          height: .4rem; 
       }
       .tuichu{
          width: 3rem;
          height: 1.8rem;
          background: rgb(6, 1, 51);
          text-align: center;
          p{
              color: #fff;
              font-size: 18px;
              height: .4rem;
              line-height: .4rem;
              border-bottom: 1px solid rgb(73, 70, 70);
          }
          .shifuo{
              width: 100%;
              color: #fff;
              font-size: 15px;
              padding:20px;
              box-sizing: border-box;
              text-align: center;
          }
          .btu{
              width: 100%;
              display: flex;
              justify-content: space-around;
              span{
                  width: 36%;
                  color:rgb(158, 155, 155);
                  height: .35rem;
                  font-size: 16px;
                  border-radius: 8px;
                  line-height: .35rem;
                  border:1px solid rgb(173, 172, 172);
              }
              .bbt{
                  background: rgb(51, 146, 83);
                  color:#000;
                  border: none;
              }
          }
       }
       .xianshi{
          width: 3rem;
          height: 1.8rem;
          background: rgb(6, 1, 51);
          position: fixed;
          left: 0;
          right: 0;
          top:0;
          bottom: 0;
          margin: auto;
          text-align: center;
          display:block;
          p{
              color: #fff;
              font-size: 18px;
              height: .4rem;
              line-height: .4rem;
              border-bottom: 1px solid rgb(73, 70, 70);
          }
          .shifuo{
              width: 100%;
              color: #fff;
              font-size: 15px;
              padding:20px;
              box-sizing: border-box;
              text-align: center;
          }
          .btu{
              width: 100%;
              display: flex;
              justify-content: space-around;
              span{
                  width: 36%;
                  color:rgb(158, 155, 155);
                  height: .35rem;
                  font-size: 16px;
                  border-radius: 8px;
                  line-height: .3rem;
                  border:1px solid rgb(173, 172, 172);
              }
              .bbt{
                  background: rgb(51, 146, 83);
                  color:#000;
                  border: none;
              }
          }
       }
       
   }
</style>
