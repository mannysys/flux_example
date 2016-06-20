/**
 * Created by zhoujialin on 2016/6/14.
 */

const Dispatcher = require('./Dispatcher');
const WebAPI = require('./WebAPI');

class Actions {

    //��react view�з�����ָ����뵽Dispatch��
    add(name){
        var action = {
            actionType: 'add',
            name
        };
        Dispatcher.dispatch(action);
    }

    //����api����
    getAll(){
        //�������������������
        WebAPI.getAll(function(data){
            var action = {
                actionType:'getAll',
                list:data
            };
            Dispatcher.dispatch(action);
        });

    }





}

module.exports = Actions;