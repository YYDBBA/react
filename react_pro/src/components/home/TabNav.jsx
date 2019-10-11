import React from 'react'
import './home.css'
import { Tabs } from 'antd-mobile';
import MusicList from './MusicList'
import { NavLink } from 'react-router-dom'

class TabNav extends React.Component {
	state = {
		tabs: [
			{ title: '新歌' },
			{ title: '直播' },
			{ title: '歌单' },
			{ title: '资讯' },
			{ title: '视频' }
		],
		listData: [
			{
				id: 1,
				name: 'counting star',
				autor: 'justin',
				comment: '4w'
			},
			{
				id: 2,
				name: '夜空中最亮的星',
				autor: 'justin',
				comment: '4w'
			},
			{
				id: 3,
				name: '体面',
				autor: 'justin',
				comment: '4w'
			},
			{
				id: 4,
				name: '出山',
				autor: 'justin',
				comment: '4w'
			},
			{
				id: 5,
				name: '知否知否',
				autor: 'justin',
				comment: '4w'
			}
		]
	}
	render() {
		return (
			<div>
				<Tabs tabs={this.state.tabs}
					initialPage={0}
					onChange={(tab, index) => { }}
					onTabClick={(tab, index) => { }}
				>
					<div style={{ height: '150px', backgroundColor: '#fff', width: '100%' }}>
						{this.state.listData.map(item =>
							<NavLink to="/detail" key={item.id}><MusicList list={item} /></NavLink>)}
					</div>
					<div style={{ height: '150px', backgroundColor: '#fff' }}>
						{this.state.listData.map(item => <MusicList key={item.id} list={item} />)}
					</div>
					<div style={{ height: '150px', backgroundColor: '#fff' }}>
						{this.state.listData.map(item => <MusicList key={item.id} list={item} />)}
					</div>
					<div style={{ height: '150px', backgroundColor: '#fff' }}>
						{this.state.listData.map(item => <MusicList key={item.id} list={item} />)}
					</div>
					<div style={{ height: '150px', backgroundColor: '#fff' }}>
						{this.state.listData.map(item => <MusicList key={item.id} list={item} />)}
					</div>
				</Tabs>
			</div>
		);
	}
}
export default TabNav;