import React from 'react';
import HomeHeader from './../components/home/HomeHeader'
import NavBar from './../components/nav/NavBar'
import PropTypes from 'prop-types'

class App extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		isNav: true,
	// 		headTitle: '酷狗'
	// 	}
	// }
	static propTypes = {
		obj: PropTypes.object.isRequired,
		showNavCreator: PropTypes.func.isRequired,
		notShowNavCreator: PropTypes.func.isRequired
	}
	componentDidMount(){
		this.props.showNavCreator({isNav:true,title:"酷狗"});
	}
	render() {
		return (
			<div style={{ width: '100%', height: "100%", paddingTop: "47px", boxSizing: "border-box" }}>
				<HomeHeader isHead={this.props.obj.isNav} headTitle={this.props.obj.title} />
				<NavBar isNav={this.props.obj.isNav} />
			</div>
		)
	}
}
export default App;
