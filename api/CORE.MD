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

Each forecast model exposes a set of (forecast elements](./PLUGINS.MD#forecast-element) using a database adapter as an implementation of the [Feathers service interface](https://docs.feathersjs.com/api/services.html). Because we want to remain database-agnostic, just like [Feathers is](https://docs.feathersjs.com/guides/step-by-step/intro/not-worry.html#how-do-i-use-my-preferred-database), the database adapter to be used is only known at startup depending on your [configuration](../guides/BASICS.MD#configuring). That's the reason why there is no static forecast element class in the core of Weacast, instead it provides a set of [functional mixins](https://github.com/daffl/uberproto#mixins) that will be applied on the instancied element service. 

### Basic element mixin

This mixin includes the most basic functions shared by all forecast elements

#### .getNearestRunTime(datetime)

Returns the nearest weather prediction model run date/time for a given date/time

#### .getNearestForecastTime(datetime)

Returns the nearest weather prediction model forecast date/time step for a given date/time

### Refresh element mixin

This mixin includes the most basic functions shared by all forecast elements to help updating forecast data from providers.

#### .getDataDirectory()

Returns the path where downloaded/persited data are located for the element

#### async .updateForecastData(mode)

Launches the forecast data update process for the element depending on mode value:
* **`once`** : will only perform data update for the current time
* **`interval`** : will perform data update for the current time and schedule the update process at regular interval after each data gathering according to the `updateInterval ` value in the [model configuration](../guides/BASICS.MD#backend-side).

####  async refreshForecastData(datetime)

Refreshes forecast data for the element based on the nearest run for the provided date/time. It will harvest data for each forecast time step available in the model according to the `lowerLimit`/`upperLimit` values in the [model configuration](../guides/BASICS.MD#backend-side).

####  async harvestForecastTime(datetime, runTime, forecastTime)

Refreshes forecast data for the element based on the provided run and forecast date/time. If the run is not yet available through the provider it will try to use the previous one until the `oldestRunInterval` value in the [model configuration](../guides/BASICS.MD#backend-side) is reached.


