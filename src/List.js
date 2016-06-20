/**
 * Created by zhoujialin on 2016/6/14.
 */

const React = require('react');
const Store = require('./Store');
const Actions = require('./Actions');
const actions = new Actions();
const store = new Store();


class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list:[]
        };
    }

    add(){
        actions.add(this.refs.nameInput.value);
    }
    //���װ�����ִ�и÷�������ʼ����store�������׳����¼�
    componentDidMount(){

        actions.getAll(); //����api����

        //���������ṩ��Store��û��change�¼�������еĻ��͸���״̬Ȼ������ͻ�������Ⱦ
        store.on('change', list=>{
            this.setState({list}); //������״̬
        });
    }

    render(){
        return <ul>
            {this.state.list.map(item => <li>{item}</li>)}
            <li>
                <input ref="nameInput"/>
                <button onClick={this.add.bind(this)}> add </button>
            </li>
        </ul>
    }

}

module.exports = List;