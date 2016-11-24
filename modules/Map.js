// modules/Map.js
import React from 'react'
import { Link } from 'react-router'
import * as esriLoader from 'esri-loader';

export default React.createClass({
  render() {
    return <div ref="map" style={{height: 'calc(100vh - 50px)'}}></div>
  },
  componentDidMount() {
    if (!esriLoader.isLoaded()) {
      // lazy load the arcgis api
      const onLoad = (err) => {
        if (err) {
          console.error(err)
        }
        // once it's loaded, create the map
        this._createMap()
      };
      const options = {
        // use a specific version instead of latest 4.x
        url: '//js.arcgis.com/3.18/'
      };
      esriLoader.bootstrap(onLoad, options)
    } else {
      // arcgis api is already loaded, just create the map
      this._createMap()
    }
  },
  _createMap() {
    // require the map class
    esriLoader.dojoRequire(['esri/map'], (Map) => {
      // create a map at in this component
      this._map = new Map(this.refs.map, {
        center: [-118, 34.5],
        zoom: 8,
        basemap: 'dark-gray'
      })
    })
  }
})
