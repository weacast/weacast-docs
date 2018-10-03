# [Probe plugin](https://github.com/weacast/weacast-probe)

Probes are virtual sensors used to derive your own business focussed data by probing forecast data at specific locations of interest (e.g. airports, cities, stores, etc.). This plugin manages two kind of probes:
* **on-demand probing**, which allow to compute *on-demand* (e.g. by a request to the server) forecast element values for a given forecast time and a set of locations,
* **probing stream**, which allow to make the Weacast server automatically and continuously compute forecast element values for a set of locations as new forecast data are gathered and then retrieve results *on-demand* (e.g. by a request to the server).

> Probed values are computed using [interpolation](./GRID.MD#interpolatelongitude-latitude) of the forecast data

On-demand probing is limited to a **small number of locations** (typically several hundreds) because results are directly returned in the request response. When you have a **large number of locations** (typically thounsands) you have to use probing streams. Indeed, it allows to paginate and filter the probe results according to various parameters such as spatial locations, forecast times, element values, etc. thus limiting the size of the data to be managed.

> For now probes can only be specified using the [WGS 84 longitude-latitude CRS](https://en.wikipedia.org/wiki/World_Geodetic_System)

## Direction elements

Forecast elements can be scalar value or axis component of vector value. This plugin can manage direction elements such as [wind direction](http://colaweb.gmu.edu/dev/clim301/lectures/wind/wind-uv.html) and compute for you the derived speed (vector norm) and direction (in degrees measured from the north) from the individual axis components.

If an element name starts with a `u-` or (respectively `v-`) prefix it is assumed to be the u-axis (respectively v-axis) component of the direction named according to the element name suffix. As a consequence if you probe elements `u-wind` and `v-wind` the plugin will generate a derived `windDirection` and `windSpeed` value for each of your locations.

> Weacast specifies the [meteorological wind direction](http://mst.nerc.ac.uk/wind_vect_convs.html) (in degrees), i.e. the direction **from** which the wind is blowing. The speed is provided with the same unit as the underlying forecast model (usually in SI unit `m/s`).

### Relative directions

It is often usefull to get the direction of an element (e.g. wind) relatively to a given local orientation (e.g. the direction of runway in an airport). In this case Weacast can compute for you the relative direction of the element with respect to the orientation of your locations, assuming they have an attribute defining it as a [bearing or azimuth](http://mst.nerc.ac.uk/wind_vect_convs.html) in degrees. As a consequence if you probe elements `u-wind` and `v-wind` the plugin will generate a derived `windBearingDirection` value storing the relative direction of the wind w.r.t. your local orientation for each of your locations.

> Weacast specifies the [relative wind vector azimuth](http://mst.nerc.ac.uk/wind_vect_convs.html) (in degrees), i.e. the direction **towards** which the wind is blowing w.r.t. the local orientation.

## Probes API

> On the client/server side the API is exposed using the [Feathers isomorphic API](https://docs.feathersjs.com/api/client.html#universal-isomorphic-api) and the [Feathers common database query API](https://docs.feathersjs.com/api/databases/querying.html)

The plugin exposes the available probes through the `probes` service. Although only web sockets are usually used on the client side, both the [REST](https://docs.feathersjs.com/api/rest.html) and the [Socket](https://docs.feathersjs.com/api/socketio.html) interfaces are configured.

> `update`, `patch` methods are not allowed on probes for now, you will have to recreate a probe to update it.

### Data model

The common data model of a probe as used by the API is [detailed here](../architecture/DATAMODEL.MD#probe-data-model).

### Create probes

Creating on-demand or streamed probes is pretty similar, you have to provide a GeoJSON feature collection and indicates which forecast model instance and element values you'd like to probe in your forecast data, e.g. for on-demand probing:
```javascript
import api from 'src/api'

api.getService('probes').create(
{
  "type": "FeatureCollection",
  "forecast": "arpege-europe",
  "elements": ["u-wind", "v-wind"],
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          144.29091388888889,
          -5.823011111111111
        ]
      }
    }
  ]
},
{
  query: {
    forecastTime: '2017-05-24T12:00:00.000Z'
  }
})
.then(response => {
  // Do something with the probed values
})
```
Response:
```json
{
  "type": "FeatureCollection",
  "forecast": "arpege-europe",
  "elements": ["u-wind", "v-wind"],
  "features": [
    {
      "type": "Feature",
      "properties": {
        "u-wind": -12.5152110987149,
        "v-wind": -1.62322067440722,
        "windDirection": 82.6100015193614,
        "windSpeed": 12.6200378051423
      }
      "geometry": {
        "type": "Point",
        "coordinates": [
          144.29091388888889,
          -5.823011111111111
        ]
      }
    }
  ]
}
```

The forecast time can also be a range to be specified using comparison operators, e.g.:
```
query: {
  forecastTime: {
    $gte: '2017-05-24T12:00:00.000Z',
    $lte: '2017-05-25T12:00:00.000Z'
  }
}
```

> In this case the feature properties in the response will be arrays of value ordered by forecast times instead of single values.

A streamed probe is automatically created if you do not provide the `forecastTime` in the query, you then have to use the [probe results API](./PROBE.html#probe-results) to retrieve element values.

### Available probes

For exemple you can request the available probes like this:
```javascript
import api from 'src/api'

api.getService('probes').find()
.then(response => {
  // Do something with the probe data
})
```
Response:
```json
{
  "total": 3,
  "limit": 10,
  "skip": 0,
  "data": [
    {
      "_id": "59248de38bb91d28d8155b37",
      "type": "FeatureCollection",
      "forecast": "arpege-world",
      "elements": [
        "u-wind",
        "v-wind",
        "gust"
      ]
    },
    ...
    }
  ]
}
```

### Property selection

You can skip pagination and retrieve selected properties only:
```javascript
import api from 'src/api'

api.getService('probes').find({
  query: {
    $paginate: false,
    $select: ['elements']
  }
})
.then(response => {
  // Do something with the element data
})
```
Response:
```json
[
  {
    "_id": "59248de38bb91d28d8155b37",
    "elements": [
      "u-wind",
      "v-wind",
      "gust"
    ]
  },
  ...
]
 ```

### Features retrieval

To retrieve features for a given probe you have to request it explicitely:
```javascript
import api from 'src/api'

api.getService('probes').get(probeId, {
  query: {
    $select: ['features']
  }
})
.then(response => {
  // Do something with the features
})
```
Response:
```json
{
  "features": [
    {
      "type": "Feature",
      "properties": {
        ...
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          75.95707224036518,
          30.850359856170176
        ]
      }
    },
    ...
}
```

## Probe hooks

The following hooks are executed on the Probe service:
![Probe hooks](https://cdn.rawgit.com/weacast/weacast-docs/9d7ac840bd860ce612ffe098f1b8c1027de8d914/images/Probe%20Hooks%20Diagram.svg)

Some additional hooks are provided by the Probe plugin.

### .marshallResultQuery(hook) [source](https://github.com/weacast/weacast-probe/blob/master/src/hooks/probing.js)

Filter results to match the given probe object ID as query parameter.

### .checkProbingType(hook) [source](https://github.com/weacast/weacast-probe/blob/master/src/hooks/probing.js)

Check if the created probe in a on-demand or a streamed probe. In the first case it will avoid creating the probe object in the database as probed values are computed on-the-fly.

### .performProbing(hook) [source](https://github.com/weacast/weacast-probe/blob/master/src/hooks/probing.js)

Perform the probing operation, i.e. compute probed values from forecast data of each available forecast time (streamed probe) or for the given forecast time as query parameter (on-demand probe).

### .removeResults(hook) [source](https://github.com/weacast/weacast-probe/blob/master/src/hooks/probing.js)

Remove all results matching the input probe object when it is removed from the database (streamed probe only).

### .removeFeatures(hook) [source](https://github.com/weacast/weacast-probe/blob/master/src/hooks/probing.js)

Remove all features of the input probe object when not explicitely required (streamed probe only).

## Probe results API

Probe results are generated by probing streams.

> On the client/server side the API is exposed using the [Feathers isomorphic API](https://docs.feathersjs.com/api/client.html#universal-isomorphic-api) and the [Feathers common database query API](https://docs.feathersjs.com/api/databases/querying.html)

The plugin exposes the available probe results through the `probe-results` service. Although only web sockets are usually used on the client side, both the [REST](https://docs.feathersjs.com/api/rest.html) and the [Socket](https://docs.feathersjs.com/api/socketio.html) interfaces are configured.

> `create`, `update`, `patch`, `remove` methods are only allowed from the server side, clients can only `get`and `find` probe results.

### Data model

The common data model of probe results as used by the API is [detailed here](../architecture/DATAMODEL.MD#probe-result-data-model).

> Probe results are usually numerous so you need to paginate/filter them

### Available probe results

For exemple you can request the available probe results like this:
```javascript
import api from 'src/api'

api.getService('probe-results').find({
  query: {
    probeId: '59248de38bb91d28d8155b3c',
    forecastTime: '2017-05-24T12:00:00.000Z'
  }
})
.then(response => {
  // Do something with the probe results
})
```
Response:
```json
{
  "total": 891,
  "limit": 10,
  "skip": 0,
  "data": [
    {
      "_id": "592490118bb91d28d815969b",
      "type": "Feature",
      "properties": {
        "u-wind": -12.5152110987149,
        "v-wind": -1.62322067440722,
        "windDirection": 82.6100015193614,
        "windSpeed": 12.6200378051423
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          75.95707224036518,
          30.850359856170176
        ]
      },
      "runTime": "2017-05-24T06:00:00.000Z",
      "forecastTime": "2017-05-24T12:00:00.000Z",
      "probeId": "59248de38bb91d28d8155b3c"
    },
    ...
  ]
}
```

### Advanced probe results filtering

Probe results are spatially indexed based on [MongoDB capabilities](https://docs.mongodb.com/manual/applications/geospatial-indexes/). So you can perform a spatial filter on your results like this:
```javascript
import api from 'src/api'

api.getService('probe-results').find({
  query: {
    probeId: '59248de38bb91d28d8155b3c',
    geometry: {
      $near: {
        $geometry: {
          type: 'Point',
          coordinates: [longitude, latitude]
        },
        $maxDistance: 10000 // in meters, i.e. 10 Kms around
      }
    }
  }
})
.then(response => {
  // Do something with the probe results
})
```

Such a complex query is fine when using the [Feathers isomorphic API](https://docs.feathersjs.com/api/client.html#universal-isomorphic-api) but if to be expressed manually as REST you have to convert nested objects to array notation like this: `/api/probe-results?probeId=59248de38bb91d28d8155b3c&forecastTime=2017-05-27T07:00:00.000Z&geometry[$near][$maxDistance]=1000000&geometry[$near][$geometry][type]=Point&geometry[$near][$geometry][coordinates][]=5&geometry[$near][$geometry][coordinates][]=43`.


You can also filter results according to the computed element values by using the [Feathers common database query API](https://docs.feathersjs.com/api/databases/querying.html), e.g. to get results with a wind speed between 2 m/s and 5 m/s:
```javascript
import api from 'src/api'

api.getService('probe-results').find({
  query: {
    probeId: '59248de38bb91d28d8155b3c',
    'properties.windSpeed': {
      $gte: 2,
      $lte: 5
    }
  }
})
.then(response => {
  // Do something with the probe results
})
```

## Probe results hooks

The following hooks are executed on the Probe results service:
![Probe results hooks](https://cdn.rawgit.com/weacast/weacast-docs/9d7ac840bd860ce612ffe098f1b8c1027de8d914/images/Probe%20Results%20Hooks%20Diagram.svg)
