# Core API

## Forecast

Weacast exposes the available forecast models found in the [configuration](../guides/BASICS.MD#configuring) at startup through the `forecasts` service. Although only web sockets are used on the client side, both the [REST](https://docs.feathersjs.com/api/rest.html) and the [Socket](https://docs.feathersjs.com/api/socketio.html) interfaces are configured.

For exemple you can request the available forecasts like this:
```javascript
import api from 'src/api'

api.service('/forecasts').find()
.then(response => {
  response.data.forEach(forecast => {
    // Do something with the current forecast model
  })
})
```

## Forecast element

Each forecast model exposes a set of (forecast elements](./PLUGINS.MD#forecast-element) using a database adapter as an implementation of the [Feathers service interface](https://docs.feathersjs.com/api/services.html). Because we want to remain database-agnostic, just like [Feathers is](https://docs.feathersjs.com/guides/step-by-step/intro/not-worry.html#how-do-i-use-my-preferred-database), the database adapter to be used is only known at startup depending on your [configuration](../guides/BASICS.MD#configuring). 

That's the reason why there is no static forecast element class in the core of Weacast, instead it provides an element mixin 
