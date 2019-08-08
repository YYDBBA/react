import React from 'react'
import Item from './Item'

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            item: [
                { name: "吃饭", id: 1 },
                { name: "睡觉", id: 2 },
                { name: "打豆豆", id: 3 },
                { name: "出去玩", id: 4 },
                { name: "呵呵", id: 5 }
            ],
            value: ""
        }
    }
    //数据的双向绑定
    bindInput(e) {
        this.setState({
            value: e.target.value
        })
    }
    //添加一项
    addList() {
        if (this.state.value) {
            let newList = {
                name: this.state.value,
                id: this.state.item.length + 1
            }
            let newItem = this.state.item;
            newItem.push(newList);
            this.setState({
                item: newItem
            })
            this.setState({
                value: ''
            })
            return
        }
        alert("添加的内容不能为空")
    }
    //根据下标删除一项
    delItem = (index) => {
        this.state.item.splice(index, 1);
        this.setState({
            item: this.state.item
        })
    }
    render() {
        return (<div className="todo-list">
            <input type="text" value={this.state.value} onChange={(e) => {
                this.bindInput(e)
            }} />
            <button onClick={() => {
                this.addList()
            }}>添加</button>
            <div>正在输入：{this.state.value}</div>
            <ul>
                {this.state.item.map((list, index) => {
                    return <Item list={list} key={index} index={index} del={this.delItem}></Item>
                })}
            </ul>
        </div>)
    }
}
export default TodoList;