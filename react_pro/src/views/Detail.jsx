import React from 'react'
import PropTypes from 'prop-types'

class Detail extends React.Component {
  static propTypes = {
		obj: PropTypes.object.isRequired,
		showNavCreator: PropTypes.func.isRequired,
		notShowNavCreator: PropTypes.func.isRequired
	}
	componentDidMount(){
		this.props.notShowNavCreator({isNav:false,title:"酷狗"});
	}
  render() {
    return (
      <div>
        我是详情
			</div>
    )
  }
}

export default Detail;