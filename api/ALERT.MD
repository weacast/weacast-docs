# [Alert plugin](https://github.com/weacast/weacast-alert)

Alerts are user-defined conditions automatically and continuously evaluated on streamed probe results as new forecast data are gathered. It can be viewed as an automated query of the [Probe results API](./PROBE.MD) that will raise an event whenever a matching result is found. With alert you can create triggers which will fire on an occurrence of the selected weather conditions (temperature, humidity, pressure, etc.) in a specified period of time and area.

## Alerts API

> On the client/server side the API is exposed using the [Feathers isomorphic API](https://docs.feathersjs.com/api/client.html#universal-isomorphic-api) and the [Feathers common database query API](https://docs.feathersjs.com/api/databases/querying.html)

The plugin exposes the available probes through the `alerts` service. Although only web sockets are usually used on the client side, both the [REST](https://docs.feathersjs.com/api/rest.html) and the [Socket](https://docs.feathersjs.com/api/socketio.html) interfaces are configured.

> `update`, `patch` methods are not allowed on alerts for now, you will have to recreate an alert to update it.

### Data model

The common data model of a probe as used by the API is [detailed here](../architecture/DATAMODEL.MD#alert-data-model).

**Coming soon !**
