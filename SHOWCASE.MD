# Showcase

A live demo is usually running at [demo.weacast.xyz](http://demo.weacast.xyz). Have also a look to our list of known [production applications](https://weacast.gitbooks.io/weacast-docs/content/ecosystem/#production-applications).

## Live demo

On [our demo](http://demo.weacast.xyz) weather data is gathered from the GFS (NCEP) and ARPEGE (Météo France) forecast models. The map shows:
* wind u/v-components (i.e. speed and direction) using a [flow layer](https://weacast.gitbooks.io/weacast-docs/content/api/LAYERS.html#flowlayer-source)
* wind gust (i.e. max speed) using a [heat layer](https://weacast.gitbooks.io/weacast-docs/content/api/LAYERS.html#heatlayer-source) or a [scalar layer](https://weacast.gitbooks.io/weacast-docs/content/api/LAYERS.html#scalarlayer-source)
* precipitations using an additional [scalar layer](https://weacast.gitbooks.io/weacast-docs/content/api/LAYERS.html#scalarlayer-source)
* a worldwide set of airports used to [probe](https://weacast.gitbooks.io/weacast-docs/content/architecture/DOMAINMODEL.html#probe) forecast data at these locations

Using the playback buttons at the bottom of the map you can navigate among available forecast times and see the map change. On the side menu you can select the currently visualized weather forecast model. Last but not least, using the search button on the map you will be able to find the airport matching best specific wind conditions (i.e. speed/direction) based on the probed data. The analysis uses the [same weight](https://github.com/weacast/weacast/blob/master/src/components/WindSeeker.vue#L125) for both speed and direction differences so that it might result in a good match on speed **and/or** direction depending on the weather. You can also probe your own data by importing a GeoJSON file containing a collection of points, each location will be probed for the current forecast time.

You can also obtain a timeseries of forecast elements by either selecting one of the airports or double click on any location on the map. You will then see a timeseries button appear, which allow to open a popup displaying different graphs. Last but not least, you can activate an [alert zone](https://weacast.gitbooks.io/weacast-docs/content/architecture/DOMAINMODEL.html#alert) in the layer list to raise alerts in Paris whenever the wind speed is greater than 0 (this is of course unrealistic alert conditions to ensure it will always raises for demonstration purpose !).

![Live demo](https://cdn.rawgit.com/weacast/weacast-docs/87ad1c832f89625d7ee8b8732c672a6e89d25050/images/Demo-GUI.png)

## Visualize forecast data

> This short video demonstrates how Weacast can be used to gather forecast data from different models to visualize and predict wind in different locations.

[![Weacast video](./images/weacast-wind.png)](https://www.youtube.com/watch?v=JHU7WbETWjw)

## Explore forecast data

> This short video demonstrates how Weacast can be used to explore forecast data and future wind prediction using a timeline widget.

[![Weacast video](./images/weacast-timeline.png)](https://www.youtube.com/watch?v=YcWIlnSbpoo)

## Probe forecast data

> This short video demonstrates how Weacast can be used to probe your own business data to find locations matching target weather conditions. Using runways data, first are found airports with a target wind direction, then runways with a target wind direction relative to their own orientation.

[![Weacast video](./images/weacast-probe.png)](https://www.youtube.com/watch?v=4jvwNUbzuAY)

> This short video demonstrates how Weacast can be used to probe your own business data or any location in the world to obtain timeseries of forecast elements.

[![Weacast video](./images/weacast-probe-location.png)](https://www.youtube.com/watch?v=43xdvaVXVUo)

> This image demonstrates how Weacast can be used to raise alerts on your probes with respect to weather conditions (temperature, humidity, pressure, etc.) in a specified period of time and area.

![Live demo](https://cdn.rawgit.com/weacast/weacast-docs/872ef40b0cdbe359a7a8dae0adcd40053750599d/images/weacast-alert.png)
