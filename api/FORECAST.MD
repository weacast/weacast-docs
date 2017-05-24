# Forecast model API

> On the client/server side the API is exposed using the [Feathers isomorphic API](https://docs.feathersjs.com/api/client.html#universal-isomorphic-api)

Weacast exposes the available forecast model instances found in the [configuration](../guides/BASICS.MD#configuring) at startup through the `forecasts` service. Although only web sockets are usually used on the client side, both the [REST](https://docs.feathersjs.com/api/rest.html) and the [Socket](https://docs.feathersjs.com/api/socketio.html) interfaces are configured.

For exemple you can request the available forecasts like this:
```javascript
import app from 'src/api'

app.getService('forecasts').find()
.then(response => {
  response.data.forEach(forecast => {
    // Do something with the current forecast model
  })
})
```

> `update`, `patch`, `remove` methods are only allowed from the server side, clients can only `get`and `find` forecasts
