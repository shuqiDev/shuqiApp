  
<!--
 * @Author: your name
 * @Date: 2019-11-08 16:08:49
 * @LastEditTime: 2019-12-02 14:55:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \app\src\pages\food.vue
 -->

<template>
<div :class="this.$store.state.str">
<div class="shang">
<shezhiHeader></shezhiHeader>
</div>
<div class="xia">
<shezhiTop></shezhiTop>
<shezhimidder></shezhimidder>
<shezhiFoot></shezhiFoot>
</div>
</div>
</template>
<script>
import shezhiHeader from '../components/shezhiHeader';
import shezhiTop from '../components/shezhiTop';
import shezhimidder from '../components/shezhimidder';
import shezhiFoot from '../components/shezhiFoot';



export default {
  name: 'shezhi',

  data () {
    return {   
    }
  },
  components:{
  shezhiTop,shezhiHeader,shezhimidder,shezhiFoot
  } 
}
</script>
<style lang="scss" scoped type="text/css">
.box{
  background: #000;
.shang{
  position: fixed;
  width: 100%;
  top:0;
  left:0;
}
.xia{
  width: 100%;
  margin-top:.5rem;
}
}
.hai{
   background: rgb(236, 233, 233);
.shang{
  position: fixed;
  width: 100%;
  top:0;
  left:0;
}
.xia{
  width: 100%;
  margin-top:.5rem;
}
}
</style>
