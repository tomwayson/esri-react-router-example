import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return <div>
    <nav className="navbar navbar-default navbar-static-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand hidden-xs">Esri React Router Example</a>
        </div>
        <ul className="nav navbar-nav no-collapse" role="nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/map">Map</Link></li>
        </ul>
      </div>
    </nav>
    {this.props.children}
    </div>
  }
})
