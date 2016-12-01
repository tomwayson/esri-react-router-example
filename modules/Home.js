import React from 'react'
import { Link, hashHistory } from 'react-router'

export default React.createClass({

  // search arcgis online for maps
  handleSubmit (event) {
    event.preventDefault()
    const searchTerm = event.target.elements[0].value
    const path = `/maps/?q=${searchTerm}`
    hashHistory.push(path)
  },

  render () {
    return <div className='container'><p>This is an example of how to use the <a href='https://developers.arcgis.com/javascript/' target='_blank'>ArcGIS API for JavaScript</a> in a <a href='https://github.com/reactjs/react-router-tutorial'>react-router</a> application.</p>
      <h4>Search for maps</h4>
      <p>Search <a href='https://www.arcgis.com/'>ArcGIS Online</a> for maps</p>
      <form className='form-group' onSubmit={this.handleSubmit}>
        <input type='text' placeholder='bike' className='form-control form-inline' /> {' '}
        <button type='submit' className='btn btn-primary'>Go</button>
      </form>
      <p>Or you can try one of these maps:</p>
      <ul>
        <li><Link to='/maps/ad5759bf407c4554b748356ebe1886e5'>Missing Migrants</Link></li>
        <li><Link to='/maps/71ba2a96c368452bb73d54eadbd59faa'>Refugee Routes</Link></li>
        <li><Link to='/maps/45ded9b3e0e145139cc433b503a8f5ab'>2015 European Sea Arrivals</Link></li>
        <li><Link to='/maps/8e42e164d4174da09f61fe0d3f206641'>Portland Bike Map</Link></li>
        <li><Link to='/maps/ef9c7fbda731474d98647bebb4b33c20'>High Cost Mortgage Loans, 2013</Link></li>
      </ul>
      <h4>What&apos;s the big deal?</h4>
      <p>One of the key benefits of the approach demonstrated in this application is that you can lazy load the map.
        Notice how fast this page loaded? That's because we haven't loaded the ArcGIS API, nor the map yet.</p>
      <h4>Show me the code</h4>
      <p>The source code for this project is on <a href='https://github.com/tomwayson/esri-react-router-example' target='_blank'>GitHub</a>.</p>
    </div>
  }
})
