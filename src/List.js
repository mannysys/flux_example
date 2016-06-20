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
    //组件装载完后执行该方法，开始监听store对象中抛出的事件
    componentDidMount(){

        actions.getAll(); //调用api数据

        //监听数据提供者Store有没有change事件，如果有的话就更改状态然后组件就会重新渲染
        store.on('change', list=>{
            this.setState({list}); //更新下状态
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