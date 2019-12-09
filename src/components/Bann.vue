<!--
 * @Author: 熊小兜
 * @Date: 2019-11-07 00:23:30
 * @LastEditors: 熊小兜
 * @LastEditTime: 2019-12-02 09:48:58
 * @Description:"轮播图"
 -->
<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(img,index) in imgs" :key="index"  >
                 <img :src="img.src" alt="">
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
    },
    created(){
        fetch('http://localhost:3000/bannerimgs')
        .then(res=>{
            // console.log(res);
            return res.json();
        })
        .then(data=>{
            this.imgs = data;
            // console.log(data);
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
    width:100%;
    height: 1.5rem;
    margin:.05rem 0 .1rem;
}
img{
    width: 100%;
    height: 100%;
}
</style>