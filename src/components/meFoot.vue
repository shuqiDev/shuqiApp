<!--
 * @Author: your name
 * @Date: 2019-11-23 10:01:09
 * @LastEditTime: 2019-12-02 14:46:02
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
        <ul>
            <li>
                <span class="left">帮兑换码</span>
                <span class="right"><img :src="require('../assets/img/'+this.$store.state.str+'/black.png')" alt=""></span>
            </li>
             <li>
                <span class="left">公益3小时</span>
                <span class="right"><img :src="require('../assets/img/'+this.$store.state.str+'/black.png')" alt=""></span>
            </li>
             <li>
                <span class="left">阅读喜好</span>
                <span class="right"><img :src="require('../assets/img/'+this.$store.state.str+'/black.png')" alt=""></span>
            </li>
             <li>
                <span class="left">意见反馈</span>
                <span class="right"><img :src="require('../assets/img/'+this.$store.state.str+'/black.png')" alt=""></span>
            </li>
             <li>
                <span class="left">邀请有礼</span>
                <span class="right"><img :src="require('../assets/img/'+this.$store.state.str+'/black.png')" alt=""></span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"Search",
    data(){
        return {
           
        }    
    },
    methods:{
        
    }
}


    
</script>
<style lang="scss" scoped type="text/css">
 .box{
    width: 95%;
    background: #333;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 8px;
    margin: 10px;
    height:2.3rem;

    li{
        width: 100%;
        height: .4rem;
        display: flex;
        font-size: .18rem;
         color:rgb(207, 207, 207);
        justify-content: space-between;
        img{
            width: .2rem;
        }
    }
 }
 .hai{
    width: 95%;
    background: rgb(255, 254, 254);
    padding: 20px;
    box-sizing: border-box;
    border-radius: 8px;
    margin: 10px;
    height:2.3rem;

    li{
        width: 100%;
        height: .4rem;
        display: flex;
        font-size: .18rem;
         color:rgb(17, 12, 12);
        justify-content: space-between;
        img{
            width: .2rem;
        }
    }
 }
</style>
