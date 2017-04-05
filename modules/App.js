import React from 'react'
// NavLinkItem is a wrapper around react-router's Link component
// that sets the active class on the <li> around the current nav link
import NavLinkItem from './NavLinkItem'
import EsriLoader from 'esri-loader-react'

export default React.createClass({

  componentDidMount () {
    console.log('preloading JSAPI')
    console.time('JSAPI loaded')
  },

  render () {
    const mapOptions = {
      url: 'https://js.arcgis.com/3.20/'
    }
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
      <EsriLoader options={mapOptions} ready={() => console.timeEnd('JSAPI loaded')} />
      <div className='main'>
        { this.props.children }
      </div>
    </div>
  },
  componentDidMount () {
    console.timeEnd('initial render')
  }
})
