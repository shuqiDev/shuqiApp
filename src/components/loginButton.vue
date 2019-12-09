<!--
 * @Author: your name
 * @Date: 2019-11-23 10:01:09
 * @LastEditTime: 2019-12-07 16:55:03
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
        <input type="button" value="登录" @touchstart="login">
         <router-link  :to='"/restive"'>
        <p>手机号注册</p>
         </router-link>
    </div>
</template>
<script>
export default {
    name:"loginButton",
    props:['username','userpass'],
    data(){
        return {
           
        }    
    },
  methods:{
        login(){
        var r =  /^1[3-9]\d{9}$/ ;
        if(r.test(this.username))
        {
            fetch('api/user?username='+this.username)//jsonsever
            .then(res=>{
                return res.json();
            })
                    .then(data=>{
                        console.log(data)
                        let pass=data[0].userpass
                        let name=data[0].username
                        console.log(pass)
                        if(this.userpass==pass){
                            console.log("成功")
                            console.log(name)
                            let str="username"+"="+name
                            document.cookie = str;
                            let a=data[0].id
                            let b=this.username
                             this.$store.commit("logxinxi",a)
                              this.$store.commit("logname",b)
                            setTimeout(()=>{
                                        let str = "/my";
                                        this.$router.push({path:str});
                                    },11);
                            }else{
                            alert("密码或账号错误")
                            }
                        })
                    .catch(err=>{
                    console.log(err);
                    })  
        }else{
            alert("密码或账号错误")
        }
       
        }
    }
}   
</script>
<style lang="scss" scoped type="text/css">
.box{
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
.hai{
    width: 100%;
    height: .7rem;
    background:rgb(255, 254, 254);
    color:rgb(250, 250, 250);
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
        color:#fff
    }
    p{  width:99%;
        color:rgb(100, 99, 99);
        text-align: left;
        margin-top:.2rem;  
    }
}
</style>
