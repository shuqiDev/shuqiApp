<!--
 * @Descripttion: "轮播图"
 * @version: v1.0.0
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 熊小兜
 * @LastEditTime: 2019-12-06 14:24:04
 -->
<template>
    <div class="box">
        <div class="tbox">
            <p class="p">分类</p>
            <span>本周新增1085本</span>
            <i class="el-icon-arrow-right"></i>
        </div>
         <div class="classBox">
             <ul>
                 <li v-for="(item,index) in types" :key="index" @click="changetype(item.name)" >{{item.name}}</li>
             </ul>
         </div>
         <div class="contentBox">
             <BookListodo :typename="currtype"></BookListodo>
              <hr>
              <div class="content" >
                  {{msg}}
              </div>
         </div>
        
    </div>  
</template>

<script>
import BookListodo from './BookListodo';
import axios from 'axios';

export default {
  name: 'Classify',
  data () {
    return {
       types:[],
       currtype:"",
       msg:""
    }
  },
  components:{
      BookListodo
  },
  created(){
    axios.get('http://localhost:3000/types')
    .then((response)=> {
        // console.log(response.data);
        this.types = response.data;
        this.currtype = this.types[0].name;//把拿到的类型的第一个赋给当前类型。
        this.msg ="全部"+ this.types[0].name;
    })
    .catch(function (error) {
        console.log(error);
    });
  },
  methods:{
      changetype(typename){
          this.currtype = typename;
           return this.msg="全部"+this.currtype
      }
  }
}
</script>

<style scoped>
.box{
    width: 95%;
    margin: 0 auto;
    margin-top:.3rem;
    /* background-color: white; */
}
.classBox,.tbox{
    width: 100%;
    background-color: white;    
}

.classBox ul{
    display: flex;
    width: 100%;
    height: .4rem;
    overflow-x: auto;/*横向滚动*/
    margin-bottom: .1rem;
}

.classBox ul li{
    width:.4rem;
    padding-right: .1rem;
    font-size: .2rem;
    flex-shrink: 0; 
    text-align: center;
    line-height: .4rem;
}

.contentBox{
    width: 100%;
    min-height:2rem;
    background-color: rgb(233, 215, 187);
    border-radius: .2rem;
}
.tbox{
    width: 100%;
    height: .7rem;
    /* background-color: blueviolet; */
    position: relative;
    line-height: .7rem;
}
.p{
    font-size: .25rem;
}
i{
    position: absolute;
    top:.17rem;
    right:.15rem;
    font-size: .4rem;
}
span{
    position: absolute;
    left: .6rem;
    top: 0.05rem;
    height: .25rem;
    width: 1.3rem;
    text-align: center;
    color: white;
    letter-spacing: .02rem;
    line-height: .25rem;
    background-color: rgb(121, 93, 3);
    border-radius: .18rem .1rem .1rem 0;
}
.content{
    height: .3rem;
    text-align: center;
    line-height: .3rem;
    font-size: .25rem;
}
</style>
