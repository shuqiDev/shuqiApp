<!--
 * @Author: 熊小兜
 * @Date: 2019-11-26 15:10:16
 * @LastEditors: 党婉珍
 * @LastEditTime: 2019-12-09 09:25:36
 * @Description: 
 -->
<template>
  <div id="app">
    <transition name="component-fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>
<script>
import ElementUI from 'element-ui';
import Mint from 'mint-ui';
import {Toast} from 'mint-ui';
import 'jquery'
export default {
  name: 'App',
  data(){
    return {

    }
  }
}
</script>

<style>
@import url(https://unpkg.com/element-ui/lib/theme-chalk/index.css);
.component-fade-enter-active, .component-fade-leave-active {
    transition: all .4s ease; 
}
.component-fade-enter, .component-fade-leave-to {
    /* opacity: 0; */
    transform: translateX(-100%);
}
body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, button, textarea, p, blockquote, th, td {
    margin: 0;
    padding: 0;
}
ul,ol,li{
	list-style: none;
}
a{
	text-decoration:none;
  color: gray;
}
img{
	border:none;
}
html{
  font-size: 26.67vw;
}
body{
  font-size: 14px;
  height: 100%;
}
</style>
