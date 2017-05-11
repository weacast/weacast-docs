# Plugin API

## Forecast element

Each forecast model exposes a service named `forecast.name/element.name` for each element found in the [configuration](../guides/BASICS.MD#configuring). Although only web sockets are used on the client side, both the [REST](https://docs.feathersjs.com/api/rest.html) and the [Socket](https://docs.feathersjs.com/api/socketio.html) interfaces are configured.

> Forecast element data are usually large so they are not returned by default, only metadata are

For exemple you can request the available forecast data for a given element like this:
```javascript
import api from 'src/api'

api.service('/' + forecast.name + '/' + element.name).find()
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

You can skip pagination pagination and retrieve selected properties only:
```javascript
import api from 'src/api'

api.service('/' + forecast.name + '/' + element.name).find({
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
 
To retrieve data for a given time you have to request it explicitely:
```javascript
import api from 'src/api'

api.service('/' + forecast.name + '/' + element.name).find({
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
