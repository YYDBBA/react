import React from 'react'
import HomeHeaderSearch from './../components/home/HomeHeaderSearch'
import HomeSwiper from './../components/home/HomeSwiper'
import FlexItem from './../components/home/FlexItem'
import TabNav from './../components/home/TabNav'

class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			flag: true,
			backgroundColor: "yellow",
			color: "red"
		}
	}
	render() {
		return (
			<div style={{paddingBottom:'50px'}}>
				<HomeHeaderSearch />
				<HomeSwiper />
				<FlexItem />
				<TabNav />
			</div>
		)
	}
}

export default Home;