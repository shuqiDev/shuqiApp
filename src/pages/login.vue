  
<!--
 * @Author: your name
 * @Date: 2019-11-08 16:08:49
 * @LastEditTime: 2019-12-02 16:08:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \app\src\pages\food.vue
 -->

<template>
<div :class="this.$store.state.str">
<loginHeader></loginHeader>
<loginNav v-on:changemsg="func"></loginNav>
<div class="xia">
  <loginConter1 v-show="panduan==0"></loginConter1>
  <loginConter2 v-show="panduan==1"></loginConter2>
  </div>
</div>
</template>
<script>
import loginHeader from '../components/loginHeader';
import loginNav from '../components/loginNav';
import loginConter1 from '../components/loginConter1';
import loginConter2 from '../components/loginConter2';



export default {
  name: 'login',

  data () {
    return {  
      panduan:"" 
    }
  },
  components:{
  loginHeader,loginNav,loginConter1,loginConter2
  },
   methods:{
        func:function(what){
           this.panduan=what
        }
    }
}
</script>
<style  scoped="">
.box{
  background: #000;
  height: 667px;
}
.hai{
  background: rgb(255, 255, 255);
  height: 667px;
}
</style>
