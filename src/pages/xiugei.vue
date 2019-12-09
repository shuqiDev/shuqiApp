  
<!--
 * @Author: your name
 * @Date: 2019-11-08 16:08:49
 * @LastEditTime: 2019-12-03 11:04:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \app\src\pages\food.vue
 -->

<template>
<div :class="this.$store.state.str">
<xiugeiHeader></xiugeiHeader>
<xiugeimidder></xiugeimidder>
<xiugeiButton></xiugeiButton>

</div>
</template>
<script>
import xiugeiHeader from '../components/xiugeiHeader';
import xiugeimidder from '../components/xiugeimidder';
import xiugeiButton from '../components/xiugeiButton';




export default {
  name: 'xiugei',

  data () {
    return {   
    }
  },
  components:{
  xiugeiHeader,xiugeimidder,xiugeiButton
  } 
}
</script>
<style lang="scss" scoped type="text/css">
.box{
  background: #000;
   height: 667px;
}
.hai{
   background: rgb(236, 233, 233);
    height: 667px;
}
</style>
