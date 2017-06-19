# Forecast model API

> On the client/server side the API is exposed using the [Feathers isomorphic API](https://docs.feathersjs.com/api/client.html#universal-isomorphic-api) and the [Feathers common database query API](https://docs.feathersjs.com/api/databases/querying.html)

Weacast exposes the available forecast model instances found in the [configuration](../guides/BASICS.MD#configuring) at startup through the `forecasts` service, as a consequence the configuration file exposes the data model. Although only web sockets are usually used on the client side, both the [REST](https://docs.feathersjs.com/api/rest.html) and the [Socket](https://docs.feathersjs.com/api/socketio.html) interfaces are configured.

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

> `create`, `update`, `patch`, `remove` methods are only allowed from the server side, clients can only `get`and `find` forecasts

# Forecast model hooks

The following [hooks](./HOOKS.MD) are executed on the Forecast model service:
![Forecast hooks](https://cdn.rawgit.com/weacast/weacast-docs/9d7ac840bd860ce612ffe098f1b8c1027de8d914/images/Forecast%20Hooks%20Diagram.svg)
