<!--
 * @Author: your name
 * @Date: 2019-11-28 15:43:06
 * @LastEditTime: 2019-12-02 14:08:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \book\src\components\meheader.vue
 -->
<!--
 * @Author: your name
 * @Date: 2019-11-23 10:01:09
 * @LastEditTime: 2019-11-26 12:03:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit<!--
 * @Author: 熊小兜
 * @Date: 2019-11-07 00:23:30
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-11-16 14:59:42
 * @Description:"搜索"
 -->
<template>
    <div :class="this.$store.state.str">
        <div class="photo">
            <router-link  :to='"/shezhi"' class="bian"> 
            <img :src="require('../assets/img/'+this.$store.state.str+'/shezhi.png')" alt="">
            </router-link>
           <img :src="require('../assets/img/'+this.$store.state.str+'/taiyang.png')" alt="" @touchstart="chuan()">
        </div>
    </div>
</template>
<script>
export default {
    name:"meHeader",
    data(){
        return {
           s:"box",
         
        }    
    },
    methods:{
        chuan(type){
          if(this.s=="box"){
              this.s="hai"
          }
          else{
              this.s="box"
          }
          this.$store.commit("chuan",this.s)
        }
    }
}


    
</script>
<style lang="scss" scoped type="text/css">
.box{
    width: 100%;
    height: .45rem;
.photo{
  float:right;
  display: flex;
  width: 80px;
  flex-direction: row-reverse;
  align-items:center; 
  justify-content:space-between;
  line-height: .45rem;
  height: .45rem; 
  box-sizing: border-box;
  padding-right: 10px;
}
img{
    width: .28rem;
    height: .28rem;
}
.bian{
   width: .28rem;
    height: .28rem;
}
}
.hai{
 background: rgb(236, 233, 233);
 width: 100%;
 height: .45rem;
 .photo{
  float:right;
  display: flex;
  width: 80px;
  flex-direction: row-reverse;
  align-items:center; 
  justify-content:space-between;
  line-height: .45rem;
  height: .45rem; 
  box-sizing: border-box;
  padding-right: 10px;
}
img{
    width: .28rem;
    height: .28rem;
}
.bian{
   width: .28rem;
    height: .28rem;
} 
}

</style>
