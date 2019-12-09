  
<!--
 * @Author: your name
 * @Date: 2019-11-08 16:08:49
 * @LastEditTime: 2019-12-02 16:45:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \app\src\pages\food.vue
 -->

<template>
<div :class="this.$store.state.str">
  <restiveHeader></restiveHeader>
  <restiveConter></restiveConter>

</div>
</template>
<script>
import restiveHeader from '../components/restiveHeader';
import restiveConter from '../components/restiveConter';



export default {
  name: 'my',

  data () {
    return {   
    }
  },
  components:{
  restiveHeader,restiveConter
  } 
}
</script>
<style  scoped="">
.box{
  background: #000;
   height: 667px;
}
.hai{
  background: #fff;
   height: 667px;
}
</style>
