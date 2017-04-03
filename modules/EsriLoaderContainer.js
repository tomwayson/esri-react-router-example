import React from 'react'
import { bootstrap, isLoaded } from 'esri-loader'

class EsriLoaderContainer extends React.Component {

  componentDidMount () {
    if (!isLoaded()) {
      console.log('preloading JSAPI')
      console.time('JSAPI loaded')
      bootstrap((err) => {
        if (err) {
          console.error(err)
        }
        console.timeEnd('JSAPI loaded')
      }, this.props.options)
    }
  }

  render () {
    return null
  }
}

export default EsriLoaderContainer
