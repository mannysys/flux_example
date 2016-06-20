/**
 * Created by zhoujialin on 2016/6/14.
 */

//继承nodejs核心API中的事件产生器
const EventEmitter = require('events').EventEmitter;
const Dispatcher = require('./Dispatcher');

class Store extends EventEmitter{

    constructor(){ //构造器
        super();//继承父类的
        this._list = []; //代表一个存储数据的容器

        Dispatcher.register(action=>{
            switch(action.actionType){
                case 'add':
                    this._add(action.name); //调用自身私有方法_add
                    break;
                case 'getAll':
                    this._list = action.list;
                    this.emit('change', this.list);
                    break;
            }
        });

    }

    //方法名前加下划线_ ，表示是私有的方法（外部是无法找到的）
    _add(item){
        this._list.push(item);
        this.emit('change', this.list); //创建一个事件change并抛出
    }

    get list(){
        return this._list;
    }


}

module.exports = Store;