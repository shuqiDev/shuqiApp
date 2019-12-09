<!--
 * @Author: 党婉珍
 * @Date: 2019-11-29 14:59:15
 * @LastEditors: 党婉珍
 * @LastEditTime: 2019-12-06 21:26:40
 * @Description: 
 -->
<template>
    <div>
        <ul class="bookDetail">
            <!-- <p v-if="!mybooks.length">空空如也，快去看书吧！</p> -->
            <li v-for="(book,index) in mybooks" :key="index" > 
                <input type="checkbox" @touchstart="checkBook(index)" :class="{isShow:$store.state.isShow}"/>
                <img :src="book.img" />
                <p class="bookname">{{book.name}}</p>
                <p style="color:gray;">{{book.title}}</p>
            </li>
            <h2 class="todelete" :class="{isShow02:$store.state.isShow}" @touchstart="toDelete()">删除<span style="color:red;">{{$store.state.count}}</span>本</h2>
            <transition name="slide-fade">
                <li>
                   <input type="checkbox"/>
                    <router-link to="/Jingxuan">
                        <transition name="component-fade" mode="out-in">
                            <img src="../../assets/img/addbook.png"/>
                            <p></p>
                            <p></p> 
                        </transition>
                    </router-link>
                </li>
            </transition>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';
import { mapState} from 'vuex';
import Mint from 'mint-ui';
import { Toast } from 'mint-ui';
export default {
  name: 'BbookDetail',
  data(){
      return {
          mybooks:[],
          // isChecked:false
      }
  },
  methods:{
    checkBook(index){
      this.$store.commit('changeCount',this.mybooks[index]);
    },
    toDelete(){   
      //删除书架里的书
      for(let i=0;i<this.$store.state.mybooks.length;i++){
        // if(this.mybooks.isChecked){
        console.log("------已选中书籍------")
        axios.delete('http://localhost:3000/mybooks/'+this.mybooks[i].id)
        .then((res)=>{
            axios.get('http://localhost:3000/mybooks')//商品列表
          .then(res=>{
              console.log("----------删除并更新书架----------")
              this.mybooks = res.data;
          })
          .catch(err=>{
              console.log(err);
          })
          this.$store.commit('showDel');
          Toast({
            message: '删除成功！',
            position: 'bottom',
            duration: 5000
          });
        })
      } 
      $('.todelete').css('display','none'); //删除按钮隐藏
      $('li>input').css('display','none'); //输入框隐藏
      
    }
  },
  created(){
    // console.log("created中isChecked的状态是 :"+this.$store.state.isChecked);
    axios.get('http://localhost:3000/mybooks')
    .then(res=>{ 
         this.mybooks = res.data;
    })
    .catch(err=>{
        console.log(err);
    });
  }
}
</script>
<style lang="scss" type="text/css" scoped>

.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to {
  opacity: 0;
}
.bookDetail {
  width: 98%;
  height: 5.8rem;
  overflow: hidden;
  background-color: white;
  justify-content: space-around;
  border-radius: .1rem;
  margin-left: 1%;
  .todelete{
    display:none;
  }
  .isShow02{
    display:block;
    position: fixed;
    right: .1rem;
    bottom: .7rem;
  }
  li {
    width: 24%;
    float: left;
    padding-top: 0.1rem;
    margin-left: .255rem;
    img {
      width: 100%;
      border-radius: 0.05rem;
    }
    .bookname{
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow:ellipsis;
    }
    input{
      display: none;

    }
    .isShow{
      display: inline-block;
      width: .16rem;
      height: .15rem;
      margin: 0 9px;
      appearance: none; 
      background: rgba(230, 178, 178,.5);
      border-radius: 50%;
      border: .35px solid rgb(175, 175, 175);
      outline: none;
    }
    .isShow:checked{ 
      background: url("../../assets/img/eglass-check.png") no-repeat;
      background-size: 100% 100%;
      border: none;
}
  }
}
// input[type="checkbox"]{
//     display: inline-block;
//     width: .22rem;
//     height: .22rem;
//     margin: 0 9px;
//     appearance: none; 
//     background: #fff;
//     border-radius: 50%;
//     border: .35px solid rgb(175, 175, 175);
//     outline: none;
// }
// input[type="checkbox"]:checked{ 
//     background: url("../assets/img/eglass-check.png") no-repeat;
//     background-size: 100% 100%;
//     border: none;
// }

</style>
