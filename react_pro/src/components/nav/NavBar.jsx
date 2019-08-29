import React from 'react'
import { /*Router, Route,*/ NavLink } from "react-router-dom";
import './nav.css'

class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedTab: 'blueTab',
			hidden: false
		};
	}

	render() {
		return (
			<div className="nav">
				<NavLink className="nav-item" activeClassName="selected" to="/home">主页</NavLink>
				<NavLink className="nav-item" activeClassName="selected" to="/info">消息</NavLink>
				<NavLink className="nav-item" activeClassName="selected" to="/friend">好友</NavLink>
				<NavLink className="nav-item" activeClassName="selected" to="/my">我的</NavLink>
				{/* <TabBar
					unselectedTintColor="#949494"
					tintColor="#33A3F4"
					barTintColor="white"
					hidden={this.state.hidden}
				>
					<TabBar.Item
						title="主页"
						key="Life"
						icon={<div style={{
							width: '22px',
							height: '22px',
							background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
						}}
						/>
						}
						selectedIcon={<div style={{
							width: '22px',
							height: '22px',
							background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
						}}
						/>
						}
						selected={this.state.selectedTab === 'blueTab'}
						badge={1}
						onPress={() => {
							this.setState({
								selectedTab: 'blueTab',
							});
						}}
						data-seed="logId"
					>
					</TabBar.Item>
					<TabBar.Item
						icon={
							<div style={{
								width: '22px',
								height: '22px',
								background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
							}}
							/>
						}
						selectedIcon={
							<div style={{
								width: '22px',
								height: '22px',
								background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
							}}
							/>
						}
						title="消息"
						key="Koubei"
						badge={'new'}
						selected={this.state.selectedTab === 'redTab'}
						onPress={() => {
							this.setState({
								selectedTab: 'redTab',
							});
						}}
						data-seed="logId1"
					>
					</TabBar.Item>
					<TabBar.Item
						icon={
							<div style={{
								width: '22px',
								height: '22px',
								background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat'
							}}
							/>
						}
						selectedIcon={
							<div style={{
								width: '22px',
								height: '22px',
								background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
							}}
							/>
						}
						title="好友"
						key="Friend"
						dot
						selected={this.state.selectedTab === 'greenTab'}
						onPress={() => {
							this.setState({
								selectedTab: 'greenTab',
							});
						}}
					>
					</TabBar.Item>
					<TabBar.Item
						icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
						selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
						title="我的"
						key="my"
						selected={this.state.selectedTab === 'yellowTab'}
						onPress={() => {
							this.setState({
								selectedTab: 'yellowTab',
							});
						}}
					>
					</TabBar.Item>
				</TabBar> */}
			</div>
		);
	}
}
export default NavBar;