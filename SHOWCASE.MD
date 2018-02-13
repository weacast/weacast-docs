# Showcase

A live demo is usually running at [demo.weacast.xyz](http://demo.weacast.xyz). Have also a look to our list of known [production applications](https://weacast.gitbooks.io/weacast-docs/content/ecosystem/#production-applications).

## Live demo

On [our demo](http://demo.weacast.xyz) weather data is gathered from the GFS (NCEP), ARPEGE and AROME (Météo France) forecast models. The map shows:
* wind u/v-components (i.e. speed and direction) using a [flow layer](https://weacast.gitbooks.io/weacast-docs/content/api/LAYERS.html#flowlayer-source)
* wind gust (i.e. max speed) using a [heat layer](https://weacast.gitbooks.io/weacast-docs/content/api/LAYERS.html#heatlayer-source) or a [color layer](https://weacast.gitbooks.io/weacast-docs/content/api/LAYERS.html#colorlayer-source)
* a worldwide set of airports used to [probe](https://weacast.gitbooks.io/weacast-docs/content/architecture/DOMAINMODEL.html#probe) forecast data at these locations
* some additional layers from ARPEGE (Météo France) forecast model

> Note: the heat layer is only well-configured for 0.1° model resolution, the additional ARPEGE layers might not be available depending on your current forecast time and model resolution

Using the playback buttons at the bottom of the map you can navigate among available forecast times and see the map change. On the side menu you can select the currently visualized weather forecast model. Last but not least, using the search button on the map you will be able to find the airport matching best specific wind conditions (i.e. speed/direction) based on the probed data. The analysis uses the [same weight](https://github.com/weacast/weacast/blob/master/src/components/WindSeeker.vue#L125) for both speed and direction differences so that it might result in a good match on speed **and/or** direction depending on the weather. You can also probe your own data by importing a GeoJSON file containing a collection of points, each location will be probed for the current forecast time.

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
