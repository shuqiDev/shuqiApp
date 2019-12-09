<!--
 * @Descripttion: "轮播图"
 * @version: v1.0.0
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 熊小兜
 * @LastEditTime: 2019-12-05 17:49:57
 -->
<template>

    <div class="hotBox">   
        <div class="top">
            每日限免
        </div> 
        <div class="topr" >
            <div class="timetext">{{countDownList}}</div>
        </div>   
        <div class="bottom">
            <div class="content">
                <ul>
                    <li v-for="(book,index) in books" :key="index">
                        <img :src="book.img">
                        <span class="spantext">{{book.name}}</span>
                        <del>{{book.price}}</del>
                        <p>{{book.free}}</p>
                    </li> 
                </ul>
            </div>
        </div> 
    </div>  
</template>
 <script>

 export default {
  name:"Get",
    data(){
        return {
        books:[],
　　　　　　countDownList: '000时00分00秒',
　　　　　　actEndTime: '2019-12-10 18:50:00'
　　　　};
    }
    ,
    created(){
        fetch('http://localhost:3000/type')
        .then(res=>{
            // console.log(res);
            return res.json();
        })
        .then(data=>{
            this.books= data.slice(0,4);
            // console.log(data);
        })
        .catch(err=>{
            console.log(err);
        });
        
        this.countDown();
    } ,
    methods: {
　　　　timeFormat(param) {
　　　　　　return param < 10 ? '0' + param : param;
　　　　},
　　　　countDown(it) {
　　　　　　var interval = setInterval(() => {
　　　　　　　　// 获取当前时间，同时得到活动结束时间数组
　　　　　　　　let newTime = new Date().getTime();
　　　　　　　　// 对结束时间进行处理渲染到页面
　　　　　　　　let endTime = new Date(this.actEndTime).getTime();
　　　　　　　　let obj = null;
　　　　　　　　// 如果活动未结束，对时间进行处理
　　　　　　　　if (endTime - newTime > 0) {
　　　　　　　　　　let time = (endTime - newTime) / 1000;
　　　　　　　　　　// 获取天、时、分、秒
　　　　　　　　　　let hou = parseInt(time % (60 * 60 * 24) / 3600);
　　　　　　　　　　let min = parseInt(time % (60 * 60 * 24) % 3600 / 60);
　　　　　　　　　　let sec = parseInt(time % (60 * 60 * 24) % 3600 % 60);
　　　　　　　　　　obj = {
　　　　　　　　　　　　hou: this.timeFormat(hou),
　　　　　　　　　　　　min: this.timeFormat(min),
　　　　　　　　　　　　sec: this.timeFormat(sec)
　　　　　　　　　　};
　　　　　　　　  } else { // 活动已结束，全部设置为'00'
　　　　　　　　　　obj = {　
　　　　　　　  　　　　hou: '00',
　　　　　　　　　　　　min: '00',
　　　　　　　　　　　　sec: '00'
　　　　　　　　　　};
　　　　　　　　　　clearInterval(interval);
　　　　　　　　}
　　　　　　　　this.countDownList =  obj.hou + '时' + obj.min + '分' + obj.sec + '秒';
　　　　　　}, 1000);
　　　　}
　　}
 }
</script>
<style lang="scss" type="text/css" scoped >
.hotBox{
  margin: 0 auto  .2rem;
  width:100%;
  overflow: hidden;
  background-color: white;
}
.top{
    width: 2rem;
    height: .4rem;
    float: left;
    font-size: 0.2rem;
    line-height: .4rem;
    padding-left: .2rem;
}
.topr{
    width: 1.5rem;
    height: .35rem;
    float: right;
    font-size: 0.2rem;
    line-height: .4rem;
    text-align: center;
    padding-top: .05rem;
    .timetext{
        color: orangered;
    }
}

.bottom{
    width: 100%;
}
.content{
    width: 100%;
    height: 2rem;
}
ul{
    width: 100%;
    height: 5rem;
    padding:10px 0;
    background-color: white;
}

li{
    width:0.87rem;
    height: 1.8rem;
    float: left;
    margin: 0 3px;
    del{
        float: left;
        margin-right:.1rem;
    }
    p{
        color: rgb(99, 57, 2);
        float: left;
    }
}
 .content img{
     display: block;
    width: 100%;
    height: 1.2rem;
    border-radius:.05rem;
}
.spantext{
    display: block;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 10px 0;
}
</style>
