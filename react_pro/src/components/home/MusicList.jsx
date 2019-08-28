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
					<img src="https://gw.alicdn.com/tfs/TB18P98tyQnBKNjSZFmXXcApVXa-183-144.png?getAvatar=1_.webp" style={{width:"86%",height:"100%",margin:"0 7%"}} alt=""/>
				</div>
				<div className="my-list-item item4">4</div>
				<div className="my-list-item item4">5</div>
				<div className="my-list-item item4">6</div>
			</div>);
	}
}

export default MusicList;