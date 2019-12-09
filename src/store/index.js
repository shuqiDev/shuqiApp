/*
 * @Author: 党婉珍
 * @Date: 2019-12-01 20:53:39
 * @LastEditors: 党婉珍
 * @LastEditTime: 2019-12-07 20:43:11
 * @Description: 
 */
import Vue from 'vue';
import VueX from 'vuex';
Vue.use(VueX);

let store = new VueX.Store({
    state:{
        count: 0,  //默认情况下为0本
        isShow: false,
        isShowdel:false,
        mybooks:[],
        index: 0,
        footerCls:[
            false,
            true,
            false,
            false
        ],
        headerCls:[
            true,
            false,
            false,
            false,
            false
        ],
        str:"box" ,
        sex:"",
        userpass:"",
        id:"",
        username:""
    },
    //计算属性
    getters:{
        
    },
    mutations:{ //修改state,用于跟踪状态
        changeFooterCls(state,index){   //底部改变背景色
            // console.log(state.footerCls);0
            if(index<0 || index>state.footerCls.length-1){
                return;
            }
            state.footerCls.forEach((item,index,arr)=>{
                // console.log("-dddd--"+arr[index]);
                // console.log(state);
                arr[index] = false;
            })
            state.footerCls[index] = true;
            //  console.log("---"+state.footerCls);
        },
        changeHeaderCls(state,index){
            // console.log(state.footerCls);
            if(index<0 || index>state.headerCls.length-1){
                return;
            }
            state.headerCls.forEach((item,index,arr)=>{
                // console.log("-aaaa--"+arr[index]);
                // console.log(state);
                arr[index] = false;
            })
           
            state.headerCls[index] = true;
             console.log("---"+state.headerCls);
        },
        manageBook(state){    //拿到state所有属性
            state.isShow = true;
            console.log(state.mybooks);
        },
        cancel(state){
            state.isShow = false;
        },
        changeCount(state,book){ 
            state.mybooks.push(book);  //把勾选的书籍放进state的mybooks中
            // console.log(state.mybooks);
            state.count++;
        },
        //购物车单选
        checkBook(state,id){
            // let index=state.car.findIndex(item=>{
            //     return item.productId==productId
            // })
            // state.car[index].selected=!state.car[index].selected
            // let flag=state.car.some((item)=>{
            //     return item.selected==false
            // })
            // if(!flag){       //如果全部选中，则全选状态也改变
            //     state.isChecked=true
            // }else{   
            //     state.all_selsect=false
            // }
        },
        // 购物车全选
        allCheck(state){
            // state.all_selsect=!state.all_selsect
            // if(state.all_selsect){
            //     state.car.forEach((item)=>{
            //         item.selected=true
            //     })
            // }else{
            //     state.car.forEach((item)=>{
            //         item.selected=false
            //     })
            // }
        },
        //删除选中的商品，注意这里不能使用数组删除的方法，索引值会有问题
        del(state,index){ 
            state.mybooks.splice(index, 1);
            // console.log("--------删除书籍--------");
            state.isShow = false;
        },
        showDel(state){
            state.isShowdel = true;
            console.log('---全选按钮隐藏---')
        },

        chuan(state,s){
            state.str=s 
          },
          logxinxi(state,a){
            console.log('njj'+a)
            state.id=a
          },
          logname(state,b){
            console.log('zhu'+b)
            state.username=b
          },
          xiugeixinxi(state,d){
            console.log('新的')
            state. sex=d
          },
          xiugeiuserpass(state,c){
            console.log('新的')
            state.userpass=c
          }
    },
    actions:{
        
    }
})

export default store;