import React from 'react'
import './home.css'

class HomeHeader extends React.Component {
    render() {
        return <div className="home-header" style={{ backgroundColor: this.props.backgroundColor, color: this.props.color }}>
            {this.props.backgroundColor}
            <button onClick={this.props.cColor}>改变</button>
        </div>
    }
}
export default HomeHeader;