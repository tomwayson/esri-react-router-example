import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return <div>
      <h1>Esri React Router Example</h1>
      <ul role="nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/map">Map</Link></li>
      </ul>
      {this.props.children}
    </div>
  }
})
