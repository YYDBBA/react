import React from 'react'
import PropTypes from 'prop-types'


class About extends React.Component {
	static propTypes = {
		obj: PropTypes.object.isRequired,
		showNavCreator: PropTypes.func.isRequired,
		notShowNavCreator: PropTypes.func.isRequired
	}
	componentDidMount(){
		this.props.notShowNavCreator({isNav:true,title:"消息"});
	}
	render() {
		return (
			<div>
				你们好
			</div>
		)
	}
}

export default About;