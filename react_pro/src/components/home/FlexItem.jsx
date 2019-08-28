import React from 'react'
import './home.css'

class FlexItem extends React.Component {
	state = {
		item: [
			{
				url:
					"https://gw.alicdn.com/tfs/TB1Wxi2trsrBKNjSZFpXXcXhFXa-183-144.png_.webp",
				name: '乐库'
			},
			{
				url:
					"https://img.alicdn.com/tfs/TB10UHQaNjaK1RjSZKzXXXVwXXa-183-144.png?getAvatar=1_.webp",
				name: '歌单'
			},
			{
				url:
					"https://gw.alicdn.com/tfs/TB11rTqtj7nBKNjSZLeXXbxCFXa-183-144.png?getAvatar=1_.webp",
				name: '电台听书'
			},
			{
				url:
					"https://gw.alicdn.com/tps/TB1eXc7PFXXXXb4XpXXXXXXXXXX-183-144.png?getAvatar=1_.webp",
				name: '猜你喜欢'
			},
			{
				url:
					"https://gw.alicdn.com/tfs/TB1IKqDtpooBKNjSZFPXXXa2XXa-183-144.png_.webp",
				name: '每日推荐'
			},
			{
				url:
					"https://gw.alicdn.com/tfs/TB1o0FLtyMnBKNjSZFoXXbOSFXa-183-144.png_.webp",
				name: '收起'
			},
			{
				url:
					"https://gw.alicdn.com/tfs/TB15nKhtpkoBKNjSZFEXXbrEVXa-183-144.png?getAvatar=1_.webp",
				name: '1'
			},
			{
				url:
					"https://gw.alicdn.com/tfs/TB1BqystrZnBKNjSZFrXXaRLFXa-183-144.png?getAvatar=1_.webp",
				name: '1'
			},
			{
				url:
					"https://gw.alicdn.com/tfs/TB1CMf4tlnTBKNjSZPfXXbf1XXa-183-144.png?getAvatar=1_.webp",
				name: '1'
			},
			{
				url:
					"https://gw.alicdn.com/tfs/TB18P98tyQnBKNjSZFmXXcApVXa-183-144.png?getAvatar=1_.webp",
				name: '1'
			}
		]
	}
	render() {
		return (
			<div className="my-flex-container">
				{
					this.state.item.map(item => {
						return <div className="flex-item" key={item.url}>
							<img className="item-img" src={item.url} alt="" />
							<span className="item-title">{item.name}</span>
						</div>
					})
				}
			</div>
		);
	}
}
export default FlexItem;