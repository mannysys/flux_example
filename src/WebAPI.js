/**
 * Created by zhoujialin on 2016/6/15.
 */

module.exports = {

    getAll(callback){
        //ģ����û���������
        setTimeout(function(){
            callback(['aaa','bbb','ccc']);
        },2000);
    }


};