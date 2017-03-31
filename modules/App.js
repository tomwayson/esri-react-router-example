import React from 'react'
// NavLinkItem is a wrapper around react-router's Link component
// that sets the active class on the <li> around the current nav link
import NavLinkItem from './NavLinkItem'
import * as esriLoader from 'esri-loader'

export default React.createClass({
  componentWillMount () {
    console.log('preloading JSAPI')
    // preload the ArcGIS API
    esriLoader.bootstrap((err) => {
      if (err) {
        console.error(err)
      }
      console.timeEnd('JSAPI load')
    }, {
      // use a specific version instead of latest 4.x
      url: '//js.arcgis.com/3.20/'
    })
  },
  render () {
    const currentPathname = this.props.location.pathname
    return <div>
      <nav className='navbar navbar-default navbar-static-top'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <a className='navbar-brand hidden-xs'>Esri React Router Example</a>
          </div>
          <ul className='nav navbar-nav no-collapse' role='nav'>
            <NavLinkItem to='/' currentPathname={currentPathname}>Home</NavLinkItem>
            <NavLinkItem to='/maps' currentPathname={currentPathname}>Maps</NavLinkItem>
          </ul>
        </div>
      </nav>
      <div className='main'>
        { this.props.children }
      </div>
    </div>
  },
  componentDidMount () {
    console.timeEnd('initial render')
  }
})
