// modules/NavLink.js
import React from 'react'
import { Link } from 'react-router'

export default class extends React.Component {
  render () {
    const liClass = this.props.to === this.props['data-current-path'] ? 'active' : null
    return <li className={liClass}><Link {...this.props} /></li>
  }
}
