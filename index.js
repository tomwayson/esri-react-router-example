import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import App from './modules/App'
import Home from './modules/Home'
import Map from './modules/Map'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/map" component={Map}/>
    </Route>
  </Router>
), document.getElementById('app'))
