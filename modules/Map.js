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
      <div ref='map' style={{height: 'calc(100vh - 50px)'}} />
      <div className='loading' style={loadingStyle}>Loading...</div>
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
    // get item id from route params or use default
    const itemId = this.props.params.itemId || '8e42e164d4174da09f61fe0d3f206641'
    // require the map class
    esriLoader.dojoRequire(['esri/arcgis/utils'], (arcgisUtils) => {
      // create a map at a DOM node in this component
      arcgisUtils.createMap(itemId, this.refs.map)
      .then((response) => {
        // this isn't really needed
        this._map = response.map
        // hide the loading indicator
        // NOTE: this will trigger a rerender
        this.setState({
          mapLoaded: true
        })
      })
    })
  }
})
