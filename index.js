import 'whatwg-fetch'
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import App from './modules/App'
import Home from './modules/Home'
import Maps from './modules/Maps'
import Map from './modules/Map'

console.time('initial render')
render((
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/maps'>
        <IndexRoute component={Maps} />
        <Route path='/maps(/:itemId)' component={Map} />
      </Route>
    </Route>
  </Router>
), document.getElementById('app'))
