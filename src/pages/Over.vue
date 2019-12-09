<!--
 * @Author: 熊小兜
 * @Date: 2019-11-07 00:23:30
 * @LastEditors: 熊小兜
 * @LastEditTime: 2019-12-06 10:11:21
 * @Description: 
 -->
<template>
    <div class="box">
        <Header style="position:fixed;z-index:2;"/>
        <div class="center">
        <Overban/>
        <Overget/>
        <Overupdata/>
        <Overred/>
        <Overqianli/>
        <Overbooklist/>
        <Overgril/>
        <Overgrillist/>
        <Overboy/>
        <Overboylist/>
        <Overchange/>
        <Overchangelist/>
       </div>
        <Footer style="position:fixed;z-index:2;bottom:0px;"/>
     </div>
</template>
<script>
import Header from '../components/Header';
import Overban from '../components/Overban';
import Overget from '../components/Overget';
import Overupdata from '../components/Overupdata';
import Overred from '../components/Overred';
import Overqianli from '../components/Overqianli';
import Overbooklist from '../components/Overbooklist';
import Overgril from '../components/Overgril';
import Overgrillist from '../components/Overgrillist';
import Overboy from '../components/Overboy';
import Overboylist from '../components/Overboylist';
import Overchange from '../components/Overchange';
import Overchangelist from '../components/Overchangelist';

import Footer from '../components/Footer';
export default {
    name:"",
    data(){
        return {
        }
    },
    components:{
        Header,Overban, Overget,Overupdata,Overred,Overqianli,Overbooklist,Overgril,Overgrillist,Overboy,Overboylist,Overchange,Overchangelist,Footer
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