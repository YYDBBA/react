import React from 'react'


class My extends React.Component {
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
				我是话题
			</React.Fragment>
		)
	}
}

export default My;