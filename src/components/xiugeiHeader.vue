<!--
 * @Author: your name
 * @Date: 2019-11-23 10:01:09
 * @LastEditTime: 2019-12-07 19:08:51
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
         <router-link  :to='"/my"'>
        <img :src="require('../assets/img/'+this.$store.state.str+'/fan.png')" alt="">
         </router-link>
        <span>我的账号</span>
        <span class="left" @touchstart="change">保存</span>
    </div>
</template>
<script>
export default {
    name:"shezhiHeader",
    data(){
        return {
           
        }    
    },
    methods:{
        change(){
			 fetch('api/user/'+this.$store.state.id,{
                method:"put",  
                 headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                      },  
           body:'id='+this.$store.state.id+'&'+'username'+'='+this.$store.state.username+'&'+'usersex'+'='+this.$store.state.sex+'&'+'userpass'+'='+this.$store.state.userpass
                
            })
            .then(res=>{
                return res.json();
            })
            .then(data=>{
                console.log("////////")
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
       
        }
    }


    
</script>
<style lang="scss" scoped type="text/css">
.box{
     width: 100%;
     height: .5rem;
     color:rgb(231, 229, 229);
     line-height: .5rem;
     text-align: center;
     font-size: .24rem;
     background: #333;
     img{
         width: .24rem;
         height: .24rem;
         float: left;
         margin-top:15px;
         margin-left:10px;
     }
     .left{
         float: right;
         font-size: 16px;
         margin-right: 10px;
          color:rgb(168, 166, 166);
     }
}
.hai{
     width: 100%;
     height: .5rem;
     color:rgb(0, 0, 0);
     line-height: .5rem;
     text-align: center;
     font-size: .24rem;
     background: rgb(251, 250, 250);
     img{
         width: .24rem;
         height: .24rem;
         float: left;
         margin-top:15px;
         margin-left:10px;
     }
      .left{
         float: right;
          font-size: 16px;
           margin-right: 10px;
           color:rgb(168, 166, 166);
     }
}
</style>
