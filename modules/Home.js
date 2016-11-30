import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render () {
    return <div className='container'><p>This is an example of how to use the <a href='https://developers.arcgis.com/javascript/' target='_blank'>ArcGIS API for JavaScript</a> in a <a href='https://github.com/reactjs/react-router-tutorial'>react-router</a> application.</p>
      <p>One of the key benefits of the approach demonstrated in this application is that you can lazy load the map.
        Notice how fast this page loaded? That's because we haven't loaded the ArcGIS API, nor the map yet.</p>
      <p>Click any of the links below to load and view that map.</p>
      <ul>
        <li><Link to='/map/ad5759bf407c4554b748356ebe1886e5'>Missing Migrants</Link></li>
        <li><Link to='/map/71ba2a96c368452bb73d54eadbd59faa'>Refugee Routes</Link></li>
        <li><Link to='/map/45ded9b3e0e145139cc433b503a8f5ab'>2015 European Sea Arrivals</Link></li>
        <li><Link to='/map/8e42e164d4174da09f61fe0d3f206641'>Portland Bike Map</Link></li>
        <li><Link to='/map/ef9c7fbda731474d98647bebb4b33c20'>High Cost Mortgage Loans, 2013</Link></li>
      </ul>
      <p>The source code for this project can be found <a href='https://github.com/tomwayson/esri-react-router-example' target='_blank'>here</a>.</p>
    </div>
  }
})
