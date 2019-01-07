(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{199:function(e,t,a){"use strict";a.r(t);var r=a(0),s=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),a("p",[e._v("Weacast aims at gathering, exposing, and making use of weather forecast data generated by "),a("strong",[e._v("forecast models")]),e._v(". It does often exist different "),a("strong",[e._v("instances")]),e._v(" of a forecast model producing more or less accurate data, usually in term of spatial or temporal resolution. As an example the "),a("a",{attrs:{href:"https://www.ncdc.noaa.gov/data-access/model-data/model-datasets/global-forcast-system-gfs",target:"_blank",rel:"noopener noreferrer"}},[e._v("GFS"),a("OutboundLink")],1),e._v(" model produces data at 1° or 0.5° degree of resolution with different time steps (e.g. each 3 hours until the production time + 240 hours). The production of a set of forecast data is called a "),a("strong",[e._v("run")]),e._v(" of the model and occurs on a regular daily basis, e.g. every 6 hours.")]),e._v(" "),a("p",[e._v("The spatial properties of a model instance are completely defined by a "),a("a",{attrs:{href:"https://weacast.gitbooks.io/weacast-docs/api/GRID.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("grid"),a("OutboundLink")],1),e._v(". The temporal properties are defined by interval values describing at which frequency/time the forecast data are produced (so called "),a("strong",[e._v("run interval/time")]),e._v(") and which time steps are available (so called "),a("strong",[e._v("forecast interval/time")]),e._v(").")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),a("p",[e._v("While on-demand probing directly returns the results you asked for, probing streams generates the results continuously without your intervention. We thus need a way to query the persisted results on-demand using:")]),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"main-concepts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#main-concepts","aria-hidden":"true"}},[this._v("#")]),this._v(" Main concepts")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"forecast-model"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#forecast-model","aria-hidden":"true"}},[this._v("#")]),this._v(" Forecast model")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"forecast-element"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#forecast-element","aria-hidden":"true"}},[this._v("#")]),this._v(" Forecast element")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Each configured forecast model instance output hundreds of "),t("strong",[this._v("forecast elements")]),this._v(" (i.e. meteorological elements) such as temperature, wind direction, etc. Forecast data are continuously updated because the model instance produces new forecast data for its elements every N hours.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"probe"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#probe","aria-hidden":"true"}},[this._v("#")]),this._v(" Probe")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Probes")]),this._v(" are virtual sensors used to probe forecast data at specific locations of interest (e.g. airports, cities, stores, etc.). It does exist two kind of probes:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("strong",[this._v("on-demand probing")]),this._v(", which allow to compute "),t("em",[this._v("on-demand")]),this._v(" forecast element values for a given forecast time and a set of locations,")]),this._v(" "),t("li",[t("strong",[this._v("probing stream")]),this._v(", which allow to automatically and continuously compute forecast element values for a set of locations as new forecast data are gathered.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),t("p",[this._v("Probed values are computed using "),t("a",{attrs:{href:"../api/GRID.MD#interpolatelongitude-latitude"}},[this._v("interpolation")]),this._v(" of the forecast data.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"probe-results-querying"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#probe-results-querying","aria-hidden":"true"}},[this._v("#")]),this._v(" Probe results querying")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("strong",[e._v("selectors")]),e._v(": to find all results where an attribute has (or does not have) the specified value (e.g. forecast time);")]),e._v(" "),a("li",[a("strong",[e._v("comparison operators")]),e._v(": to find all results where the target element value is less, less or equal, greater, greater or equal than a given value;")]),e._v(" "),a("li",[a("strong",[e._v("spatial operators")]),e._v(": to find all results located within a given geometry on the ground (e.g. in a given radius around a point),")]),e._v(" "),a("li",[a("strong",[e._v("aggregation operators")]),e._v(": to aggregate all target element values for a set of forecast times.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"alert"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#alert","aria-hidden":"true"}},[this._v("#")]),this._v(" Alert")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Alerts")]),this._v(" are user-defined conditions automatically and continuously evaluated on streamed probe results as new forecast data are gathered. It can be viewed as an automated query of the probe results that will raise an event whenever a matching result is found. With alert you can create triggers which will fire on an occurrence of the selected weather conditions (temperature, humidity, pressure, etc.) in a specified period of time and area.")])}],!1,null,null,null);s.options.__file="main-concepts.md";t.default=s.exports}}]);