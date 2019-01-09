(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{170:function(e,t,a){e.exports=a.p+"assets/img/weacast-wind.58090169.png"},171:function(e,t,a){e.exports=a.p+"assets/img/weacast-timeline.fbea36b5.png"},172:function(e,t,a){e.exports=a.p+"assets/img/weacast-probe.a76e8a52.png"},173:function(e,t,a){e.exports=a.p+"assets/img/weacast-probe-location.250d7aed.png"},174:function(e,t,a){e.exports=a.p+"assets/img/demo-gui.089e7f80.png"},175:function(e,t,a){e.exports=a.p+"assets/img/weacast-alert.72238de6.png"},217:function(e,t,a){"use strict";a.r(t);var r=[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"showcase"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#showcase","aria-hidden":"true"}},[this._v("#")]),this._v(" Showcase")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"live-demo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#live-demo","aria-hidden":"true"}},[this._v("#")]),this._v(" Live demo")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:a(174),alt:"Live demo"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"visualize-forecast-data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#visualize-forecast-data","aria-hidden":"true"}},[this._v("#")]),this._v(" Visualize forecast data")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"explore-forecast-data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#explore-forecast-data","aria-hidden":"true"}},[this._v("#")]),this._v(" Explore forecast data")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"probe-forecast-data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#probe-forecast-data","aria-hidden":"true"}},[this._v("#")]),this._v(" Probe forecast data")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:a(175),alt:"Live demo"}})])}],s=a(0),o=Object(s.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),r("p",[e._v("A live demo is usually running at "),r("a",{attrs:{href:"http://demo.weacast.xyz",target:"_blank",rel:"noopener noreferrer"}},[e._v("demo.weacast.xyz"),r("OutboundLink")],1),e._v(". Have also a look to our list of known "),r("router-link",{attrs:{to:"./ecosystem.html#production-applications"}},[e._v("production applications")]),e._v(".")],1),e._v(" "),r("p",[e._v("On our demo weather data is gathered from the GFS (NCEP) and ARPEGE (Météo France) forecast models. The map shows:")]),e._v(" "),r("ul",[r("li",[e._v("wind u/v-components (i.e. speed and direction) using a "),r("router-link",{attrs:{to:"./../api/layers.html#flowlayer-source"}},[e._v("flow layer")])],1),e._v(" "),r("li",[e._v("wind gust (i.e. max speed) using a "),r("router-link",{attrs:{to:"./../api/layers.html#heatlayer-source"}},[e._v("heat layer")]),e._v(" or a "),r("router-link",{attrs:{to:"./../api/layers.html#scalarlayer-source"}},[e._v("scalar layer")])],1),e._v(" "),r("li",[e._v("precipitations using an additional "),r("router-link",{attrs:{to:"./../api/layers.html#scalarlayer-source"}},[e._v("scalar layer")])],1),e._v(" "),r("li",[e._v("a worldwide set of airports used to "),r("router-link",{attrs:{to:"./../architecture/main-concepts.html#probe"}},[e._v("probe")]),e._v(" forecast data at these locations")],1)]),e._v(" "),r("p",[e._v("Using the playback buttons at the bottom of the map you can navigate among available forecast times and see the map change. On the side menu you can select the currently visualized weather forecast model. Last but not least, using the search button on the map you will be able to find the airport matching best specific wind conditions (i.e. speed/direction) based on the probed data. The analysis uses the "),r("a",{attrs:{href:"https://github.com/weacast/weacast/blob/master/src/components/WindSeeker.vue#L125",target:"_blank",rel:"noopener noreferrer"}},[e._v("same weight"),r("OutboundLink")],1),e._v(" for both speed and direction differences so that it might result in a good match on speed "),r("strong",[e._v("and/or")]),e._v(" direction depending on the weather. You can also probe your own data by importing a GeoJSON file containing a collection of points, each location will be probed for the current forecast time.")]),e._v(" "),r("p",[e._v("You can also obtain a timeseries of forecast elements by either selecting one of the airports or double click on any location on the map. You will then see a timeseries button appear, which allow to open a popup displaying different graphs. Last but not least, you can activate an "),r("router-link",{attrs:{to:"./../architecture/main-concepts.html#alert"}},[e._v("alert zone")]),e._v(" in the layer list to raise alerts in Paris whenever the wind speed is greater than 0 (this is of course unrealistic alert conditions to ensure it will always raises for demonstration purpose !).")],1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),r("p",[e._v("This short video demonstrates how Weacast can be used to gather forecast data from different models to visualize and predict wind in different locations.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.youtube.com/watch?v=JHU7WbETWjw",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:a(170),alt:"Weacast video"}}),r("OutboundLink")],1)]),e._v(" "),e._m(4),e._v(" "),r("p",[e._v("This short video demonstrates how Weacast can be used to explore forecast data and future wind prediction using a timeline widget.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.youtube.com/watch?v=YcWIlnSbpoo",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:a(171),alt:"Weacast video"}}),r("OutboundLink")],1)]),e._v(" "),e._m(5),e._v(" "),r("p",[e._v("This short video demonstrates how Weacast can be used to probe your own business data to find locations matching target weather conditions. Using runways data, first are found airports with a target wind direction, then runways with a target wind direction relative to their own orientation.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.youtube.com/watch?v=4jvwNUbzuAY",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:a(172),alt:"Weacast video"}}),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("This short video demonstrates how Weacast can be used to probe your own business data or any location in the world to obtain timeseries of forecast elements.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.youtube.com/watch?v=43xdvaVXVUo",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:a(173),alt:"Weacast video"}}),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("This image illustrates how Weacast can be used to raise alerts on your probes with respect to weather conditions (temperature, humidity, pressure, etc.) in a specified period of time and area.")]),e._v(" "),e._m(6)])},r,!1,null,null,null);o.options.__file="showcase.md";t.default=o.exports}}]);