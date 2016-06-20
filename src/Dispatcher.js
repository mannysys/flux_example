/**
 * Created by zhoujialin on 2016/6/14.
 */


const storeCallbackList = [];

module.exports = {

    //ע��store�д�����
    register(storeCallback){
        storeCallbackList.push(storeCallback);
    },

    //�����������ǽ�react�����ָ���¼������ע��store�ĺ�����
    dispatch(action){
        for(let callback of storeCallbackList){
            callback(action);
        }

    }


};