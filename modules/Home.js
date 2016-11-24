import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return <div><p>This is an example of how to use the <a href="https://developers.arcgis.com/javascript/" target="_blank">ArcGIS API for JavaScript</a> in a <a href="https://github.com/reactjs/react-router-tutorial">react-router</a> application.</p>
      <p>One of the key benefits of the approach demonstrated in this application is that you can lazy load the map.
        Notice how fast this page loaded? That's because we haven't loaded the ArcGIS API, nor the map yet. Click the link below to load and view the map.</p>
      <p><Link to="/map">View Map</Link></p>
      <p>The source code for this project can be found <a href="https://github.com/tomwayson/esri-react-router-example" target="_blank">here</a>.</p>
    </div>
  }
})
