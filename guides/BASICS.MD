## Deploying

The Weacast wep application includes the front-end side client as well as the back-end services/API. Once run it will continuously gather forecast data from configured model providers.

> After the first launch you will have to wait a few minutes before some data has been gathered and processed to be visible in the wep app user interface

### The easy way : using Docker

> This requires you to [install Docker](https://docs.docker.com/engine/installation/), the world’s leading software container platform.

Weacast provides Docker images on the [Docker Hub](https://hub.docker.com/r/weacast/weacast/) to ease deploying your own server. To run correctly it has to be linked with a standard [MongoDB container](https://hub.docker.com/_/mongo/) for the database. 

The following commands should do the job:
```bash
// Run the MongoDB container
docker run --name mongodb-weacast -v mongodb_weacast:/data/db -d mongo

// Run the Weacast container
docker run --name weacast -d -p 8081:8081 --link mongodb-weacast:mongodb weacast/weacast
```

Then point your browser to [localhost:8081](http://localhost:8081).

> If running Docker under Windows in a virtual machine first redirect the port 8081 of your virtual machine to your host

You can also use [docker-compose](https://docs.docker.com/compose/) and the [docker compose file](https://github.com/weacast/weacast/blob/master/docker-compose.yml).
The following commands should do the job:
```bash
docker pull weacast/weacast
// Run the MongoDB and Weacast containers
docker-compose up -d

// Stop the MongoDB and Weacast containers
docker-compose down
// Stop the MongoDB and Weacast containers erasing DB data
docker-compose down -v
```

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

### Backend side

Weacast backend configuration is based on [Feathers](https://docs.feathersjs.com/guides/advanced/configuration.html) so the same guidelines are applicable, the default configuration can be found in the `api/config` folder. The main properties are the following:
* **apiPath** : the API path prefix
* **authentication** : object configuring [Feathers authentication](https://github.com/feathersjs/feathers-authentication#default-options) plus custom weacast options
  * **defaultUsers** : the array of default users to be created on launch (format `{ email, password }`)
* **logs** : object configuring the [winston](https://github.com/winstonjs/winston) loggers to be used - each key is a [transport name](https://github.com/winstonjs/winston/blob/master/docs/transports.md) which value is associated configuration options
* **db**
  * **adapter** : the database adapter, default and recommanded is [`mongodb`](https://github.com/feathersjs/feathers-mongodb) although there is experimental support for [`nedb`](https://github.com/feathersjs/feathers-nedb) and [`levelup`](https://github.com/feathersjs/feathers-levelup)
  * **path** : folder where to store database data for embedded database such as [`nedb`](https://github.com/feathersjs/feathers-nedb) and [`levelup`](https://github.com/feathersjs/feathers-levelup)
  * **url** : database URL to access the Weacast database used by drivers such as [mongodb](https://github.com/mongodb/node-mongodb-native)
* **probePath** : folder where default probe data files are stored
* **defaultProbes** : the array of default probe streams to be created on launch (format `{ fileName, options }`)
* **forecastPath** : folder where temporary or persistent forecast data files are stored
* **forecasts** : an array of configuration objects for each registered forecast, which common properties are defined by the [Forecast data model](../architecture/DATAMODEL.MD#forecast-data-model)
* **proxyTable**: a set of proxy rules typically used for [scaling](./architecture/GLOBAL.MD#architecture-at-scale)

### Frontend side

Weacast frontend configuration is based on the same underlying [tool](https://github.com/lorenwest/node-config) that powers [Feathers](https://docs.feathersjs.com/guides/advanced/configuration.html) so the same guidelines are applicable, the default configuration can be found in the `config` folder. The main properties are the following:
* **apiPath** : the API path prefix
* **transport** : the transport to be used between frontend and backend, could be `http` for standard REST or `web-socket` for WebSockets
* **appName** : the name of the Weacast app
* **logs**
  * **level** : [log level](https://github.com/pimterry/loglevel#documentation) to be used 
* **map**
  * **seeker** : the name of the compoennt to be used to look for weather conditions in the app
  * **mixins** : the set of [mixins](../api/MIXINS.MD) to be applied to the map (could be `base`, `baseLayers`, `forecastLayers`, `geojsonLayers`, `fileLayers`, `fullscreen`, `measure`, `scalebar`, etc.)
  * **baseLayers** : the set of Leaflet layers to be shown in the base layer selector on the map
  * **forecastLayers** : the set of Weacast [forecast layers](../api/LAYERS.MD) to be shown in the overlay layer selector on the map
  * **featureStyle** : default style for GeoJson features in [Leaflet compatible format](http://leafletjs.com/reference-1.0.3.html#path-option)
  * **pointStyle** : default style for GeoJson points in [Leaflet compatible format](http://leafletjs.com/reference-1.0.3.html#marker-option)
  
> The main difference with the backend configuration is that the actual frontend configuration is generated by WebPack at build time from the config files, so you will need to rebuild the app to see your changes applied
