/**
 * Created by zhoujialin on 2016/6/14.
 */


const storeCallbackList = [];

module.exports = {

    //注册store中处理函数
    register(storeCallback){
        storeCallbackList.push(storeCallback);
    },

    //调度器（就是将react组件发指令事件分配给注册store的函数）
    dispatch(action){
        for(let callback of storeCallbackList){
            callback(action);
        }

    }


};