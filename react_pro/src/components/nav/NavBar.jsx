import React from 'react'
import { /*Router, Route,*/ NavLink } from "react-router-dom";
import './nav.css'

class NavBar extends React.Component {
	render() {
		return this.props.isNav ? (
			<div className="nav">
				<NavLink className="nav-item" activeClassName="selected" to="/home">主页</NavLink>
				<NavLink className="nav-item" activeClassName="selected" to="/info">消息</NavLink>
				<NavLink className="nav-item" activeClassName="selected" to="/friend">好友</NavLink>
				<NavLink className="nav-item" activeClassName="selected" to="/my">我的</NavLink>
			</div>
		) : (null);
	}
}
export default NavBar;