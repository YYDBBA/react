import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import App from '../containers/app'
import Home from '../containers/home'
import About from '../containers/about'
import Topics from '../containers/topics'
import Detail from '../containers/detail'
import My from '../containers/my'

export default () => (
  <Router>
    <Route component={App} />
    <Route path="/home" component={Home} />
    <Route path="/info" component={About} />
    <Route path="/friend" component={Topics} />
    <Route path="/my" component={My} />
    <Route path="/detail" component={Detail} />
    <Redirect to="/home" />
  </Router>
)