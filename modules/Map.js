// modules/Map.js
import React from 'react'
import { hashHistory } from 'react-router'
import * as esriLoader from 'esri-loader'

export default React.createClass({
  getInitialState () {
    // set up state to track when the arcgis api gets loaded
    return { mapLoaded: false }
  },
  render () {
    // show any map errors
    const error = this.state.error
    if (error) {
      return <div className='container'>
        <div className='alert alert-danger alert-map'>{error}</div>
        <button className='btn btn-default' onClick={hashHistory.goBack}>Go back</button>
      </div>
    }
    // otherwise, show map
    const item = this.state.item
    const title = item && item.title
    const link = item ? `https://www.arcgis.com/home/item.html?id=${item.id}` : 'javascript:void(0)'
    // show a loading indicator until the map is loaded
    const loadingStyle = {
      display: this.state.mapLoaded ? 'none' : 'block'
    }
    // show the map title
    const titleStyle = {
      display: title ? 'block' : 'none'
    }
    // set up the DOM to attach the map to
    return <div>
      <div className='map-title' style={titleStyle}><a href={link}>{title}</a></div>
      <div ref='map' style={{height: 'calc(100vh - 66px)'}} />
      <div className='loading' style={loadingStyle}>Loading...</div>
    </div>
  },
  componentDidMount () {
    if (!esriLoader.isLoaded()) {
      // lazy load the arcgis api
      const options = {
        // use a specific version instead of latest 4.x
        url: '//js.arcgis.com/3.18/'
      }
      esriLoader.bootstrap((err) => {
        if (err) {
          console.error(err)
        }
        // now that the arcgis api has loaded, we can create the map
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
        // hide the loading indicator
        // and show the map title
        // NOTE: this will trigger a rerender
        this.setState({
          mapLoaded: true,
          item: response.itemInfo.item
        })
      }, (err) => {
        this.setState({
          mapLoaded: true,
          error: err.message || err
        })
      })
    })
  }
})
