<!--
 * @Descripttion: "轮播图"
 * @version: v1.0.0
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 党婉珍
 * @LastEditTime: 2019-12-07 20:39:40
 -->
<template>

    <div class="footerBox">   
         <ul>
            <li>
              <router-link to="/Bbookstore" >
                <div :class="{'red':$store.state.footerCls[0]}" @touchstart="changeCls(0)">
                    <i class="el-icon-s-data" ></i>
                    书架
                </div>
              </router-link>
            </li>
            <li>
              <router-link to="/Jingxuan">
                <div :class="{'red':$store.state.footerCls[1]}" @touchstart="changeCls(1)">
                  <i class="el-icon-s-management"></i>
                  书城
                </div>
              </router-link>
            </li>
            <li>
               <router-link to="/Free">
                <div :class="{'red':$store.state.footerCls[2]}" @touchstart="changeCls(2)">
                    <i class="el-icon-star-on"></i>
                      会员
                </div>
                 </router-link>
            </li>
            <li>
               <router-link to="/my">
                 <div :class="{'red':$store.state.footerCls[3]}" @touchstart="changeCls(3)">
                    <i class="el-icon-user-solid"></i>
                    我的
                 </div>
                  </router-link>
            </li>
         </ul>
    </div>  
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return { 
      key:'1'    
    }
  },
  // computed:{//计算属性
  //   footerCls(){
  //     return this.$store.state.footerCls;
  //   }
  // },
  methods:{
    changeCls(index){
      //提交mutations
      this.$store.commit('changeFooterCls',index);
      console.log(index);
    }
  }
}
</script>
<style scoped>
.footerBox{
    width: 100%;
    height: .65rem;
    margin: 0 auto;
    background-color: rgb(219, 221, 223);
    border-radius: 5px;
    position: fixed;
    bottom: 0;
    left: 0;
}
ul{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
}
li{ 
    text-align: center;
}
i{
  font-size: .3rem;
  display: block;
  height: .3rem;
  margin-top: 5px;
  color: black;
}
.red i{
  color:rgb(9, 184, 96);
}
</style>