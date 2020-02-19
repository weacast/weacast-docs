(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{221:function(e,a,t){e.exports=t.p+"assets/img/feature-layer.d680411a.png"},222:function(e,a,t){e.exports=t.p+"assets/img/windbarb-layer.9029ed85.png"},223:function(e,a,t){e.exports=t.p+"assets/img/flow-layer.f4bb86a7.png"},224:function(e,a,t){e.exports=t.p+"assets/img/heat-layer.a649b83b.png"},225:function(e,a,t){e.exports=t.p+"assets/img/color-layer.09b40fcd.png"},226:function(e,a,t){e.exports=t.p+"assets/img/scalar-layer-raw.34fa3550.png"},227:function(e,a,t){e.exports=t.p+"assets/img/scalar-layer-interpolated.77d2160e.png"},255:function(e,a,t){"use strict";t.r(a);var r=t(2),s=Object(r.a)({},(function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"layers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#layers"}},[e._v("#")]),e._v(" Layers")]),e._v(" "),r("p",[e._v("Weacast includes a set of "),r("a",{attrs:{href:"http://leafletjs.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Leaflet"),r("OutboundLink")],1),e._v(" layers to help visualize forecast data or probe results.")]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),r("p",[e._v("In the legacy Weacast "),r("a",{attrs:{href:"https://github.com/weacast/weacast-client",target:"_blank",rel:"noopener noreferrer"}},[e._v("client module"),r("OutboundLink")],1),e._v(" each layer type implements the "),r("a",{attrs:{href:"https://github.com/socib/Leaflet.TimeDimension#ltimedimensionlayer",target:"_blank",rel:"noopener noreferrer"}},[e._v("TimeDimension Layer interface"),r("OutboundLink")],1),e._v(". However, Weacast "),r("a",{attrs:{href:"https://github.com/weacast/weacast-client",target:"_blank",rel:"noopener noreferrer"}},[e._v("client module"),r("OutboundLink")],1),e._v(" will not evolve anymore (see discussion "),r("a",{attrs:{href:"https://github.com/weacast/weacast-client/issues/6",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1),e._v(") and will only be maintained for the purpose of our "),r("a",{attrs:{href:"https://github.com/weacast/weacast",target:"_blank",rel:"noopener noreferrer"}},[e._v("demo application"),r("OutboundLink")],1),e._v(". If you'd like to build client applications using Weacast you'd better have a look to our client API layer in "),r("a",{attrs:{href:"https://github.com/weacast/weacast-core",target:"_blank",rel:"noopener noreferrer"}},[e._v("core module"),r("OutboundLink")],1),e._v(" and dedicated map engine modules like our "),r("a",{attrs:{href:"https://github.com/weacast/weacast-leaflet",target:"_blank",rel:"noopener noreferrer"}},[e._v("Leaflet plugin"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("h2",{attrs:{id:"feature-layers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#feature-layers"}},[e._v("#")]),e._v(" Feature Layers")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/socib/Leaflet.TimeDimension#ltimedimensionlayergeojson",target:"_blank",rel:"noopener noreferrer"}},[e._v("Time-stamped GeoJson layers"),r("OutboundLink")],1),e._v(" provide a generic way to visualize "),r("a",{attrs:{href:"https://geojson.org/geojson-spec.html#feature-objects",target:"_blank",rel:"noopener noreferrer"}},[e._v("GeoJSON features"),r("OutboundLink")],1),e._v(" including temporal evolution. Because "),r("RouterLink",{attrs:{to:"/architecture/data-model-view.html#probe-data-model"}},[e._v("probes")]),e._v(" and "),r("RouterLink",{attrs:{to:"/architecture/data-model-view.html#probe-result-data-model"}},[e._v("probe results")]),e._v(" are internally modelled as GeoJSON features they can be used to visualize them. However Weacast does not make any assumption on how you want to visualize these data so you might have to manually process the retrieved probe results in order to add a "),r("code",[e._v("time")]),e._v(" property on each feature corresponding to the "),r("code",[e._v("forecastTime")]),e._v(" or the "),r("code",[e._v("runTime")]),e._v(" for instance.")],1),e._v(" "),r("p",[e._v("Using "),r("a",{attrs:{href:"https://github.com/weacast/weacast-docs/blob/master/api/mixins.md#map-mixins",target:"_blank",rel:"noopener noreferrer"}},[e._v("map mixins"),r("OutboundLink")],1),e._v(" configuration options you can easily customize your probe results visualization to get something like this:")]),e._v(" "),r("p",[r("img",{attrs:{src:t(221),alt:"Weacast feature layer"}})]),e._v(" "),r("p",[e._v("Weacast also provides a convenient "),r("a",{attrs:{href:"http://weather.rap.ucar.edu/info/about_windbarb.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("wind barb"),r("OutboundLink")],1),e._v(" icon based on "),r("a",{attrs:{href:"https://github.com/hulongping/windbarb",target:"_blank",rel:"noopener noreferrer"}},[e._v("leaflet-windbarb"),r("OutboundLink")],1),e._v(" that can be used to symbolize wind like this:")]),e._v(" "),r("p",[r("img",{attrs:{src:t(222),alt:"Weacast windbarb layer"}})]),e._v(" "),r("h2",{attrs:{id:"forecast-data-layers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#forecast-data-layers"}},[e._v("#")]),e._v(" Forecast Data Layers")]),e._v(" "),r("p",[e._v("Weacast includes a set of "),r("a",{attrs:{href:"http://leafletjs.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Leaflet"),r("OutboundLink")],1),e._v(" layers to manage the temporal evolution of forecast data. Due to the possible large amount of forecast data it is recommanded to load data on-demand, although it is possible to have an internal data cache.")]),e._v(" "),r("h3",{attrs:{id:"forecastlayer-source"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#forecastlayer-source"}},[e._v("#")]),e._v(" ForecastLayer "),r("a",{attrs:{href:"https://github.com/weacast/weacast-client/blob/master/src/layers/forecast-layer.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("source"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("Forecast layer interface implemented by all other types of layer, based on "),r("a",{attrs:{href:"https://github.com/socib/Leaflet.TimeDimension#ltimedimensionlayer",target:"_blank",rel:"noopener noreferrer"}},[e._v("leaflet-timedimension"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("A Weacast layer of type "),r("code",[e._v("ClassName")]),e._v(" are created like this (where app is the Weacast "),r("RouterLink",{attrs:{to:"/api/application.html#client"}},[e._v("client app")]),e._v(" instance):")],1),e._v(" "),r("div",{staticClass:"language-javascript extra-class"},[r("pre",{pre:!0,attrs:{class:"language-javascript"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" layer "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("L"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Weacast"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("ClassName")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("app"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Forecast element to be managed")]),e._v("\n  elements"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'u-wind'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'v-wind'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Attribution")]),e._v("\n  attribution"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Forecast data from <a href=\"http://www.meteofrance.com\">Météo-France</a>'")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),r("h4",{attrs:{id:"setforecastmodel-model"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#setforecastmodel-model"}},[e._v("#")]),e._v(" .setForecastModel (model)")]),e._v(" "),r("p",[e._v("Called by the map whenever the current forecast model changes, can be customized by child classes to do whatever required then.")]),e._v(" "),r("h4",{attrs:{id:"fetchavailabletimes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fetchavailabletimes"}},[e._v("#")]),e._v(" .fetchAvailableTimes()")]),e._v(" "),r("p",[e._v("Retrieve the forecast element available forecast times and configure the "),r("a",{attrs:{href:"https://github.com/socib/Leaflet.TimeDimension#ltimedimension",target:"_blank",rel:"noopener noreferrer"}},[e._v("TimeDimension"),r("OutboundLink")],1),e._v(" object of the map accordingly.")]),e._v(" "),r("h4",{attrs:{id:"fetchdata"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fetchdata"}},[e._v("#")]),e._v(" .fetchData()")]),e._v(" "),r("p",[e._v("Retrieve the forecast element data for the currently configured time in the "),r("a",{attrs:{href:"https://github.com/socib/Leaflet.TimeDimension#ltimedimension",target:"_blank",rel:"noopener noreferrer"}},[e._v("TimeDimension"),r("OutboundLink")],1),e._v(" object of the map.")]),e._v(" "),r("h4",{attrs:{id:"getquery"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#getquery"}},[e._v("#")]),e._v(" .getQuery()")]),e._v(" "),r("p",[e._v("Build the query object to retrieve forecast element data, can be customized by child classes. By default create a query to retrieve data with the currently configured forecast model (i.e. bounds, resolution, etc.) and time in map.")]),e._v(" "),r("h4",{attrs:{id:"setdata-data"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#setdata-data"}},[e._v("#")]),e._v(" .setData(data)")]),e._v(" "),r("p",[e._v("To be implemented by child classes, data contains an array of data array for each configured forecast element in the layer.")]),e._v(" "),r("h3",{attrs:{id:"flowlayer-source"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flowlayer-source"}},[e._v("#")]),e._v(" FlowLayer "),r("a",{attrs:{href:"https://github.com/weacast/weacast-client/blob/master/src/layers/flow-layer.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("source"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("To visualize forecast paired element as flow (e.g. wind direction), based on "),r("a",{attrs:{href:"https://github.com/danwild/leaflet-velocity",target:"_blank",rel:"noopener noreferrer"}},[e._v("leaflet-velocity"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[r("img",{attrs:{src:t(223),alt:"Weacast flow layer"}})]),e._v(" "),r("h3",{attrs:{id:"heatlayer-source"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#heatlayer-source"}},[e._v("#")]),e._v(" HeatLayer "),r("a",{attrs:{href:"https://github.com/weacast/weacast-client/blob/master/src/layers/heat-layer.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("source"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("To visualize forecast element scalar values (e.g. temperature) as a heatmap, based on "),r("a",{attrs:{href:"https://www.patrick-wied.at/static/heatmapjs/example-heatmap-leaflet.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("leaflet-heatmap"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[r("img",{attrs:{src:t(224),alt:"Weacast heat layer"}})]),e._v(" "),r("h3",{attrs:{id:"colorlayer-source"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#colorlayer-source"}},[e._v("#")]),e._v(" ColorLayer "),r("a",{attrs:{href:"https://github.com/weacast/weacast-client/blob/master/src/layers/color-layer.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("source"),r("OutboundLink")],1)]),e._v(" "),r("blockquote",[r("p",[e._v("DEPRECATED: use the "),r("RouterLink",{attrs:{to:"/api/layers.html#scalarlayer-source"}},[e._v("ScalarLayer")])],1)]),e._v(" "),r("p",[e._v("To visualize forecast element scalar values (e.g. temperature) as a color image using "),r("a",{attrs:{href:"http://gka.github.io/chroma.js/#color-scales",target:"_blank",rel:"noopener noreferrer"}},[e._v("color maps"),r("OutboundLink")],1),e._v(", based on "),r("a",{attrs:{href:"https://github.com/IHCantabria/Leaflet.CanvasLayer.Field",target:"_blank",rel:"noopener noreferrer"}},[e._v("leaflet-canvaslayer-field"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[r("img",{attrs:{src:t(225),alt:"Weacast color layer"}})]),e._v(" "),r("h3",{attrs:{id:"scalarlayer-source"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#scalarlayer-source"}},[e._v("#")]),e._v(" ScalarLayer "),r("a",{attrs:{href:"https://github.com/weacast/weacast-client/blob/master/src/layers/scalar-layer.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("source"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("To visualize forecast element scalar values (e.g. temperature) as a structured mesh using "),r("a",{attrs:{href:"http://gka.github.io/chroma.js/#color-scales",target:"_blank",rel:"noopener noreferrer"}},[e._v("color maps"),r("OutboundLink")],1),e._v(", based on "),r("a",{attrs:{href:"https://github.com/manubb/Leaflet.PixiOverlay",target:"_blank",rel:"noopener noreferrer"}},[e._v("leaflet-pixi-overlay"),r("OutboundLink")],1),e._v(". It provides 2 ways of rendering the data:")]),e._v(" "),r("ul",[r("li",[e._v("As gridded based rendering to visualize the raw data. To each cell of the grid is assigned a data.\n"),r("img",{attrs:{src:t(226),alt:"Weacast raw scalar layer"}})]),e._v(" "),r("li",[e._v("An interpolated based rendering to visualize the data as color image.\n"),r("img",{attrs:{src:t(227),alt:"Weacast interpolated scalar layer"}})])])])}),[],!1,null,null,null);a.default=s.exports}}]);