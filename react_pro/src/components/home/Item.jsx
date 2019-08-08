import React from 'react'

class Item extends React.Component {
    ddd=()=>{
        this.props.del(this.props.index)
    }
    render() {
        const { id, name } = this.props.list;
        return (
            <li>
                {id}.{name}
                <button onClick={this.ddd}>删除</button>
            </li>
        )
    }
}
export default Item;