// modules/NavLink.js
import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render () {
    const liClass = this.props.to === this.props.currentPathname ? 'active' : null
    return <li className={liClass}><Link {...this.props} /></li>
  }
})
