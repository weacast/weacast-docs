# Layers

Weacast includes a set of [Leaflet](http://leafletjs.com/) layers to manage the temporal evolution of forecast data. Each layer type implements the [TimeDimension Layer interface](https://github.com/socib/Leaflet.TimeDimension#ltimedimensionlayer). Due to the possible large amount of forecast data it is recommanded to load data on-demand, although it is possible to have an internal data cache.

## ForecastLayer [source](https://github.com/weacast/weacast-client/blob/master/src/layers/forecast-layer.js)

Forecast layer interface implemented by all other types of layer, based on [leaflet-timedimension](https://github.com/socib/Leaflet.TimeDimension#ltimedimensionlayer). 

A Weacast layer of type `ClassName` are created like this (where app is the Weacast [client app](./APPLICATION.MD#client) instance):
```javascript
let layer = new L.Weacast.ClassName(app, {
  // Forecast element to be managed
  elements: ['u-wind', 'v-wind'],
  // Attribution
  attribution: 'Forecast data from <a href="http://www.meteofrance.com">Météo-France</a>'
})
```

### .setForecastModel (model)

Called by the map whenever the current forecast model changes, can be customized by child classes to do whatever required then.

### .fetchAvailableTimes()

Retrieve the forecast element available forecast times and configure the [TimeDimension](https://github.com/socib/Leaflet.TimeDimension#ltimedimension) object of the map accordingly.

### .fetchData()

Retrieve the forecast element data for the currently configured time in the [TimeDimension](https://github.com/socib/Leaflet.TimeDimension#ltimedimension) object of the map.

### .getQuery()

Build the query object to retrieve forecast element data, can be customized by child classes. By default create a query to retrieve data with the currently configured forecast model (i.e. bounds, resolution, etc.) and time in map.

### .setData(data)

To be implemented by child classes, data contains an array of data array for each configured forecast element in the layer.

## FlowLayer [source](https://github.com/weacast/weacast-client/blob/master/src/layers/flow-layer.js)

To visualize forecast paired element as flow (e.g. wind direction), based on [leaflet-velocity](https://github.com/danwild/leaflet-velocity).

[![Weacast flow layer](../images/flow-layer.png)]

## HeatLayer [source](https://github.com/weacast/weacast-client/blob/master/src/layers/heat-layer.js)

To visualize forecast element scalar values (e.g. temperature) as a heatmap, based on [leaflet-heatmap](https://www.patrick-wied.at/static/heatmapjs/example-heatmap-leaflet.html).

## ColorLayer [source](https://github.com/weacast/weacast-client/blob/master/src/layers/color-layer.js)

To visualize forecast element scalar values (e.g. temperature) as a color image using [color maps](http://gka.github.io/chroma.js/#color-scales), based on [leaflet-canvaslayer-field](https://github.com/IHCantabria/Leaflet.CanvasLayer.Field).

[![Weacast color layer](../images/color-layer.png)]


