# Layers

Weacast includes a set of [Leaflet](http://leafletjs.com/) layers to manage the temporal evolution of forecast data. Each layer type implements the [TimeDimension Layer interface](https://github.com/socib/Leaflet.TimeDimension#ltimedimensionlayer). Due to the possible large amount of forecast data it is recommanded to load data on-demand, although it is possible to have an internal data cache.

## FlowLayer [source](https://github.com/weacast/weacast-client/blob/master/src/layers/flow-layer.js)

To visualize forecast paired element as flow (e.g. wind direction), based on [leaflet-velocity](https://github.com/danwild/leaflet-velocity).

## HeatLayer [source](https://github.com/weacast/weacast-client/blob/master/src/layers/heat-layer.js)

To visualize forecast element scalar values (e.g. temperature) as a heatmap, based on [leaflet-heatmap](https://www.patrick-wied.at/static/heatmapjs/example-heatmap-leaflet.html).

## ColorImageLayer

To visualize forecast element scalar values (e.g. temperature) as a color image, TODO based on [leaflet-canvas](https://github.com/IHCantabria/Leaflet.CanvasLayer.Field).
