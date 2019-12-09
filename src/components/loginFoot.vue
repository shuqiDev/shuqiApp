<!--
 * @Author: your name
 * @Date: 2019-11-23 10:01:09
 * @LastEditTime: 2019-12-02 16:27:44
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
        <p>第三方账号快速登录</p>
        <ul>
            <li class="yi"><img src="../assets/img/qq.png" alt=""></li>
            <li class="er"><img src="../assets/img/weixin.png" alt=""></li>
            <li class="san"><img src="../assets/img/weibo.png" alt=""></li>
            <li class="si"><img src="../assets/img/zhifubao.png" alt=""></li>
            <li class="wu"><img src="../assets/img/taobao.png" alt=""></li>
        </ul>
        <p class="xia">登录既同意<span>《用户协议》</span>及<span>《隐私协议》</span></p>
    </div>
</template>
<script>
export default {
    name:"Search",
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
    height: 1.5rem;
    padding: 10px 20px;
    box-sizing: border-box;
    text-align: center;
    background: #000;
    margin-top:1.2rem;
    p{  
        height: .6rem;
        text-align: center;
        font-size: 16px;
        color:rgb(231, 229, 229);
    }
    ul{
        display: flex;
        justify-content:space-around;
        li{
            width: .4rem;
            height: .4rem;
            border-radius: 50%;
            text-align: center;
            img{
                margin-top:3px;
                width: 80%;
            }
        }
        .yi{
           background: rgb(71, 166, 243);
        }
        .er{
           background:rgb(90, 233, 90);
        }
        .san{
            background: rgb(241, 5, 5);
        }
        .si{
            background: rgb(18, 162, 245);
        }
        .wu{
            background: orangered;
        }
    }
 .xia{
     margin-top:20px;
     color:rgb(100, 99, 99);
     font-size:14px;
     span{
        color: rgb(13, 110, 29);
     }
 }
}
.hai{
    width: 100%;
    height: 1.5rem;
    padding: 10px 20px;
    box-sizing: border-box;
    text-align: center;
    background: rgb(255, 255, 255);
    margin-top:1.2rem;
    p{  
        height: .6rem;
        text-align: center;
        font-size: 16px;
        color:rgb(94, 92, 92);
    }
    ul{
        display: flex;
        justify-content:space-around;
        li{
            width: .4rem;
            height: .4rem;
            border-radius: 50%;
            text-align: center;
            img{
                margin-top:3px;
                width: 80%;
            }
        }
        .yi{
           background: rgb(71, 166, 243);
        }
        .er{
           background:rgb(90, 233, 90);
        }
        .san{
            background: rgb(241, 5, 5);
        }
        .si{
            background: rgb(18, 162, 245);
        }
        .wu{
            background: orangered;
        }
    }
 .xia{
     margin-top:20px;
     color:rgb(100, 99, 99);
     font-size:14px;
     span{
        color: rgb(13, 110, 29);
     }
 }
}
</style>
