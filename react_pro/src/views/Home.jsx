import React from 'react'
import HomeHeader from './../components/home/HomeHeader'
import TodoList from './../components/home/TodoList'

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            flag: true,
            backgroundColor: "yellow",
            color: "red"
        }
    }
    changeColor = () => {
        // this.refs
        // console.log(this.textInput.current.style)
        this.setState({
            flag: !this.state.flag
        })
        if (this.state.flag) {
            this.setState({
                backgroundColor: "green",
                color: "#fff"
            })
            return
        }
        this.setState({
            backgroundColor: "yellow",
            color: "red"
        })
    }
    render() {
        return (
            <React.Fragment>
                <HomeHeader cColor={this.changeColor} color={this.state.color} backgroundColor={this.state.backgroundColor} />
                <TodoList></TodoList>
            </React.Fragment>
        )
    }
}

export default Home;