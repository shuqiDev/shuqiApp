<!--
 * @Author: 熊小兜
 * @Date: 2019-11-07 00:23:30
 * @LastEditors: 熊小兜
 * @LastEditTime: 2019-12-06 15:53:09
 * @Description: 
 -->
<template>
    <div class="box">
        <Header style="position:fixed;z-index:2;"/>
        <div class="center">
        <!-- <Banner/> -->
        <Get/>
        <Nicelook/>
        <Once/>
        <Classify/>
        <Ever/>
        <Boyban/>
        <BookList/>
       </div>
        <Footer style="position:fixed;z-index:2;bottom:0px;"/>
     </div>
</template>
<script>
import Header from '../components/Header';
import Nicelook from '../components/Nicelook';
// import Banner from '../components/Banner';
import Get from '../components/Get';
import Once from '../components/Once';
import Classify from '../components/Classify';
import Ever from '../components/Ever';
import Boyban from '../components/Boyban';
import BookList from '../components/BookList';
import Footer from '../components/Footer';
export default {
    name:"",
    data(){
        return {
        }
    },
    components:{
        Header,Nicelook,Get,Once,Classify,Ever,Boyban,BookList, Footer
    }
}
</script>
<style lang="scss" type="text/css" scoped >
.box{
    display: flex;
    flex-direction: column;
}
.center{
    flex: 1;
    overflow-y: auto;
    margin-top: .5rem;
}
</style>