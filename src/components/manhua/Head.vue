<!--
 * @Descripttion: "轮播图"
 * @version: v1.0.0
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 党婉珍
 * @LastEditTime: 2019-12-06 16:07:14
 -->
<template>
    <div class="head">  
        <div class="topBox">
            <i class="el-icon-arrow-left"></i>
            <h2>让好书伴你入眠</h2>
        </div> 
        <div class="change">
            <div class="header">
                <span>根据阅读兴趣推荐</span>
                <span>换一换<i class="el-icon-refresh"></i></span>
            </div>
            <div class="bot">
                
            </div>
        </div>
    </div>  
</template>
 <script>

 export default {
  name:"Head",
    // data(){
    //     return {
    //         hotbooks:[]
    //     }
    // },
    // methods:{
    //     back(){
    //       this.$router.go(-1);
    //   }
    // },
    // created(){
    //     fetch('http://localhost:3000/hotbooks')
    //     .then(res=>{
    //         console.log(res);
    //         return res.json();
    //     })
    //     .then(data=>{
    //         this.hotbooks= data;
    //         // console.log(data);
    //     })
    //     .catch(err=>{
    //         console.log(err);
    //     })
    // } 
 }
</script>
<style lang="scss" type="text/css" scoped >
i{
    font-size:26px;
}
.topBox{
    margin: .2rem 0;
    display:flex;
    h2{
        margin-left: .8rem
    }
}
.change{

}

</style>
