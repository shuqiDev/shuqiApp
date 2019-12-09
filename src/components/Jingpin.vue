<!--
 * @Descripttion: "轮播图"
 * @version: v1.0.0
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 熊小兜
 * @LastEditTime: 2019-12-05 16:25:21
 -->
<template>

    <div class="hotBox">   
        <div class="top">
             <img src="../assets/img/up.jpg" class="up">
            本期精品
        </div> 
        <div class="topr"  @click="changes">
            换一换
            <img src="../assets/img/change.jpg" class="change">
        </div>   
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
        fetch('http://localhost:3000/books1')
        .then(res=>{
            // console.log(res);
            return res.json();
        })
        .then(data=>{
            this.books= data;
            // console.log(data);
        })
        .catch(err=>{
            console.log(err);
        })
    },
    methods:{
          changes: function() {
            fetch("http://localhost:3000/books/")
                .then(res => {
                console.log("-----2" + res);
                return res.json();
                })
                .then(data => {
                let obj = data;
                this.books = data.slice(8,16);
                })
                .catch(err => {
                console.log(err);
                });
            }
    } 

 }
</script>
<style lang="scss" type="text/css" scoped >
.hotBox{
   margin: 0 auto .1rem;
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
    .up{
        width:.4rem;
        height: .4rem;
        vertical-align: middle;
    }
}
.topr{
    width: 1rem;
    // height: .4rem;
    float: right;
    font-size: 0.2rem;
    line-height: .4rem;
    text-align: center;
}
.change{
    width:.2rem;
    height: .2rem;
}
.bottom{
    width: 100%;
    // height: 1.5rem;
    margin-top: .4rem;
}
.content{
    width: 100%;
    height: 2rem;
}
ul{
    width: 100%;
    height: 5rem;
    padding:10px 0;
}

li{
    width:0.87rem;
    height: 1.9rem;
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
