import React from 'react';
import ReactDOM from 'react-dom';
import 'antd-mobile/dist/antd-mobile.css';
import './styles/index.css';
import Router from './router/router.config'
import { Provider } from 'react-redux'
import store from './redux/store'
ReactDOM.render( <
    Provider store = { store } >
    <
    Router / >
    <
    /Provider>,
    document.getElementById('root'));