## Deploying

The Weacast wep application includes the front-end side client as well as the back-end services/API. Once run it will continuously gather forecast data from configured model providers.

> After the first launch you will have to wait a few minutes before some data has been gathered and processed to be visible in the wep app user interface

### The easy way : using Docker

> This requires you to [install Docker](https://docs.docker.com/engine/installation/), the world’s leading software container platform.

Weacast provides Docker images on the [Docker Hub](https://hub.docker.com/r/weacast/weacast/) to ease deploying your own server. To run correctly it has to be linked with a standard [MongoDB container](https://hub.docker.com/_/mongo/) for the database. 

The following commands should do the job:
```bash
// Run the MongoDB container
docker run --name mongo-weacast -d mongo

// Run the Weacast container
docker run --name weacast -d -p 8081:8081 --link mongodb-weacast:mongodb weacast/weacast
```

Then point your browser to [localhost:8081](http://localhost:8081).

> If running Docker under Windows in a virtual machine first redirect the port 8081 of your virtual machine to your host

### The hard way : from source code

First you have to ensure the same [prerequisites](./DEVELOPMENT.MD#prerequisites) as for developing to build Weacast from source code. Then the following commands, assuming you have a MongoDB instance running on local host and default port (27017), should launch your local instance of Weacast:

```bash
// Clone Weacast
git clone https://github.com/weacast/weacast.git
cd weacast

// Client build (or using yarn)
npm install
quasar build

// Server build (or using yarn)
cd api
npm install
npm run build

// Running the server
npm run prod
```

Then point your browser to [localhost:8081](http://localhost:8080).

## Configuring

Weacast configuration is based on [Feathers](https://docs.feathersjs.com/guides/advanced/configuration.html) so the same guidelines are applicable, the default configuration can be found in the `api/config` folder. The main properties are the following:
* **db**
  * **adapter** : the database adapter, default and recommanded is [`mongodb`](https://github.com/feathersjs/feathers-mongodb) although there is experimental support for [`nedb`](https://github.com/feathersjs/feathers-nedb) and [`levelup`](https://github.com/feathersjs/feathers-levelup)
  * **path** : folder where to store database data for embedded database such as [`nedb`](https://github.com/feathersjs/feathers-nedb) and [`levelup`](https://github.com/feathersjs/feathers-levelup)
  * **url** : database URL to access the Weacast database used by drivers such as [mongodb](https://github.com/mongodb/node-mongodb-native)
* **forecastPath** : folder where temporary or persistent forecast data files are stored
* **forecasts** : an array of configuration objects for each registered forecast, the common properties are the following
  * **name** : internal model name that will be used in path to reach the underlying service
  * **label** : the label for the model in the user interface,
  * **description** : the description for the model in the user interface,
  * **attribution** : the attribution of the data to be displayed when visualized,
  * **model** : the model plugin to be used for this forecast,
  * **bounds** : the geographical bounds covered by the model as an array of decimal values `[min longitude, min latitude, max longitude, max latitude]`,
  * **origin** : the geographical origin of the data grid as an array of decimal values `[longitude origin, latitude origin]`,
  * **size** : the size of the data grid as an array of integer values `[width, height]`,
  * **resolution** : the geographical resolution of the data grid as an array of decimal values `[longitude resolution, latitude resolution]`,
  * **runInterval** : the period between two forecast runs (in seconds) - it also defines at which hours of the day the forecast data are produced (e.g. `00:00 - 06:00 - 12:00 - 18:00` for a `3600` seconds period),
  * **oldestRunInterval** : how long do the server go back in time when harvesting forecast data (in seconds),
  * **interval** : the period between two forecast time steps (in seconds),
  * **lowerLimit** : the offset from run time for the first forecast time step to be gathered (in seconds),
  * **upperLimit** : the offset from run time for the last forecast time step to be gathered (in seconds),
  * **updateInterval** : the check period for data updates (default is every 15 minutes)
  * **elements** : an array of forecast elements that will be managed for this model, the common properties are the following
    * **name** : internal element name that will be used in path to reach the underlying service
