/* global fetch */
import React from 'react'
import { Link } from 'react-router'

export default React.createClass({

  getInitialState () {
    // set up state to track AGO search results
    return { items: [] }
  },

  // // pull item id from form and navigate directly to that map
  // handleSubmit (event) {
  //   event.preventDefault()
  //   const itemId = event.target.elements[0].value
  //   const path = `/maps/${itemId}`
  //   hashHistory.push(path)
  // },

  componentWillMount () {
    this._loadData()
  },
  _loadData () {
    const url = `http://www.arcgis.com/sharing/rest/search?num=10&start=0&sortField=avgRating&sortOrder=desc&q=type%3A%20%22Web%20Map%22 -type:"Web Mapping Application"&f=json`
    fetch(url)
    .then((response) => {
      return response.json()
    }).then((json) => {
      console.log('parsed json', json)
      this.setState({
        items: json.results
      })
    }).catch((ex) => {
      console.error('AGO query failed', ex)
    })
  },
  render () {
    const listItems = this.state.items.map((item) => {
      const to = '/maps/' + item.id
      const infoUrl = `https://www.arcgis.com/home/item.html?id=${item.id}`
      return <li key={item.id}>
        <h4><Link to={to}>{item.title}</Link>{ ' ' }
          <Link to={to}><i className='glyphicon glyphicon-globe' /></Link>{ ' ' }
          <a href={infoUrl}><i className='glyphicon glyphicon-info-sign' /></a></h4>
        <p>{item.snippet}</p>
      </li>
    })
    return <div className='container'>
      <p>Showing top 10 web maps</p>
      <ul className='list-results'>{ listItems }</ul>
    </div>
  },
  componentWillReceiveProps (nextProps) {
    console.log('nextProps', nextProps)
  }
})
