import React from 'react'
import HomeHeaderSearch from './../components/home/HomeHeaderSearch'
import HomeSwiper from './../components/home/HomeSwiper'
import FlexItem from './../components/home/FlexItem'
import TabNav from './../components/home/TabNav'
import PropTypes from 'prop-types'

class Home extends React.Component {
	static propTypes = {
		obj: PropTypes.object.isRequired,
		showNavCreator: PropTypes.func.isRequired,
		notShowNavCreator: PropTypes.func.isRequired
	}
	componentDidMount(){
		this.props.showNavCreator({isNav:true,title:"酷狗"});
		// console.log(this.props);
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