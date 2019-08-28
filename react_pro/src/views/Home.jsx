import React from 'react'
import HomeHeader from './../components/home/HomeHeader'
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
			<React.Fragment>
				<HomeHeader />
				<HomeHeaderSearch />
				<HomeSwiper />
				<FlexItem />
				<TabNav />
			</React.Fragment>
		)
	}
}

export default Home;