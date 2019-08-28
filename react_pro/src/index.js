import React from 'react';
import ReactDOM from 'react-dom';
import 'antd-mobile/dist/antd-mobile.css';
import './styles/index.css';
import Home from './views/Home'
import NavBar from './components/nav/NavBar'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			value: 'tom'
		}
	}
	render() {
		return (
			<React.Fragment>
				<Home />
				<NavBar />
			</React.Fragment>)
	}
}
ReactDOM.render(< App />, document.getElementById('root'));