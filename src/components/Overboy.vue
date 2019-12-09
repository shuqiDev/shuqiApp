<!--
 * @Descripttion: "轮播图"
 * @version: v1.0.0
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 熊小兜
 * @LastEditTime: 2019-12-06 14:11:22
 -->
<template>

    <div class="hotBox">   
        <div class="top">
            【男频】- 完结小说
        </div>    
        <div class="bottom">
            <div class="content">
                <ul>
                    <li v-for="(book,index) in books" :key="index">
                        <img :src="book.img">
                        <span>{{book.name}}</span>
                        <p>{{book.aut}}</p>
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
        fetch('http://localhost:3000/type')
        .then(res=>{
            // console.log(res);
            return res.json();
        })
        .then(data=>{
            this.books= data.slice(0,4);
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
    // float: left;
    font-size: 0.2rem;
    line-height: .4rem;
    padding-left: .2rem;
}
.bottom{
    width: 100%;
    height: 2rem;
    // margin-top: .4rem;
}
.content{
    width: 100%;
    // height: 2.1rem;
}
ul{
    width: 100%;
    height: 2rem;
    padding:10px 0;
    background-color: white;
}

li{
    width:0.87rem;
    height: 1.85rem;
    float: left;
    margin: 0 3px;
}
 .content img{
     display: block;
    width: 100%;
    height: 1.2rem;
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
