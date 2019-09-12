import React from 'react'
import './home.css'
import { NavBar, Icon } from 'antd-mobile';

class HomeHeader extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return this.props.isHead ? (<div style={{ position: 'fixed', top: '0px', left: '0px', zIndex: "2", width: "100%" }}>
			<NavBar
				mode="dark"
				rightContent={[
					<Icon key="1" type="ellipsis" />,
				]}
			>{this.props.headTitle}</NavBar>
		</div>) : (null);
	}
}
export default HomeHeader;