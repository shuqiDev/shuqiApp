<!--
 * @Descripttion: "轮播图"
 * @version: v1.0.0
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 熊小兜
 * @LastEditTime: 2019-12-06 10:08:46
 -->
<template>

    <div class="hotBox"> 
        <div class="bottom">
            <div class="content" @click="add" v-for="(book,index) in books" :key="index" >
                <div class="imgbox">
                    <img :src="book.img" class="imgs">
                </div>
                <div class="textbox" >
                    <span>{{book.name}}</span>
                    <p>{{book.center}}</p>
                    <p class="ptext">{{book.aut}}</p>
                    <div class="tiletype">{{book.tiletype}}</div>
                    <div class="over">完结</div>
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
            msg:100000,
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
    },
    methods:{
        add:function(msg){
            // msg=Number(msg)
            // console.log(typeof(this.msg))
            this.msg++;
            // localStorage.setItem("msg");
        }
    }  
 }
</script>
<style lang="scss" type="text/css" scoped >
.hotBox{
  margin: 0 auto;
  width:100%;
  height: 100%;
  background-color: white;
}
.bottom{
    width: 100%;
    border-top: 1px solid gray;
}
.content{
    display: flex;
    width: 100%;
    height: 1.5rem;
    margin: .1rem 0;
    background-color: white;
    border-bottom: 1px solid gray;
    padding-bottom:15px;
}
.imgbox{
    width: 30%;
    height: 1.5rem;
    border: 1px solid gray;
    border-radius: .1rem;
    .imgs{
        height: 1.5rem;
    border-radius: .1rem;
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
        width: 50%;
        font-size: .2rem;
        line-height: .35rem;
        float: left;
        margin: .3rem 0 0;
    }
    .over{
        float: right;
        width: .4rem;
        height: .25rem;
        color: rgb(3, 117, 56);
        border: 1px solid rgb(3, 117, 56);
        font-size: .18rem;
        line-height: .25rem;
        text-align: center;
        margin: .3rem .1rem 0;
    }
    .tiletype{
        float: right;
         width:.4rem;
        height: .25rem;
        border: 1px solid rgb(69, 70, 69);
        margin: .3rem .1rem  0  0;
        font-size: .18rem;
        line-height: .25rem;
        text-align: center;
    }
}
</style>
