import React from 'react'
import './home.css'

class FlexItem extends React.Component {
	state = {
		item: [{ url: '1', name: '乐库' }, { url: '2', name: '歌单' }, { url: '3', name: '电台听书' }, { url: '4', name: '猜你喜欢' }, { url: '5', name: '每日推荐' }, { url: '6', name: '收起' }]
	}
	render() {
		return (
			<div className="my-flex-container">
				{
					this.state.item.map(item => {
						return <div className="flex-item" key={item.url}>{item.name}</div>
					})
				}
			</div>
		);
	}
}
export default FlexItem;