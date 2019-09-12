import React from 'react';
import HomeHeader from './../components/home/HomeHeader'
import NavBar from './../components/nav/NavBar'
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isHead: true,
			headTitle: '酷狗',
			isNav: true
		}
	}
	render() {
		return (
			<div style={{ width: '100%', height: "100%", paddingTop: "47px", boxSizing: "border-box" }}>
				<HomeHeader isHead={this.state.isHead} headTitle={this.state.headTitle} />
				<NavBar isNav={this.state.isNav} />
			</div>
		)
	}
}
export default App;
