import React from 'react';
import HomeHeader from './../components/home/HomeHeader'
import NavBar from './../components/nav/NavBar'
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 'tom'
		}
	}
	render() {
		return (
			<div style={{ width:'100%',height:"100%", paddingTop: "47px", boxSizing: "border-box" }}>
				<HomeHeader />
				<NavBar />
			</div>)
	}
}
export default App;
