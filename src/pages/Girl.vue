<!--
 * @Author: 熊小兜
 * @Date: 2019-11-07 00:23:30
 * @LastEditors: 熊小兜
 * @LastEditTime: 2019-12-06 10:18:02
 * @Description: 
 -->
<template>
    <div class="box">
        <Header style="position:fixed;z-index:2;"/>
        <div class="center">
        <Banner/>
        <Hot/>
        <Jingpin/>
        <Updata/>
        <Ever/>
        <Classify/>
        <BookList/>
       </div>
        <Footer style="position:fixed;z-index:2;bottom:0px;"/>
     </div>
</template>
<script>
import Header from '../components/Header';
import Banner from '../components/Banner';
import Hot from '../components/Hot';
import Jingpin from '../components/Jingpin';
import Updata from '../components/Updata';
import Ever from '../components/Ever';
import Classify from '../components/Classify';
import BookList from '../components/BookList';
import Footer from '../components/Footer';
export default {
    name:"",
    data(){
        return {
        }
    },
    components:{
        Header,Banner,Hot,Jingpin,Updata,Ever,Classify,BookList, Footer
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