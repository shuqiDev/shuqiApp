  
<!--
 * @Author: your name
 * @Date: 2019-11-08 16:08:49
 * @LastEditTime: 2019-12-02 14:07:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \app\src\pages\food.vue
 -->

<template>
<div :class="this.$store.state.str">
  <meHeader></meHeader>
  <meZiliao></meZiliao>
  <meHuiyuan></meHuiyuan>
  <meChongzhi></meChongzhi>
  <meList></meList>
  <meFoot></meFoot>
</div>
</template>
<script>
import meHeader from '../components/meHeader';
import meZiliao from '../components/meZiliao';
import meHuiyuan from '../components/meHuiyuan';
import meChongzhi from '../components/meChongzhi';
import meList from '../components/meList';
import meFoot from '../components/meFoot';


export default {
  name: 'my',

  data () {
    return {   
    }
  },
  components:{
  meHeader,meZiliao,meHuiyuan,meChongzhi,meList,meFoot
  } 
}
</script>
<style  scoped="">
.box{
  background: #000;
}
.hai{
  background: rgb(236, 233, 233);
}
</style>
