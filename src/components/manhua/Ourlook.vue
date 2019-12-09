<!--
 * @Descripttion: "轮播图"
 * @version: v1.0.0
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 党婉珍
 * @LastEditTime: 2019-12-05 21:32:24
 -->
<template>

    <div class="hotBox">   
        <div class="top">
            大家都在看
        </div>   
        <div class="topr">
            查看更多
            <i class="el-icon-arrow-right"></i>
        </div>
        <div class="bottom">
            <div class="content">
                <ul>
                    <li v-for="(book,index) in books" :key="index">
                        <img :src="book.img">
                        <span>{{book.name}}</span>
                        <p style="color:gray;">{{book.title}}</p>
                    </li> 
                </ul>
            </div>
        </div> 
    </div>  
</template>
 <script>

 export default {
  name:"Get",
    data(){
        return {
            books:[]
        }
    }
    ,
    created(){
        fetch('http://localhost:3000/ourlookbooks')
        .then(res=>{
            console.log(res);
            return res.json();
        })
        .then(data=>{
            this.books= data;
            // console.log(data);
        })
        .catch(err=>{
            console.log(err);
        })
    } 
 }
</script>
<style lang="scss" type="text/css" scoped >
.hotBox{
  margin: 0 auto ;
  width:100%;
  background-color: white;
}
.top{
    width: 2rem;
    height: .4rem;
    float: left;
    font-size: 0.2rem;
    line-height: .5rem;
    padding-left: .2rem;
}
.topr{
    width: 1rem;
    height: .4rem;
    float: right;
    font-size: 0.15rem;
    line-height: .58rem;
    text-align: center;
}
.el-icon-arrow-right{
    font-size:.2rem;
}
.bottom{
    width: 100%;
    margin-top: .4rem;
}
.content{
    width: 100%;
    height: 2rem;
}
ul{
    width: 100%;
    padding:10px 0;
}

li{
    width: 32%;
    height: 2.2rem;
    float: left;
    margin-left: 1%;
}
 .content img{
     display: block;
    width: 100%;
    height: 1.65rem;
    border-radius:.05rem;
}
span{
    display: block;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 10px 0;
}

</style>
