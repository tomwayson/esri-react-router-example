# esri-react-router-example
Example of how to use [esri-loader](https://github.com/tomwayson/esri-loader) to load the [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/) in a [react-router](https://github.com/reactjs/react-router-tutorial) application.

[View it live](https://tomwayson.github.io/esri-react-router-example)

## How it works
The ArcGIS API is not needed until the user navigates to the `/map` route, but we can preload the script without blocking rendering by including the `<EsriLoaderContainer />` component which [loads the ArcGIS API using `bootstrap()`](/modules/EsriLoaderContainer.js).

Once on the map route, the `<Map>` component loads the [esri/arcgis/util](https://developers.arcgis.com/javascript/3/jsapi/esri.arcgis.utils-amd.html) module using `dojoRequire()` and then renders a map:

```js
// modules/Map.js
componentDidMount () {
  // get item id from route params or use default
  const itemId = this.props.params.itemId || '8e42e164d4174da09f61fe0d3f206641'
  // require the map class
  dojoRequire(['esri/arcgis/utils'], (arcgisUtils) => {
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
```

## Development instructions
First you'll need [Node.js](https://nodejs.org) and the package manager
that comes with it: [npm](https://www.npmjs.com/).

```bash
git clone https://github.com/tomwayson/esri-react-router-example
cd esri-react-router-example
npm install
npm start
```

Now open up [http://localhost:8080](http://localhost:8080)
