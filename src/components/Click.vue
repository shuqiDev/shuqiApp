<!--
 * @Descripttion: "轮播图"
 * @version: v1.0.0
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 熊小兜
 * @LastEditTime: 2019-12-06 17:59:11
 -->
<template>

    <div class="hotBox">   
        <div class="top">
            点击上十万的好书
        </div> 
        <div class="bottom">
            <div class="content" @click="add" v-for="(book,index) in books" :key="index" >
                <div class="imgbox">
                    <img :src="book.img" class="imgs">
                </div>
                <div class="textbox" >
                    <span>{{book.name}}</span>
                    <p>{{book.center}}</p>
                    <keep-alive>
                    <p v-html="msg" class="ptext" :key="msg">{{msg}}</p>
                    </keep-alive>
                </div>
            </div>
        </div> 
    </div>  
</template>
 <script>

 export default {
  name:"Get",
    data(){
        return {
            msg:'10000',
            books:[]
        }
    }
    ,
//     mounted(){
// //         if (localStorage.setItem) {
// //             // alert("1")
// //     this.msg= localStorage.getItem('msg')
// //   }
//     },
    created(){
        fetch('http://localhost:3000/type')
        .then(res=>{
            // console.log(res);
            return res.json();
            
        })
        .then(data=>{
            this.books= data.slice(0,1);
            // console.log(data);
            if (localStorage.setItem) {
            // alert("1")
                    this.msg= localStorage.getItem('msg')
                }
        })
        .catch(err=>{
            console.log(err);
        })
    },
    
  methods: {
  
    add:function(msg){
            this.msg++;
            // console.log(typeof(msg))
            localStorage.setItem("msg",this.msg);
            console.log()
            // msg = localStorage.getItem("msg",this.value);
            console.log("---"+msg)
         }
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
    line-height: .4rem;
    padding-left: .2rem;
}
.bottom{
    width: 100%;
    // margin-top: .4rem;
}
.content{
    display: flex;
    width: 100%;
}
.imgbox{
    width: 30%;
    height: 1.5rem;
    border: 1px solid gray;
    .imgs{
        height: 1.5rem;
    }
}
.textbox{
    width: 70%;
    margin-left: .1rem;
    
    p{
        height: .5rem;
        line-height: .25rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp:2;
        overflow: hidden;
    }
    span{
        font-size: .2rem;
    }
    .ptext{
        letter-spacing: .1rem;
        font-size: .2rem;
        line-height: .35rem;
        color: rgb(3, 117, 56);
        margin-top: .2rem;
    }
}
</style>
