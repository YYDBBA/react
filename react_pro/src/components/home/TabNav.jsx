import React from 'react'
import './home.css'
import { Tabs } from 'antd-mobile';
import MusicList from './MusicList'

class TabNav extends React.Component {
	state={
		tabs:[
			{ title: '新歌' },
			{ title: '直播' },
			{ title: '歌单' },
			{ title: '资讯' },
			{ title: '视频' }
		]
	}
	render() {
		return (
			<div>
				<Tabs tabs={this.state.tabs}
					initialPage={0}
					onChange={(tab, index) => { console.log('onChange', index, tab); }}
					onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
				>
						<MusicList />
				</Tabs>
			</div>
		);
	}
}
export default TabNav;