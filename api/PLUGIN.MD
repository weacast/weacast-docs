# Forecast model plugins

> The simplest way to make a running plugin implementation is to copy existing forecast model plugins such as [ARPEGE](https://github.com/weacast/weacast-arpege)

The first thing a forecast model plugin has to do is to register to the database the available model instances as declared in the [configuration](../guides/BASICS.MD#configuring). Usually this is as simple as copying the right objects from the configuration (the ones tagged with the right **model** property) to the database. Then it has to declare all the services required to access the configured element for each model instance.

Hopefully, Weacast exposes the **initializePlugin()** function to do this for you, so you should simply call it in your *index.js*, e.g.:
```javascript
import path from 'path'
import { initializePlugin } from 'weacast-core'

export default function init () {
  const app = this

  initializePlugin(app, 'modelName', path.join(__dirname, 'services'))
}
```

This assumes you have created a *services* directory containing the required files to declare your forecast model, e.g. your folder/file hierarchy should look like this:
* *index.js*
* *services*
  * *modelName*
    * *modelName.hooks.js* : exporting the [hooks](./HOOKS.MD) of all your element services, 
    * *modelName.filters.js* : exporting the filters of all your element services, 
    * *modelName.service.js* : exporting the specific mixin associated to all your element services

In your element service mixin the following interface has to be implemented

## .getForecastTimeRequest (runTime, forecastTime)

Return the request options object to download the forecast data of the element from the provider according to given run/forecast date/time in [request client format](https://github.com/request/request#requestoptions-callback).

## .getForecastTimeFilePath(runTime, forecastTime)

Return the target file name where to download the forecast data of the element according to given run/forecast date/time.

## async .convertForecastTime(runTime, forecastTime)

Performs the conversion from the provider input data format to the output Weacast format (usually JSON). Should return a promise resolved as crude data array.


