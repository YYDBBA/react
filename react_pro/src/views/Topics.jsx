import React from 'react'
import PropTypes from 'prop-types'


class Topics extends React.Component {
	static propTypes = {
		obj: PropTypes.object.isRequired,
		showNavCreator: PropTypes.func.isRequired,
		notShowNavCreator: PropTypes.func.isRequired
	}
	componentDidMount() {
		this.props.notShowNavCreator({ isNav: true, title: "话题" });
	}
	render() {
		return (
			<React.Fragment>
				我是话题
			</React.Fragment>
		)
	}
}

export default Topics;