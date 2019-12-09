<!--
 * @Descripttion: "轮播图"
 * @version: v1.0.0
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 熊小兜
 * @LastEditTime: 2019-12-05 15:38:42
 -->
<template>

    <div class="hotBox">   
        
        <div class="bottom">
            <div class="content"  v-for="(book,index) in books" :key="index" >
                <div class="imgbox">
                    <img :src="book.src" class="imgs">
                </div>
            </div>
        </div> 
    </div>  
</template>
 <script>

 export default {
  name:"Img",
    data(){
        return {
            msg:100000,
            books:[]
        }
    }
    ,
    created(){
        fetch('http://localhost:3000/bannerimgs')
        .then(res=>{
            // console.log(res);
            return res.json();
        })
        .then(data=>{
            this.books= data;
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
  background-color: white;
}
.bottom{
    display: flex;
    overflow-x:auto;
    width: 100%;
    height: 1.8rem;
    margin: 0 .4rem 0 0 ;
    // border-radius: .2rem;
}
.content{
    width: 100%;
    height: 1.5rem;
    flex-shrink: 0; 
}
.imgbox{
    width: 95%;
    height: 1.5rem;
    border: 1px solid rgb(187, 184, 184);
    margin: .1rem auto;
    border-radius: .2rem;
    .imgs{
        width: 100%;
        height: 100%; 
        border-radius: .2rem;
    }
}



</style>
