<!--
 * @Author: 党婉珍
 * @Date: 2019-11-29 14:59:15
 * @LastEditors: 党婉珍
 * @LastEditTime: 2019-12-02 16:31:32
 * @Description: 
 -->
<template>
    <ul class="smallBox">
        <li class="ttBox">
            <div class="left">
                <h3>新·福利中心</h3>
                <p class="ltext" style="color:gray;">每日签到领好礼</p>
            </div>
            <div class="right">
                <span class="text">签到</span>
                <i class="el-icon-edit-outline"></i>
            </div>
        </li>
        <li class="ttBox">
            <div class="left">
                <h3>新用户专享</h3>
                <p class="ltext" style="color:gray;">新用户全场打8.8折！</p>
            </div>
            <div class="right">
                <span class="text"></span>
                <i class="el-icon-arrow-right"></i>
            </div>
        </li>
        <li class="ttBox">
            <div class="left">
                <h3>领读书津贴</h3>
                <p class="ltext" style="color:gray;">立即领取</p>
            </div>
            <div class="right">
                <span class="text"></span>
                <i class="el-icon-arrow-right"></i>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
  name: 'Bsmall',

}
</script>
<style lang="scss" type="text/css" scoped>
.smallBox {
  width: 100%;
  display: flex;
  overflow-x: auto;
  .ttBox {
    border-radius: 0.1rem;
    background-color: white;
    margin: 0.05rem;
    width: 1.9rem;
    height: 0.68rem;
    flex-shrink: 0;
    display: flex;
    .left {
      width: 49%;
      float: left;
      padding-top: 0.12rem;
      padding-left: 0.15rem;
      p {
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .right {
      height: 100%;
      float: left;
      position: relative;
      overflow: hidden;
      .text {
        width: 0.5rem;
        color: white;
        text-align: center;
        display: block;
        background-color: #f63b4f;
        border-radius: 0.2rem;
        margin: 0.15rem 0 0 0.25rem;
      }
    }
  }
}
.smallBox .ttBox .right .el-icon-edit-outline, .smallBox .ttBox .right .el-icon-arrow-right {
  position: absolute;
  right: 0.05rem;
  bottom: 0rem;
  font-size: 0.3rem;
  margin-left: 0.5rem;
}


</style>
