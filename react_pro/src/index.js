import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Home from './views/Home'
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 'tom'
        }
    }
    render() {
        return <Home / >
    }
}
ReactDOM.render( < App / > , document.getElementById('root'));