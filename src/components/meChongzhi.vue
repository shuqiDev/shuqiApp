<!--
 * @Author: your name
 * @Date: 2019-11-23 10:01:09
 * @LastEditTime: 2019-12-02 14:16:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit<!--
 * @Author: 熊小兜
 * @Date: 2019-11-07 00:23:30
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-11-16 14:59:42
 * @Description:"搜索"
 -->
<template>
    <div :class="this.$store.state.str">
        <div class="shang">
            <div class="left">
                <p>今日充值赠饭</p>
                <p class="song">充100返500</p>
            </div>
            <div class="right">重置</div>
        </div>
        <ul class="xia">
            <li class="wu">消费记录</li>
            <li>充值记录</li>
            <li>打赏记录</li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"meChongzhi",
    data(){
        return {
           
        }    
    },
    methods:{
        
    }
}   
</script>
<style lang="scss" scoped type="text/css">
.box{
    width: 95%;
    height: 1.2rem;
    background: #333;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 8px;
    margin: 10px;
    .shang{
        width: 100%;
        height: .5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
       
        .right{
            width: 70px;
            height: .25rem;
            border-radius: 15px;
            background: green;
              color:rgb(207, 207, 207);
            line-height: .25rem;
            text-align: center;
        }
        .left{
            width: 120px;
            p{
            width: 100%;
            font-size:16px;
             color:rgb(207, 207, 207);
            height: .25rem;
            line-height: .25rem;
            }
            .song{
                font-size:14px;
                color:rgb(206, 190, 50);
            }
        }
      
    }
    .xia{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: .5rem;
        li{
            width: 33%;
             color:rgb(207, 207, 207);
            font-size: 14px;
            border-left:1px solid #979595;
            text-align:center; 
        }
        .wu{
            border: none;
        }
    }
}
.hai{
    width: 95%;
    height: 1.2rem;
    background:rgb(255, 254, 254);
    padding: 20px;
    box-sizing: border-box;
    border-radius: 8px;
    margin: 10px;
    .shang{
        width: 100%;
        height: .5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
       
        .right{
            width: 70px;
            height: .25rem;
            border-radius: 15px;
            background: green;
            color:rgb(207, 207, 207);
            line-height: .25rem;
            text-align: center;
        }
        .left{
            width: 120px;
            p{
            width: 100%;
            font-size:16px;
             color:rgb(26, 25, 25);
            height: .25rem;
            line-height: .25rem;
            }
            .song{
                font-size:14px;
                color:rgb(206, 190, 50);
            }
        }
      
    }
    .xia{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: .5rem;
        li{
            width: 33%;
             color:rgb(14, 13, 13);
            font-size: 14px;
            border-left:1px solid #d1cfcf;
            text-align:center; 
        }
        .wu{
            border: none;
        }
    }
}
</style>
