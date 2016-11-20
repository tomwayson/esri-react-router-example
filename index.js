import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import App from './modules/App'
import Map from './modules/Map'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/map" component={Map}/>
  </Router>
), document.getElementById('app'))
