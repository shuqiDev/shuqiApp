<!--
 * @Author: your name
 * @Date: 2019-11-23 10:01:09
 * @LastEditTime: 2019-12-03 09:56:27
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
        <p>手机号：<input type="text" placeholder="手机号/邮箱" v-model="username"></p>
        <p class="xia">密码:&nbsp; <input type="text" placeholder="请输入密码" v-model="userpass"></p>
    </div>
    <div class="sss">
    <input type="button" value="注册" @touchstart="rets">
    </div>
    </div>
</template>
<script>
export default {
    name:"restiveConter2",

    data(){
        return {
           username:"",
           userpass:""
        }    
    },
    methods:{
      rets(){
          var r =  /^1[3-9]\d{9}$/ ;
          var p= /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/ ;
          if(r.test(this.username)&p.test(this.userpass))
          {
              let str="userpass:"+this.userpass
			 fetch('api/user',{
               
                method:"post",
                 headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                      },
           body:'username'+'='+this.username+'&'+'userpass'+'='+this.userpass
                
            })
            .then(res=>{
                return res.json();
            })
            .then(data=>{
				 console.log(data)
                if(data!=null){
                    console.log("成功")
                    this.userpass=""
                    setTimeout(()=>{
						let str = "/login";
						this.$router.push({path:str});
					},1100);
                }
            })
          } 
          else{
           alert("注册失败")
     }  
     }
    }
}

    
</script>
<style lang="scss" scoped type="text/css">
.box{
    width: 100%;
    height: 5rem;
.content{
    width: 100%;
    height: 1rem;
    color:rgb(255, 255, 255);
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
        background: rgb(12, 12, 12);
        color:rgb(241, 236, 236);
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
        color:rgb(255, 255, 255);
    }        
    }
}
.sss{
    width: 100%;
    height: .7rem;
    background:black;
    color:rgb(231, 229, 229);
    padding: 10px 20px;
    box-sizing: border-box;
    margin-top:.3rem;
    text-align: center;
    input{
        width:99%;
        height:.5rem;
        background: rgb(13, 110, 29);
        outline:medium;
        border-radius: 10px;
        border:none;
        font-size: .22rem;
    }
    p{  width:99%;
        color:rgb(100, 99, 99);
        text-align: left;
        margin-top:.2rem;  
    }
}
}
.hai{
    width: 100%;
    height: 5rem;
.content{
    width: 100%;
    height: 1rem;
    color:rgb(22, 22, 22);
    background: #fff;
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
        background: rgb(255, 255, 255);
        color:rgb(7, 7, 7);
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
.sss{
    width: 100%;
    height: .7rem;
    background:#fff;
    color:rgb(248, 246, 246);
    padding: 10px 20px;
    box-sizing: border-box;
    margin-top:.3rem;
    text-align: center;
    input{
        width:99%;
        height:.5rem;
        background: rgb(13, 110, 29);
        outline:medium;
        border-radius: 10px;
        border:none;
        font-size: .22rem;
        color: #fff;
    }
    p{  width:99%;
        color:rgb(100, 99, 99);
        text-align: left;
        margin-top:.2rem;  
    }
}
}
</style>
