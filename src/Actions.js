/**
 * Created by zhoujialin on 2016/6/14.
 */

const Dispatcher = require('./Dispatcher');
const WebAPI = require('./WebAPI');

class Actions {

    //将react view中发出的指令，加入到Dispatch中
    add(name){
        var action = {
            actionType: 'add',
            name
        };
        Dispatcher.dispatch(action);
    }

    //调用api数据
    getAll(){
        //请求服务器，返回数据
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