(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{253:function(e,t,r){"use strict";r.r(t);var a=r(2),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"hooks"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hooks"}},[e._v("#")]),e._v(" Hooks")]),e._v(" "),r("p",[e._v("Weacast "),r("a",{attrs:{href:"https://github.com/weacast/weacast-core",target:"_blank",rel:"noopener noreferrer"}},[e._v("core module"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"https://github.com/weacast/weacast-client",target:"_blank",rel:"noopener noreferrer"}},[e._v("client module"),r("OutboundLink")],1),e._v(" provides a collection of common "),r("a",{attrs:{href:"https://docs.feathersjs.com/api/hooks.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("hooks"),r("OutboundLink")],1),e._v(" to be used by plugins or "),r("a",{attrs:{href:"https://docs.feathersjs.com/api/client.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("client applications"),r("OutboundLink")],1),e._v(". They also rely on "),r("a",{attrs:{href:"https://docs.feathersjs.com/api/hooks-common.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Feathers common hooks"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://docs.feathersjs.com/api/hooks.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hooks"),r("OutboundLink")],1),e._v(" are the main way to introduce business logic into applications and plugins so we recommend to understand them well first before reading this.")])]),e._v(" "),r("h2",{attrs:{id:"data-model-management"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#data-model-management"}},[e._v("#")]),e._v(" Data model management")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/weacast/weacast-core/blob/master/src/hooks/marshall.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("source"),r("OutboundLink")],1)]),e._v(" "),r("h3",{attrs:{id:"marshall-hook"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#marshall-hook"}},[e._v("#")]),e._v(" .marshall(hook)")]),e._v(" "),r("p",[e._v("Converts from server side types (e.g. moment dates) to basic JS types, which is usually required when writing to the database.")]),e._v(" "),r("h3",{attrs:{id:"unmarshall-hook"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#unmarshall-hook"}},[e._v("#")]),e._v(" .unmarshall(hook)")]),e._v(" "),r("p",[e._v("Converts back to server side types (e.g. moment dates) from basic JS types, which is usually required when reading from the database.")]),e._v(" "),r("h2",{attrs:{id:"query-management"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#query-management"}},[e._v("#")]),e._v(" Query management")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/weacast/weacast-core/blob/master/src/hooks/query.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("source"),r("OutboundLink")],1)]),e._v(" "),r("h3",{attrs:{id:"marshallquery-hook"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#marshallquery-hook"}},[e._v("#")]),e._v(" .marshallQuery(hook)")]),e._v(" "),r("p",[e._v("Converts from client/server side types (e.g. strings or moment dates) to basic JS types, which is usually required when querying the database.")]),e._v(" "),r("h3",{attrs:{id:"marshallcomparisonquery-hook"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#marshallcomparisonquery-hook"}},[e._v("#")]),e._v(" .marshallComparisonQuery(hook)")]),e._v(" "),r("p",[e._v("Converts from client/server side comparison types (e.g. numbers) to basic JS types, which is usually required when querying the database. Applies to "),r("code",[e._v("$lt")]),e._v(", "),r("code",[e._v("$lte")]),e._v(", "),r("code",[e._v("$gt")]),e._v(" and "),r("code",[e._v("$gte")]),e._v(" operators.")]),e._v(" "),r("h3",{attrs:{id:"marshallspatialquery-hook"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#marshallspatialquery-hook"}},[e._v("#")]),e._v(" .marshallSpatialQuery(hook)")]),e._v(" "),r("p",[e._v("Converts from client/server side spatial types (e.g. coordinates or numbers) to basic JS types, which is usually required when querying the database. Applies to "),r("a",{attrs:{href:"https://docs.mongodb.com/manual/reference/operator/query-geospatial/",target:"_blank",rel:"noopener noreferrer"}},[e._v("MongoDB geospatial operators"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h3",{attrs:{id:"processforecasttime-hook"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#processforecasttime-hook"}},[e._v("#")]),e._v(" .processForecastTime(hook)")]),e._v(" "),r("p",[e._v("Find the nearest forecast date/time corresponding to a requested date/time or date/time range.")]),e._v(" "),r("h3",{attrs:{id:"processdata-hook"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#processdata-hook"}},[e._v("#")]),e._v(" .processData(hook)")]),e._v(" "),r("p",[e._v("Discard or retrieve forecast data when required depending on the query parameters.")]),e._v(" "),r("h2",{attrs:{id:"logging"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#logging"}},[e._v("#")]),e._v(" Logging")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/weacast/weacast-core/blob/master/src/hooks/logger.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("core source"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://github.com/weacast/weacast-client/blob/master/src/hooks/logger.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("client source"),r("OutboundLink")],1)]),e._v(" "),r("h3",{attrs:{id:"log-hook"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#log-hook"}},[e._v("#")]),e._v(" .log(hook)")]),e._v(" "),r("ul",[r("li",[e._v("Log error for each hook in error with error log level.")]),e._v(" "),r("li",[e._v("Log information for each hook ran with verbose (respectively debug for client) log level.")]),e._v(" "),r("li",[e._v("Log detailed information for each hook ran with debug (respectively trace for client) log level.")])]),e._v(" "),r("h2",{attrs:{id:"events"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[e._v("#")]),e._v(" Events")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/weacast/weacast-client/blob/master/src/hooks/events.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("source"),r("OutboundLink")],1)]),e._v(" "),r("h3",{attrs:{id:"emit-hook"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#emit-hook"}},[e._v("#")]),e._v(" .emit(hook)")]),e._v(" "),r("p",[e._v("Emit an event named "),r("code",[e._v("{hook_type}Hook")]),e._v(" (e.g. "),r("code",[e._v("beforeHook")]),e._v(" or "),r("code",[e._v("afterHook")]),e._v(") for each hook ran, the payload of the event being the hook object.")]),e._v(" "),r("h2",{attrs:{id:"by-type"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#by-type"}},[e._v("#")]),e._v(" By type")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/api/application.html#application-hooks"}},[e._v("Application")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/api/forecast.html#forecast-model-hooks"}},[e._v("Forecast model service")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/api/element.html#forecast-element-hooks"}},[e._v("Forecast element service")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/api/probe.html#probe-hooks"}},[e._v("Probe service")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/api/probe.html#probe-results-hooks"}},[e._v("Probe results service")])],1)])])}),[],!1,null,null,null);t.default=o.exports}}]);