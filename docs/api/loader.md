# [Forecast data loaders](https://github.com/weacast/weacast-loader)

[Forecast model plugins](./plugin.md) are modules that need to be either integrated in a monolithic Weacast application or deployed as independent micro-service like applications to be interconnected, see the [architecture section](./../architecture/global-architecture.md#architecture-at-scale).

Because the most consuming part of a Weacast application is usually the gathering and processing of forecast model data, the [weacast-loader](https://github.com/weacast/weacast-loader) module provides you with a set of download services available as Docker containers out-of-the-box. These services perform the same data processing workflow than the [ARPEGE](./plugin.md#arpege), [AROME](./plugin.md#arome) and [GFS](./plugin.md#gfs) plugins, based on [Krawler](https://kalisio.github.io/krawler/). This means that your Weacast application doesn't need to integrate these plugins anymore, the running download services will feed the database as usual in the background.

First you need to build the Docker containers containing the different configurations of your ARPEGE, AROME and GFS services:

```bash
# Manually
docker build -t weacast/weacast-arpege-world -f dockerfile.arpege-world .
docker build -t weacast/weacast-gfs-world -f dockerfile.gfs-world .
...
# Using Docker compose file
docker-compose build weacast-arpege-world weacast-gfs-world ...
```

Then you have to run it on your infrastructure:

```bash
# Stop/remove previous instances if any
docker-compose stop weacast-arpege-world weacast-gfs-world ...
docker-compose rm weacast-arpege-world weacast-gfs-world ...
# Launch new ones
docker-compose up -d weacast-arpege-world weacast-gfs-world ...
```

The actual download services are built from generic Docker images containing required dependencies and functions used to generate a [Krawler download job](https://kalisio.github.io/krawler/how-to-use-it/api.html#external-api) tailored to your forecast model and elements: [weacast-gfs](https://hub.docker.com/r/weacast/weacast-gfs/) and [weacast-arpege](https://hub.docker.com/r/weacast/weacast-arpege/).
