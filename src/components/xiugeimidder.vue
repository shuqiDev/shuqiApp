<!--
 * @Author: your name
 * @Date: 2019-11-23 10:01:09
 * @LastEditTime: 2019-12-07 19:13:29
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
               <div class="left">
                   <p class="shang">头像</p>
                   </div>
               <div class="right"> 
                      
                  <img :src="require('../assets/img/'+this.$store.state.str+'/black.png')" alt="" @touchstart="change">
                   <div  class="tupian"> 
                  <img id="imgId" :src="require('../assets/img/'+this.$store.state.str+'/me.png')" alt="">
                   </div>
              </div>
           </li>
            <li>
               <div class="left">
                   <p class="shang">昵称</p>
                   </div>
               <div class="right"> 
                <img :src="require('../assets/img/'+this.$store.state.str+'/black.png')" alt="">
                <span>小可爱</span>
                </div>
           </li>
            <li>
               <div class="left">
                   <p class="shang">手机</p>
                   </div>
               <div class="right"> 
                   <span>1500***3205</span>
               </div>
           </li>
            <li>
               <div class="left">
                   <p class="shang">性别</p>
                   </div>
               <div class="right">
                    <img :src="require('../assets/img/'+this.$store.state.str+'/black.png')" alt="" @touchstart="sexx">
                    <span>{{sex}}</span>
                    </div>
           </li>
            <li>
               <div class="left">
                   <p class="shang">ID <span>反馈时可提控,点击复制</span></p>
                   </div>
               <div class="right"> <img :src="require('../assets/img/'+this.$store.state.str+'/black.png')" alt=""></div>
           </li>
            <li>
               <div class="left">
                   <p class="shang">绑定账号<span>帮定后可使用绑定账号登录</span></p>
                   </div>
                   <div class="right"> <img :src="require('../assets/img/'+this.$store.state.str+'/black.png')" alt=""></div>
           </li>
            <li>
               <div class="left">
                   <p class="shang">修改密码</p>
                   </div>
                   <div class="right"> <img :src="require('../assets/img/'+this.$store.state.str+'/black.png')" alt="" @touchstart="open"></div>
           </li>
       </ul>
       <div :class="t">
           <p @touchstart="ontouchstart">拍照</p>
           <p>相册</p>
       </div>
       <div :class="ifsex">
       <mt-radio  align="right" v-model="sex" :options="options">
       </mt-radio>
       </div>
    </div> 
</template>
<script>
import { Radio } from 'mint-ui';
import Vue from 'vue';

Vue.component(Radio.name, Radio);

export default {
    name:"shezhimidder",
    data(){
        return {
           t:"xiao",
           options:[
               {
                label: '男',
                value: '男'
                },
                 {
                label: '女',
                value: '女'
                }
           ],
           sex:"女",
           ifsex:"nosex",
           pass:"", 
        }    
    },
    methods:{
        change(){
         if(this.t=="xiao"){
             this.t="zhaopian"
         }else{
             this.t="xiao"
         }
        },    
        sexx(){
           if(this.ifsex=="nosex"){
               this.ifsex="yessex"
           }else{
                this.ifsex="nosex"
           }
        },
        open() {
          this.$prompt('请输入新的密码', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/,
          inputErrorMessage: '密码格式不正确',
          center: true,
        }).then(({ value }) => {
          this.psss=value;
          console.log(this.psss)
          console.log(this.psss)
          this.xiugeixinxi()
          this. xiugeiuserpass()
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      },
      xiugeixinxi(){
        let d= this.sex 
        this.$store.commit("xiugeixinxi",d)
      },
       xiugeiuserpass(){
        let c= this.psss  
        this.$store.commit("xiugeiuserpass",c)
      },
        ontouchstart(){
           this.captureImage();
        },
        captureImage:function(){
        var cmr = window.plus.camera.getCamera();//获取摄像头对象
        var res = cmr.supportedImageResolutions[2];//获取支持的分辨率，这里是第三个分辨率,直接使用supportenImageResolutions可以获取自己手机所支持的分辨率有多少种格式，返回值类型 string[]
        var fmt = cmr.supportedImageFormats[0];//JPG格式，
    
        cmr.captureImage( function( path ){//成功回调函数，获取路径
                alert( "拍照成功" );
                //把保存在app目录下的照片显示在img标签里
				window.plus.io.resolveLocalFileSystemURL(path, function(entry) {
					let pathPhoto = entry.toLocalURL();
					console.log(pathPhoto);
					document.getElementById("imgId").src=pathPhoto;
				}, function(e) {
				    console.log("出错了！");
				});
            },
            function( error ) {
                alert( "Capture image failed: " + error.message );
            },
            {resolution:res,format:fmt}//分辨率和格式，必填，就是上面获取到的。
        );
    }  
    }
}  
</script>
<style lang="scss" scoped type="text/css">
   .box{
       width: 100%;
       height: 4.7rem;
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
                   height: .5rem;
                    span{
                    font-size:14px;
                    color: rgb(161, 159, 159);
                    margin-left:5px;
                   }
                    }
               
                }
                .right{
                    width: 20%;
                    display: flex;
                    flex-direction: row-reverse;
                    align-items: center;
                    color:rgb(207, 204, 204);
                    img{
                        width: .3rem;
                        height: .3rem;
                    }
                    .tupian{
                       width: .3rem;
                       height: .3rem;
                       border-radius: 50%;
                       background: rgb(175, 172, 172);
                       img{
                           width: .3rem;
                           height: .3rem;
                           border-radius: 50%;
                       }
                    }
                }
               
           }
       }
      .zhaopian{
          width:100%;
          height: .6rem;
          position:fixed;
          left: 0;
          bottom: 0;
          p{
          width: 100%;
            height: .3rem;
            line-height: .3rem;
            text-align: center;
            font-size: 18px;
            background: #333; 
            color: #fff;
            border-bottom: 1px solid rgb(184, 181, 181);
          }
      } 
      .xiao{
          display:none;
      }
      .yessex{
          width: 90%;
          height: .45rem;
          position: fixed;
          left: 0;
          right: 0;
          top:0;
          bottom: 0;
          margin: auto;
           display:block;
      }
      .nosex{
          display:none;
      }
      
   }
   .hai{
       width: 100%;
        height: 4.7rem;
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
                   height: .5rem;
                   span{
                    font-size:14px;
                    color: rgb(224, 220, 220);
                    margin-left:5px;
                   }
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
                    .tupian{
                       width: .3rem;
                       height: .3rem;
                       border-radius: 50%;
                       background: rgb(175, 172, 172);
                        img{
                           width: .3rem;
                           height: .3rem;
                           border-radius: 50%;
                       }
                    }
                }
               
           }
       }
       .zhaopian{
          width:100%;
          height: .6rem;
          position:fixed;
          left: 0;
          bottom: 0;
          p{
            width:100%;
            height: .3rem;
            line-height: .3rem;
            text-align: center;
            font-size: 18px;
            background: rgb(255, 255, 255);
            border-bottom: 1px solid rgb(187, 183, 183);  
          }
      } 
      .xiao{
          display:none;
      }
       .yessex{
          width: 90%;
          height: .45rem;
          position: fixed;
          left: 0;
          right: 0;
          top:0;
          bottom: 0;
          margin: auto;
           display:block;
      }
      .nosex{
          display:none;
      }
   }
</style>
