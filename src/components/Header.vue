<!--
 * @Author: 熊小兜
 * @Date: 2019-11-26 15:35:28
 * @LastEditors: 党婉珍
 * @LastEditTime: 2019-12-07 17:00:35
 * @Description: 
 -->
<template>
    <div class="box">
        <ul>
            <li :class="{'red':$store.state.headerCls[0]}" @touchstart="changeCls(0)">
                 <router-link to="/Jingxuan">
                    精选
                </router-link>
            </li>
            <li :class="{'red':$store.state.headerCls[1]}" @touchstart="changeCls(1)">
                <router-link to="/Girl">
                    女生
                </router-link>
            </li>
            <li :class="{'red':$store.state.headerCls[2]}" @touchstart="changeCls(2)">
                <router-link to="/Boy">
                男生
                </router-link>
            </li>
            <li :class="{'red':$store.state.headerCls[3]}" @touchstart="changeCls(3)">
                 <router-link to="/Over">
                完结
                 </router-link>
            </li>
            <li :class="{'red':$store.state.headerCls[4]}" @touchstart="changeCls(4)">
                <router-link to="/Manhua">
                漫画
                </router-link>
            </li>
        </ul>
        <img class="searchimg" src="../assets/img/search.png" alt="">
    </div>
</template>
<script>
export default {
  name: 'Header',
  data () {
    return { 
      key:'1'    
    }
  },
  methods:{
    changeCls(index){
      //提交mutations
      this.$store.commit('changeHeaderCls',index);
      console.log(index);
    }
  }
}

</script>
<style lang="scss" type="text/css" scoped >

.box{
    width: 100%;
    display: flex;
    height:.4rem;
    background-color:white;
    position: relative;
    justify-content: center;
}
li{
    float: left;
    font-size:.15rem;
    line-height: .4rem;
    margin: 0 .05rem;
    color: black;
   
}
 .red a{
       font-size: .2rem;
       color: rgb(4, 138, 33);
     }
.searchimg{
    position: absolute;
    right: 10px;
    top: .05rem;
    width: .3rem;
    height: .3rem;

}
</style>