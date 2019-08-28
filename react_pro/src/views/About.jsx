import React from 'react'


class About extends React.Component {
	constructor() {
		super();
		this.state = {
			flag: true,
			backgroundColor: "yellow",
			color: "red"
		}
	}
	render() {
		return (
			<React.Fragment>
				你们好
			</React.Fragment>
		)
	}
}

export default About;