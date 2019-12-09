<!--
 * @Author: 党婉珍
 * @Date: 2019-12-04 15:23:53
 * @LastEditors: 党婉珍
 * @LastEditTime: 2019-12-07 17:12:10
 * @Description: 
 -->
<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(img,index) in imgs" :key="index"  >
                 <img :src="img.img" alt="">
            </div>
        </div>      
    </div>  
</template>
<script>
import Swiper from 'swiper'
export default {
    name:"Banner",
    data(){
        return {
            imgs:[]
        }
    }
    ,
    created(){
        fetch('http://localhost:3000/mbannerimgs')
        .then(res=>{
            console.log(res);
            return res.json();
        })
        .then(data=>{
            this.imgs = data;
            console.log(data);
            this.$nextTick(()=>{
                 let mySwiper = new Swiper('.swiper-container',{
                    autoplay:true,
                    speed:300,
                    grabCursor:true
                });
            });
        })
        .catch(err=>{
            console.log(err);
        })
    } 
}
</script>
<style lang="scss" type="text/css" scoped >
@import url(https://unpkg.com/swiper/css/swiper.css);
.swiper-container{
    width: 96%;
    height: 1.2rem;
    border-radius: 10px;
    margin-top: 2%;
}
img{
    width: 100%;
    height: 100%;
}
</style>