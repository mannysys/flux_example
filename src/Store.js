/**
 * Created by zhoujialin on 2016/6/14.
 */

//�̳�nodejs����API�е��¼�������
const EventEmitter = require('events').EventEmitter;
const Dispatcher = require('./Dispatcher');

class Store extends EventEmitter{

    constructor(){ //������
        super();//�̳и����
        this._list = []; //����һ���洢���ݵ�����

        Dispatcher.register(action=>{
            switch(action.actionType){
                case 'add':
                    this._add(action.name); //��������˽�з���_add
                    break;
                case 'getAll':
                    this._list = action.list;
                    this.emit('change', this.list);
                    break;
            }
        });

    }

    //������ǰ���»���_ ����ʾ��˽�еķ������ⲿ���޷��ҵ��ģ�
    _add(item){
        this._list.push(item);
        this.emit('change', this.list); //����һ���¼�change���׳�
    }

    get list(){
        return this._list;
    }


}

module.exports = Store;