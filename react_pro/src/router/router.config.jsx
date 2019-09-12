import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import App from '../views/App'
import Home from '../views/Home'
import About from '../views/About'
import Topics from '../views/Topics'
import Detail from '../views/Detail'
import My from '../views/My'

export default () => (
  <Router>
    <Route path="/" component={App} />
    <Route path="/home" component={Home} />
    <Route path="/info" component={About} />
    <Route path="/friend" component={Topics} />
    <Route path="/my" component={My} />
    <Route path="/detail" component={Detail} />
    <Redirect to="/home" />
  </Router>
)