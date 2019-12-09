<!--
 * @Descripttion: "轮播图"
 * @version: v1.0.0
 * @Author: 田江
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 熊小兜
 * @LastEditTime: 2019-12-06 10:21:41
 -->
<template>
    <div class="box">   
        <div style="display:none" >{{typename}}</div>
         <ul>
            <li v-for="(book,index) in books" :key="index" >
                <!-- <router-link  :to='"/BookDetailPage/"+book.id'> -->
                        <div class="imgBox">
                            <img :src="book.img" alt="">
                        </div>
                        <div class="infoBox">
                            <ul>
                                <li class="name">{{book.name}}</li>
                                <li class="count">{{book.lookcount}}</li>
                            </ul>
                        </div>
                <!-- </router-link> -->
            </li>
        </ul>
    </div>  
</template>

<script>
import axios from 'axios';

export default {
  name: 'BookList',
  props:['typename'],//言情，武侠
  data () {
    return {
        allBooks:[],
        books:[]
    }
  },
  created() {
     //从后端获取数据     
     axios.get('http://localhost:3000/type')
     .then(res=>{ 
         this.allBooks = res.data;//内部数据，由于没有渲染在组件里，所以，没有触发组件更新
         this.books = this.getBooksByType(this.allBooks);//内部数据，由于渲染到了页面，所以，触发了组件更新
     })
     .catch(err=>{
         console.log(err);
     });
  },
  beforeUpdate(){
    //   console.log("数据更新了------------：");
      this.books = this.getBooksByType(this.allBooks);
  },
  methods:{
     getBooksByType(data){//根据类型获取数据
         let arr=[];
         for(let i in data){
             if(data[i].type==this.typename){
                 arr.push(data[i]);
             }
         }
         return arr;
     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
  margin: 5px auto 0;
  width:95%;
}

.box>ul{
    width:100%;
    display: flex;
    justify-content: space-between;
}

.box>ul>li{
    margin-top:.1rem;
    width: 24%;
}

.imgBox{
    width:100%;
    height: 1rem;
}

.infoBox{
    width: 100%;
    /* background-color: pink; */
    
}
.name{
        width: 100%;
        white-space: nowrap;
        overflow:hidden;
        text-overflow: ellipsis;

    }
.count{
    color: rgb(87, 57, 2);
}
img{
    width: 100%;
    height: 100%;
}


</style>
