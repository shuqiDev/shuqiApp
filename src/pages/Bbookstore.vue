<!--
 * @Author: 党婉珍
 * @Date: 2019-11-11 20:40:44
 * @LastEditors: 党婉珍
 * @LastEditTime: 2019-12-05 10:45:30
 * @Description: 
 -->
<template>
    <div id="conMain">
        <BHead class="header"></BHead>
        <Bsmall class="small"></Bsmall>
        <BbookMy class="mybooks"></BbookMy>
        <Footer></Footer>
    </div>
</template>

<script>
import BHead from '../components/book/BHead';
import Bsmall from '../components/book/Bsmall';
import BbookMy from '../components/book/BbookMy';
import Footer from '../components/Footer';
export default {
    name:"Bbookstore",
    data(){

   },
   components:{
       BHead,Bsmall,BbookMy,Footer
   },
   methods:{
       
   }
}
</script>

<style scoped>
.conMain{
    font-size: 16px;
    background-color: rgb(247, 247, 247);
}
.header{
    position: fixed;
    left:0;
    top:0;
    height: .6rem;
    z-index: 999;
}
.small{
    margin-top: 0.55rem;
    background-color: #eaebec;
}
.mybooks{
  background-color: #eaebec;
}
/* html,body{
    height:100%;
}
body{
    display:flex;
    flex-direction:column;
}
.content{
    flex:1;
    overflow-y:auto;
} */
</style>