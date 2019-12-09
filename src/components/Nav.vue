<!--
 * @Author: 熊小兜
 * @Date: 2019-11-07 00:23:30
 * @LastEditors: 熊小兜
 * @LastEditTime: 2019-11-29 16:05:10
 * @Description:"轮播图"
 -->
<template>
  <div class="nav">
    <ul>
          <li>
            <img src="../assets/img/nav6.jpg" alt />
            <span>分类</span>
          </li>
          <li>
            <img src="../assets/img/nav4.jpg" alt />
              <span>榜单</span>
          </li>
        <li>
          <img src="../assets/img/nav3.jpg" alt />
          <span>免费</span>
        </li>
        <li>
          <img src="../assets/img/nav5.jpg" alt />
          <span>完结</span>
        </li>
        <li>
          <img src="../assets/img/nav7.jpg" alt />
          <span>精品</span>
        </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Nav",
  data() {
    return {};
  }
};
</script>
<style lang="scss" type="text/css" scoped >
.nav {
  display: flex;
  margin: 10px auto;
  width: 100%;
  height: 1rem;
  background-color: white;
}
ul {
  display: flex;
  width: 100%;
  justify-content: space-around;
  flex-wrap: wrap;
  overflow-x: auto;
  margin-top:5px;
}
li {
  height: 0.6rem;
  background-color:  rgb(224, 60, 45);
  border-radius: 50%;
  text-align: center;
}
img {
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 10px;
}
span{
    display: block;
    height: 0.3rem;;
    text-align: center;
    line-height: 0.3rem;
    font-size: .2rem;
}
</style>