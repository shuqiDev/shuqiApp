<!--
 * @Descripttion: "轮播图"
 * @version: v1.0.0
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 熊小兜
 * @LastEditTime: 2019-12-05 17:50:43
 -->
<template>

    <div class="hotBox">   
        <div class="bottom">
            <div class="content">
                <ul>
                    <li v-for="(book,index) in books" :key="index">
                        <img :src="book.img">
                        <span>{{book.name}}</span>
                        <p>{{book.author}}</p>
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
  width:100%;
//   margin-top: .4rem;
//   margin-bottom: .1rem;
  background-color: white;
}
.bottom{
    width: 100%;
}
.content{
    width: 100%;
    height: 2rem;
}
ul{
    width: 100%;
    height:2rem;
    padding:10px 0;
}

li{
    width:1.8rem;
    height: .8rem;
    margin: 3px 3px;
    float: left;
}
 .content img{
    display: block;
    float: left;
    width: .6rem;
    height: 100%;
    border-radius:.05rem;
    margin-right: 5px;
}
span{
    display: block;
    width: 60%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 10px 0;
}

</style>
