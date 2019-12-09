<!--
 * @Author: 熊小兜
 * @Date: 2019-11-07 00:23:30
 * @LastEditors: 党婉珍
 * @LastEditTime: 2019-12-05 21:19:09
 * @Description: 
 -->
<template>
    <div class="box">
        <Header/>
        <Banner/>
        <Gaibian/>
        <Ourlook/>
        <Hotclass/>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from '../components/Header';
import Banner from '../components/manhua/Banner';
import Gaibian from '../components/manhua/Gaibian';
import Ourlook from '../components/manhua/Ourlook';
import Hotclass from '../components/manhua/Hotclass';
import Footer from '../components/Footer';
export default {
    name:"",
    data(){
        return {

        }
    },
    components:{
       Header,Banner,Gaibian,Ourlook,Hotclass,Footer
    }
}
</script>
<style lang="scss" type="text/css" scoped >
.box{
    display: flex;
    flex-direction: column;
}
// .center{
//     flex: 1;
//     overflow-y: auto;
//     margin-top: .5rem;
// }
</style>