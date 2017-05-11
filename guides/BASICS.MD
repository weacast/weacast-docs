# Deploying

## The easy way : using Docker

Weacast provides Docker images on the [Docker Hub](https://hub.docker.com/r/weacast/weacast/) to ease deploying your own server.

The Weacast wep application includes the front-end side client as well as the back-end services/API. To run correctly it has to be linked with a standard [MongoDB container](https://hub.docker.com/_/mongo/) for the database.



## The hard way : from source code


```bash
// Clone Weacast
git clone https://github.com/weacast/weacast.git
cd weacast

// Client build (or using yarn)
npm install // 
quasar build

// Server build (or using yarn)
cd api
npm install
npm run build

// Running the server
npm run prod
```

# Configuring

