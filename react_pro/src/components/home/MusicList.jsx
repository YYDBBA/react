import React from 'react'
import './home.css'

class MusicList extends React.Component {
	state = {
		disabled: false,
	}

	render() {
		return (
			<div className="my-list">
				<div className="my-list-item item1">+</div>
				<div className="my-list-item item1">
					<img src="https://gw.alicdn.com/tfs/TB18P98tyQnBKNjSZFmXXcApVXa-183-144.png?getAvatar=1_.webp" style={{width:"94%",height:"100%",margin:"0 3%"}} alt=""/>
				</div>
				<div className="my-list-item item4 c-black">{this.props.list.name}</div>
				<div className="my-list-item item4">{this.props.list.autor}</div>
				<div className="my-list-item item4 item-b">{this.props.list.comment}</div>
			</div>);
	}
}

export default MusicList;