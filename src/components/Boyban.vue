<!--
 * @Author: 熊小兜
 * @Date: 2019-11-07 00:23:30
 * @LastEditors: 熊小兜
 * @LastEditTime: 2019-12-06 14:16:18
 * @Description:"轮播图"
 -->
<template>
   <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
          <div class="box">
              <img src="../assets/img/img1.jpg" alt="">
              <p>水电费人防的地方都</p>
              <span>十分丰富</span>
          </div>
      </div>
      <div class="swiper-slide">
           <div class="box">
              <img src="../assets/img/img2.jpg" alt="">
              <p>水电费人防的地方都</p>
              <span>十分丰富</span>
          </div>
      </div>
      <div class="swiper-slide">
           <div class="box">
              <img src="../assets/img/img3.jpg" alt="">
              <p>水电费人防的地方都</p>
              <span>十分丰富</span>
          </div>
      </div>
      <div class="swiper-slide">
           <div class="box">
              <img src="../assets/img/img4.jpg" alt="">
              <p>水电费人防的地方都</p>
              <span>十分丰富</span>
          </div>
      </div>
      <div class="swiper-slide">
           <div class="box">
              <img src="../assets/img/img5.jpg" alt="">
              <p>水电费人防的地方都</p>
              <span>十分丰富</span>
          </div>
      </div>
      <div class="swiper-slide">
           <div class="box">
              <img src="../assets/img/img6.jpg" alt="">
              <p>水电费人防的地方都</p>
              <span>十分丰富</span>
          </div>
      </div>
      <div class="swiper-slide">
           <div class="box">
              <img src="../assets/img/img7.jpg" alt="">
              <p>水电费人防的地方都</p>
              <span>十分丰富</span>
          </div>
      </div>
      <div class="swiper-slide">
           <div class="box">
              <img src="../assets/img/img8.jpg" alt="">
              <p>水电费人防的地方都</p>
              <span>十分丰富</span>
          </div>
      </div>
      <div class="swiper-slide">
           <div class="box">
              <img src="../assets/img/img1.jpg" alt="">
              <p>水电费人防的地方都</p>
              <span>十分丰富</span>
          </div>
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination">
        
    </div>
    <!-- Add Arrows -->
    <!-- <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div> -->
  </div>
</template>
<script src="../package/js/swiper.min.js"></script>
<script>

import Swiper from 'swiper'
export default {
    name:"Banner",
    data(){
        return {
           
        }
    },
    created(){
        fetch('http://localhost:3000/books1')
        .then(res=>{
            // console.log(res);
            return res.json();
        })
        .then(data=>{
            this.imgs = data;
             var swiper = new Swiper('.swiper-container', {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    slidesPerGroup: 3,
                    loop: true,
                    loopFillGroupWithBlank: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                });
            //     this.$nextTick(()=>{
            //      let mySwiper = new Swiper('.swiper-container',{
            //         autoplay:true,
            //         speed:300,
            //         grabCursor:true
            //     });
            // });
        })
        .catch(err=>{
            console.log(err);
        })
    } 
}
</script>
<style lang="scss" type="text/css" scoped>
@import url(https://unpkg.com/swiper/css/swiper.css);
.swiper-container{
    width:95%;
    height: 2rem;
    background:white;
    border-radius: .1rem;
    margin-bottom: .2rem;
    .swiper-slide {
      font-size: 16px;
    //   background: white;
      width: 2.5rem;
      
    }
}
.box{
    width: 100%;
    height: 100%;
    // background: blue;
    img{
        margin-top: .06rem;
        width: 100%;
        height: 1.2rem;
        border-radius: .1rem;
    }
    p{
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    p,span{
        color: black;
    }
}
</style>