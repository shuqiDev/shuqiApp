<!--
 * @Author: 熊小兜
 * @Date: 2019-11-07 00:23:30
 * @LastEditors: 党婉珍
 * @LastEditTime: 2019-12-04 16:51:14
 * @Description: 
 -->
<template>
    <div class="box">
        <Header/>
        <Banner/>
        <Nav/>
        <Get/>
        <Nicelook/>
        <Once/>
        <Listrow/>
        <Bann/>
        <So/>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from '../components/Header';
import Banner from '../components/Banner';
import Nav from '../components/Nav';
import Get from '../components/Get';
import Nicelook from '../components/Nicelook';
import Once from '../components/Once';
import Listrow from '../components/Listrow';
import Bann from '../components/Bann';
import So from '../components/So';
import Footer from '../components/Footer';
export default {
    name:"",
    data(){
        return {

        }
    },
    components:{
       Header,
       Banner,Nav,Get,Nicelook,Once,Listrow,Bann,So
       ,Footer
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