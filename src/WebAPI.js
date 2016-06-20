/**
 * Created by zhoujialin on 2016/6/15.
 */

module.exports = {

    getAll(callback){
        //模拟调用互联网数据
        setTimeout(function(){
            callback(['aaa','bbb','ccc']);
        },2000);
    }


};