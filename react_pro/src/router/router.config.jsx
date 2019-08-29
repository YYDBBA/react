import React from 'react'
import { BrowserRouter as Router, Route, /*  IndexRoute,, */Redirect  } from 'react-router-dom'
import App from '../views/App'
import Home from '../views/Home'
import About from '../views/About'
import Topics from '../views/Topics'
import My from '../views/My'

export default () => (
  <Router>
    <Route path="/" component={App}>
      </Route>
    <Route path="/home" component={Home} />
    <Route path="/info" component={About} />
    <Route path="/friend" component={Topics} />
    <Route path="/my" component={My} />
    <Redirect to="/home" />
  </Router>
)