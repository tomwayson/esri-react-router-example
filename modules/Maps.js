/* global fetch */
import React from 'react'
import { Link, hashHistory } from 'react-router'

export default React.createClass({
  getInitialState () {
    // set up state to track AGO search results
    return { items: [] }
  },
  // search arcgis online for maps
  handleSubmit (event) {
    event.preventDefault()
    const searchTerm = event.target.elements[0].value
    const path = `/maps/?q=${searchTerm}`
    hashHistory.push(path)
  },
  componentWillMount () {
    this._loadData(this._getQuery(this.props))
  },
  _loadData (query) {
    const q = query && query.q
    const url = `http://www.arcgis.com/sharing/rest/search?num=10&start=0&sortField=avgRating&sortOrder=desc&q=(${q}) type%3A%20%22Web%20Map%22 -type:"Web Mapping Application"&f=json`
    fetch(url)
    .then((response) => {
      return response.json()
    }).then((json) => {
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
      <form className='form-group' onSubmit={this.handleSubmit}>
        <input type='text' placeholder='bike' className='form-control form-inline' defaultValue={this.props.location.query.q} /> {' '}
        <button type='submit' className='btn btn-primary'>Go</button>
      </form>
      <p>Showing top 10 web maps</p>
      <ul className='list-results'>{ listItems }</ul>
    </div>
  },
  componentWillReceiveProps (nextProps) {
    const query = this._getQuery(this.props)
    const nextQuery = this._getQuery(nextProps)
    if ((query && query.q) !== (nextQuery && nextQuery.q)) {
      // search term was updated, re-run query
      this._loadData(nextQuery)
    }
  },
  _getQuery (props) {
    return props.location && props.location.query
  }
})
