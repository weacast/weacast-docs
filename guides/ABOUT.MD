## Why Weacast ?

Weather prediction data are now available from the major meteorological agencies and institutions on a day-to-day basis. Current weather observations serve as input to numerical computer models, through a process known as data assimilation, to produce a forecast of the future state of weather. These models output hundreds of other meteorological elements from the oceans to the top of the atmosphere such as temperature, precipitation, icing conditions, etc. As an example, the following animated image represents a typical output of the [GFS weather forecast model](https://www.ncdc.noaa.gov/data-access/model-data/model-datasets/global-forcast-system-gfs) from NOAA.

![GFS animated image](https://www.ncdc.noaa.gov/sites/default/files/GFS%20-%2020120712_0000-small.gif)

**Weacast** (a shortcut for **Wea**ther for**cast**) aims at providing web services to expose weather forecast data in a simple manner and format. Indeed, although publicly available weather forecast data come from many different sources, in many different and dedicated protocols/formats (such as [WCS](https://en.wikipedia.org/wiki/Web_Coverage_Service), [GeoTIFF](https://en.wikipedia.org/wiki/GeoTIFF), [GRIB](http://en.wikipedia.org/wiki/GRIB), etc.), making consumption in web applications not so easy, particularly on the client-side. Moreover, forecast data often cover large continental areas and contain hundred of elements such as temperature, wind, etc. but a few are usually required by a specific business use case. Last but not least, forecast data are in essence dynamic so that keeping your application up-to-date with the lastly available data is always a tedious task.

## Weacast philosophy

Weacast is **weather forecast model agnostic**, i.e. it mainly exposes a minimalistic framework where forecast data sources can be added on-demand to extend its capabilities in a plugin-like architecture. These data are then available in Weacast through simple REST services in JSON format and can be visualized using the built-in web app.

Currently supported plugins are the following:
* [ARPEGE](../api/PLUGIN.MD#ARPEGE) model from [Meteo France](http://www.meteofrance.com/simulations-numeriques-meteorologiques/monde)
* [AROME](../api/PLUGIN.MD#AROME) model from [Meteo France](http://www.meteofrance.com/simulations-numeriques-meteorologiques/monde)
* [GFS](../api/PLUGIN.MD#GFS) model from [NOAA](https://www.ncdc.noaa.gov/data-access/model-data/model-datasets/global-forcast-system-gfs)

Weacast aims at going beyond providing crude forecast data and includes tools to derive your own business focussed data by:
* [Probing](../api/PROBE.MD#probe-plugin) forecast data to extract or analyze relevant data for your locations of interest (e.g. airports, cities, stores, etc.)
* [Querying](../api/PROBE.MD#probe-results) your probed data to find which locations match specific weather conditions

## What is inside ?

Weacast is possible and mainly powered by the following stack:
* [Feathers](https://feathersjs.com/) on the backend side
* [Quasar](http://quasar-framework.org/) on the frontend side
* [Leaflet](http://leafletjs.com/) for mapping
* [Leaflet-velocity](https://github.com/danwild/leaflet-velocity) for wind visualization
* [Leaflet-timedimension](https://github.com/socib/Leaflet.TimeDimension) for time management


