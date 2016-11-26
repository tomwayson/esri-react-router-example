// modules/Map.js
import React from 'react'
import * as esriLoader from 'esri-loader'

export default React.createClass({
  getInitialState () {
    // set up state to track when the arcgis api gets loaded
    return { mapLoaded: false }
  },
  render () {
    // show a loading indicator until the map is loaded
    const loadingStyle = {
      display: this.state.mapLoaded ? 'none' : 'block'
    }
    // set up the DOM to attach the map to
    return <div>
      <div ref="map" style={{height: 'calc(100vh - 50px)'}}></div>
      <div className="loading" style={loadingStyle}>Loading...</div>
    </div>
  },
  componentDidMount () {
    if (!esriLoader.isLoaded()) {
      // lazy load the arcgis api
      const options = {
        // use a specific version instead of latest 4.x
        url: '//js.arcgis.com/3.18compact/'
      }
      esriLoader.bootstrap((err) => {
        if (err) {
          console.error(err)
        }
        this._createMap()
      }, options)
    } else {
      // arcgis api is already loaded, just create the map
      this._createMap()
    }
  },
  _createMap () {
    // require the map class
    esriLoader.dojoRequire(['esri/map'], (Map) => {
      // create a map at a DOM node in this component
      this._map = new Map(this.refs.map, {
        center: [-118, 34.5],
        zoom: 8,
        basemap: 'dark-gray'
      })
      this._map.on('load', () => {
        // hide the loading indicator
        // NOTE: this will trigger a rerender
        this.setState({
          mapLoaded: true
        })
      })
    })
  }
})
