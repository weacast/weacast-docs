# Forecast element

> On the client/server side the API is exposed using the [Feathers isomorphic API](https://docs.feathersjs.com/api/client.html#universal-isomorphic-api)

Forecast models expose each element found in its [configuration](../guides/BASICS.MD#configuring) through a service named `forecast.name/element.name` implementing the [Feathers service interface](https://docs.feathersjs.com/api/services.html) for [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete). Although only web sockets are used on the client side by default, both the [REST](https://docs.feathersjs.com/api/rest.html) and the [Socket](https://docs.feathersjs.com/api/socketio.html) interfaces are configured.

Each forecast model exposes each element service using a database adapter as an implementation of the [Feathers service interface](https://docs.feathersjs.com/api/services.html). Because we want to remain database-agnostic, just like [Feathers is](https://docs.feathersjs.com/guides/step-by-step/intro/not-worry.html#how-do-i-use-my-preferred-database), the database adapter to be used is only known at startup depending on your [configuration](../guides/BASICS.MD#configuring). That's the reason why there is no static forecast element class in the core of Weacast, instead it provides a set of [functional mixins](https://github.com/daffl/uberproto#mixins) that will be applied on the instancied element service and are described hereafter. 

## Data model

The common data model of a forecast element is the following:
* **runTime**: the date/time of the model run that produced the forecast data
* **forecastTime** : the date/time of the forecast data
* **minValue** : the minimum value of the element in the forecast data
* **maxValue** : the maximum value of the element in the forecast data
* **data** : the forecast data for the element

A forecast element will cover the period until the start of the next available forecast, what is called the Time To Live (or TTL in short), this is typically one or three hour(s) for much of forecast data. Once its validity has expired it is automatically removed from the database.

If the data store of the element is the database then the **data** property containing forecast data is stored in the model, otherwise if the data store is the file system it has an additional **filePath** property only used internally to retrieve the data on-the-fly.

> Forecast element data are usually large so they are not returned by default, only metadata are

## Available forecast data

For exemple you can request the available forecast data for a given element like this:
```javascript
import api from 'src/api'

api.getService(forecast.name + '/' + element.name).find()
.then(response => {
  // Do something with the element data
})
```
Response:
```json
{
  "total": 27,
  "limit": 10,
  "skip": 0,
  "data": [
    {
      "_id": "59144a3ed0c0a234f8b4f86d",
      "runTime": "2017-05-11T06:00:00.000Z",
      "forecastTime": "2017-05-11T19:00:00.000Z",
      "minValue": -10.490379333496094,
      "maxValue": 15.306495666503906
    },
    {
      "_id": "59144ab0d0c0a234f8b4f88b",
      "runTime": "2017-05-11T06:00:00.000Z",
      "forecastTime": "2017-05-12T00:00:00.000Z",
      "minValue": -10.069664001464844,
      "maxValue": 11.477210998535156
    }
  ]
}
```

## Property selection

You can skip pagination and retrieve selected properties only:
```javascript
import api from 'src/api'

api.getService(forecast.name + '/' + element.name).find({
  query: {
    $paginate: false,
    $select: ['forecastTime']
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
    "_id": "59144a3ed0c0a234f8b4f86d",
    "forecastTime": "2017-05-11T19:00:00.000Z"
  },
  {
    "_id": "59144a83d0c0a234f8b4f881",
    "forecastTime": "2017-05-11T22:00:00.000Z"
  },
  {
    "_id": "59144a95d0c0a234f8b4f886",
    "forecastTime": "2017-05-11T23:00:00.000Z"
  }
 ]
 ```
 
## Data retrieval

To retrieve data for a given time you have to request it explicitely:
```javascript
import api from 'src/api'

api.getService(forecast.name + '/' + element.name).find({
  query: {
    time: new Date().toISOString(),
    $select: ['forecastTime', 'data']
  }
})
.then(response => {
  // Do something with the element data
})
```
Response:
```json
{
  "total": 1,
  "limit": 10,
  "skip": 0,
  "data": [
    {
      "_id": "59144a3ed0c0a234f8b4f86d",
      "forecastTime": "2017-05-11T19:00:00.000Z",
      "data": [ ... ]
     }
   ]
 }
 ```

When no more query parameters are provided the data retrieved are the ones at the original resolution of the model. If you want to resample data at a lower resolution to improve bandwidth and performance you could add the target grid configuration as parameters:
```javascript
import api from 'src/api'

api.getService(forecast.name + '/' + element.name).find({
  query: {
    time: new Date().toISOString(),
    $select: ['forecastTime', 'data'],
    oLon: origin[0],
    oLat: origin[1],
    sLon: size[0],
    sLat: size[1],
    dLon: resolution[0],
    dLat: resolution[1],
  }
})
.then(response => {
  // Do something with the element data
})
```
where:
* **origin** is the geographical origin of the target data grid as an array of decimal values `[longitude origin, latitude origin]`,
  * **size** is the size of the target data grid as an array of integer values `[width, height]`,
  * **resolution** is the geographical resolution of the target data grid as an array of decimal values `[longitude resolution, latitude resolution]`

## Base element mixin [source](https://github.com/weacast/weacast-core/blob/master/src/mixins/mixin.element.js)

This mixin includes the most basic functions shared by all forecast elements

### .getNearestRunTime(datetime)

Returns the nearest weather prediction model run date/time for a given date/time, it basically rounds the hours according to the `runInterval ` value in the [model configuration](../guides/BASICS.MD#backend-side).

### .getNearestForecastTime(datetime)

Returns the nearest weather prediction model forecast date/time step for a given date/time, it basically rounds the hours according to the `interval ` value in the [model configuration](../guides/BASICS.MD#backend-side).

## Refresh element mixin [source](https://github.com/weacast/weacast-core/blob/master/src/mixins/mixin.element.js)

This mixin includes the most basic functions shared by all forecast elements to help updating forecast data from providers.

### .getDataDirectory()

Returns the path where downloaded/persisted data are located for the element

### async .updateForecastData(mode)

Launches the forecast data update process for the element depending on the mode value:
* **`'once'`** : will perform data update for the current time only
* **`'interval'`** : will perform data update for the current time and schedule the update process at regular interval after each data gathering according to the `updateInterval ` value in the [model configuration](../guides/BASICS.MD#backend-side).

###  async .refreshForecastData(datetime)

Refreshes forecast data for the element based on the nearest run for the provided date/time. It will harvest data for each forecast time step available in the model according to the `lowerLimit`/`upperLimit` values in the [model configuration](../guides/BASICS.MD#backend-side).

###  async .harvestForecastTime(datetime, runTime, forecastTime)

Refreshes forecast data for the element based on the provided run and forecast date/time. If the run is not yet available through the provider it will try to use the previous one until the `oldestRunInterval` value in the [model configuration](../guides/BASICS.MD#backend-side) is reached.

### async .refreshForecastTime(datetime, runTime, forecastTime)

Download the forecast data for the given run/forecast date/time and process it, i.e. convert it if required then store it in the database.

### async .downloadForecastTime(runTime, forecastTime)

Download the forecast data for the given run/forecast date/time and returns the file path to the downloaded data.

