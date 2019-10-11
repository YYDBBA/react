import React from 'react'
import PropTypes from 'prop-types'


class My extends React.Component {
	static propTypes = {
		obj: PropTypes.object.isRequired,
		showNavCreator: PropTypes.func.isRequired,
		notShowNavCreator: PropTypes.func.isRequired
	}
	componentDidMount() {
		this.props.notShowNavCreator({ isNav: true, title: "我的" });
	}
	render() {
		return (
			<React.Fragment>
				我是我的
			</React.Fragment>
		)
	}
}

export default My;