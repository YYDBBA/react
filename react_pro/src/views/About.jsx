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
			<div>
				你们好
			</div>
		)
	}
}

export default About;