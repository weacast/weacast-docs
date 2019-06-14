(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{202:function(e,t,a){"use strict";a.r(t);var r=a(0),o=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),a("p",[e._v("The Weacast web application demo includes the front-end side client as well as the back-end services/API. Once run it will continuously gather forecast data from configured model providers.")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("This requires you to "),a("a",{attrs:{href:"https://docs.docker.com/engine/installation/",target:"_blank",rel:"noopener noreferrer"}},[e._v("install Docker"),a("OutboundLink")],1),e._v(", the world’s leading software container platform.")])]),e._v(" "),a("p",[e._v("Weacast provides Docker images on the "),a("a",{attrs:{href:"https://hub.docker.com/r/weacast/weacast/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Hub"),a("OutboundLink")],1),e._v(" to ease deploying your own server. To run correctly it has to be linked with a standard "),a("a",{attrs:{href:"https://hub.docker.com/_/mongo/",target:"_blank",rel:"noopener noreferrer"}},[e._v("MongoDB container"),a("OutboundLink")],1),e._v(" for the database.")]),e._v(" "),a("p",[e._v("The following commands should do the job:")]),e._v(" "),e._m(4),a("p",[e._v("Then point your browser to "),a("a",{attrs:{href:"http://localhost:8081",target:"_blank",rel:"noopener noreferrer"}},[e._v("localhost:8081"),a("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(5),e._v(" "),a("p",[e._v("You can also use "),a("a",{attrs:{href:"https://docs.docker.com/compose/",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker-compose"),a("OutboundLink")],1),e._v(" and the "),a("a",{attrs:{href:"https://github.com/weacast/weacast/blob/master/docker-compose.yml",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker compose file"),a("OutboundLink")],1),e._v(".\nThe following commands should do the job:")]),e._v(" "),e._m(6),e._m(7),e._v(" "),a("p",[e._v("In production for our "),a("a",{attrs:{href:"http://demo.weacast.xyz/",target:"_blank",rel:"noopener noreferrer"}},[e._v("demo app"),a("OutboundLink")],1),e._v(" we use "),a("a",{attrs:{href:"https://github.com/jwilder/nginx-proxy",target:"_blank",rel:"noopener noreferrer"}},[e._v("nginx-proxy"),a("OutboundLink")],1),e._v(" to help us mapping the domain to the web app. Using "),a("code",[e._v("docker-compose")]),e._v(" this requires to connect the Weacast network to the reverse proxy (https://github.com/jwilder/nginx-proxy#multiple-networks) first.")]),e._v(" "),e._m(8),e._m(9),e._v(" "),a("p",[e._v("The demo app can either work as a monolithic application using local "),a("router-link",{attrs:{to:"./../api/plugin.html"}},[e._v("forecast model plugins")]),e._v(" (default mode) or with independent "),a("router-link",{attrs:{to:"./../api/loader.html"}},[e._v("data download services")]),e._v(" available as Docker containers, for more details see the "),a("router-link",{attrs:{to:"./../architecture/global-architecture.html"}},[e._v("architecture section")]),e._v(". To deploy the local loaders set the "),a("code",[e._v("LOADERS")]),e._v(" environment variable to a comma-separated list of plugins you'd like to use like "),a("code",[e._v("arpege,gfs")]),e._v(". Otherwise to deploy the download services use the additional "),a("a",{attrs:{href:"https://github.com/weacast/weacast/blob/master/docker-compose.loader.yml",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker compose file"),a("OutboundLink")],1),e._v(":")],1),e._v(" "),e._m(10),e._m(11),e._v(" "),a("p",[e._v("First you have to ensure the same "),a("router-link",{attrs:{to:"./development.html#prerequisites"}},[e._v("prerequisites")]),e._v(" as for developing to build Weacast from source code. Then the following commands, assuming you have a MongoDB instance running on local host and default port (27017), should launch your local instance of Weacast:")],1),e._v(" "),e._m(12),a("p",[e._v("Then point your browser to "),a("a",{attrs:{href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"}},[e._v("localhost:8080"),a("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),a("p",[e._v("Weacast backend configuration is based on "),a("a",{attrs:{href:"https://docs.feathersjs.com/guides/advanced/configuration.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Feathers"),a("OutboundLink")],1),e._v(" so the same guidelines are applicable, the default configuration can be found in the "),a("code",[e._v("api/config")]),e._v(" folder. The main properties are the following:")]),e._v(" "),a("ul",[e._m(15),e._v(" "),e._m(16),e._v(" "),a("li",[a("strong",[e._v("https")]),e._v(" : object configuring "),a("router-link",{attrs:{to:"/guides/basics.html#configuring"}},[e._v("HTTPS")]),e._v(" key file, certificate file and running port")],1),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),e._m(19),e._v(" "),e._m(20),e._v(" "),a("li",[a("strong",[e._v("authentication")]),e._v(" : object configuring "),a("a",{attrs:{href:"https://github.com/feathersjs/feathers-authentication#default-options",target:"_blank",rel:"noopener noreferrer"}},[e._v("Feathers authentication"),a("OutboundLink")],1),e._v(" plus custom weacast options, for OAuth2 providers add a "),a("code",[e._v("github")]),e._v(", "),a("code",[e._v("google")]),e._v(", "),a("code",[e._v("cognito")]),e._v(" or "),a("code",[e._v("oidc")]),e._v(" entry.\n"),e._m(21)]),e._v(" "),a("li",[a("strong",[e._v("logs")]),e._v(" : object configuring the "),a("a",{attrs:{href:"https://github.com/winstonjs/winston",target:"_blank",rel:"noopener noreferrer"}},[e._v("winston"),a("OutboundLink")],1),e._v(" loggers to be used - each key is a "),a("a",{attrs:{href:"https://github.com/winstonjs/winston/blob/master/docs/transports.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("transport name"),a("OutboundLink")],1),e._v(" which value is associated configuration options")]),e._v(" "),a("li",[a("strong",[e._v("db")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("adapter")]),e._v(" : the database adapter, only "),a("a",{attrs:{href:"https://github.com/feathersjs/feathers-mongodb",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("mongodb")]),a("OutboundLink")],1),e._v(" is officially supported right now")]),e._v(" "),a("li",[a("strong",[e._v("path")]),e._v(" : folder where to store database data for embedded database such as "),a("a",{attrs:{href:"https://github.com/feathersjs/feathers-nedb",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("nedb")]),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://github.com/feathersjs/feathers-levelup",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("levelup")]),a("OutboundLink")],1)]),e._v(" "),a("li",[a("strong",[e._v("url")]),e._v(" : database URL to access the Weacast database used by drivers such as "),a("a",{attrs:{href:"https://github.com/mongodb/node-mongodb-native",target:"_blank",rel:"noopener noreferrer"}},[e._v("mongodb"),a("OutboundLink")],1)]),e._v(" "),e._m(22)])]),e._v(" "),e._m(23),e._v(" "),e._m(24),e._v(" "),e._m(25),e._v(" "),e._m(26),e._v(" "),a("li",[a("strong",[e._v("forecasts")]),e._v(" : an array of configuration objects for each registered forecast, which common properties are defined by the "),a("router-link",{attrs:{to:"./../architecture/data-model-view.html#forecast-data-model"}},[e._v("Forecast data model")])],1),e._v(" "),a("li",[a("strong",[e._v("proxyTable")]),e._v(": a set of proxy rules typically used for "),a("router-link",{attrs:{to:"./../architecture/global-architecture.html#architecture-at-scale"}},[e._v("scaling")])],1)]),e._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Only "),a("a",{attrs:{href:"https://docs.feathersjs.com/api/databases/mongodb.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("MongoDB"),a("OutboundLink")],1),e._v(" is officially supported right now although we had an experimental attempt with "),a("a",{attrs:{href:"https://github.com/feathersjs/feathers-levelup",target:"_blank",rel:"noopener noreferrer"}},[e._v("LevelUP"),a("OutboundLink")],1),e._v(" as well. Please contact us if you'd like to support more adapters.")])]),e._v(" "),e._m(27),e._v(" "),a("p",[e._v("Weacast frontend configuration is based on the same underlying "),a("a",{attrs:{href:"https://github.com/lorenwest/node-config",target:"_blank",rel:"noopener noreferrer"}},[e._v("tool"),a("OutboundLink")],1),e._v(" that powers "),a("a",{attrs:{href:"https://docs.feathersjs.com/guides/advanced/configuration.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Feathers"),a("OutboundLink")],1),e._v(" so the same guidelines are applicable, the default configuration can be found in the "),a("code",[e._v("config")]),e._v(" folder. The main properties are the following:")]),e._v(" "),a("ul",[e._m(28),e._v(" "),e._m(29),e._v(" "),e._m(30),e._v(" "),a("li",[a("strong",[e._v("logs")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("level")]),e._v(" : "),a("a",{attrs:{href:"https://github.com/pimterry/loglevel#documentation",target:"_blank",rel:"noopener noreferrer"}},[e._v("log level"),a("OutboundLink")],1),e._v(" to be used")])])]),e._v(" "),e._m(31),e._v(" "),a("li",[a("strong",[e._v("map")]),e._v(" "),a("ul",[e._m(32),e._v(" "),a("li",[a("strong",[e._v("mixins")]),e._v(" : the set of "),a("router-link",{attrs:{to:"./../api/mixins.html"}},[e._v("mixins")]),e._v(" to be applied to the map (could be "),a("code",[e._v("base")]),e._v(", "),a("code",[e._v("baseLayers")]),e._v(", "),a("code",[e._v("forecastLayers")]),e._v(", "),a("code",[e._v("geojsonLayers")]),e._v(", "),a("code",[e._v("fileLayers")]),e._v(", "),a("code",[e._v("fullscreen")]),e._v(", "),a("code",[e._v("measure")]),e._v(", "),a("code",[e._v("scalebar")]),e._v(", etc.)")],1),e._v(" "),e._m(33),e._v(" "),a("li",[a("strong",[e._v("forecastLayers")]),e._v(" : the set of Weacast "),a("router-link",{attrs:{to:"./../api/layers.html"}},[e._v("forecast layers")]),e._v(" to be shown in the overlay layer selector on the map")],1),e._v(" "),a("li",[a("strong",[e._v("featureStyle")]),e._v(" : default style for GeoJson features in "),a("a",{attrs:{href:"http://leafletjs.com/reference-1.0.3.html#path-option",target:"_blank",rel:"noopener noreferrer"}},[e._v("Leaflet compatible format"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("strong",[e._v("pointStyle")]),e._v(" : default style for GeoJson points in "),a("a",{attrs:{href:"http://leafletjs.com/reference-1.0.3.html#marker-option",target:"_blank",rel:"noopener noreferrer"}},[e._v("Leaflet compatible format"),a("OutboundLink")],1)])])])]),e._v(" "),e._m(34)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"the-basics-a-step-by-step-introduction-to-weacast"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-basics-a-step-by-step-introduction-to-weacast","aria-hidden":"true"}},[this._v("#")]),this._v(" The Basics - A Step-by-Step introduction to Weacast")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"deploying"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deploying","aria-hidden":"true"}},[this._v("#")]),this._v(" Deploying")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),t("p",[this._v("After the first launch you will have to wait a few minutes before some data has been gathered and processed to be visible in the web app user interface")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"the-easy-way-using-docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-easy-way-using-docker","aria-hidden":"true"}},[this._v("#")]),this._v(" The easy way : using Docker")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("// Run the MongoDB container\ndocker run --name weacast-mongodb -v weacast_mongodb:/data/db -d mongo\n\n// Run the Weacast container\ndocker run --name weacast -d -p 8081:8081 --link weacast-mongodb:mongodb weacast/weacast\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"warning custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),t("p",[this._v("If running Docker under Windows in a virtual machine first redirect the port 8081 of your virtual machine to your host")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("docker pull weacast/weacast\n// Run the MongoDB and Weacast containers\ndocker-compose up -d\n\n// Stop the MongoDB and Weacast containers\ndocker-compose down\n// Stop the MongoDB and Weacast containers erasing DB data\ndocker-compose down -v\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"domain-binding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#domain-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Domain binding")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("docker network create weacast_weacast\ndocker run -d -p 80:80 -v /var/run/docker.sock:/tmp/docker.sock:ro --name rproxy jwilder/nginx-proxy\ndocker network connect weacast_weacast rproxy\ndocker-compose up -d\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"using-data-loaders"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-data-loaders","aria-hidden":"true"}},[this._v("#")]),this._v(" Using data loaders")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("// Pull generic download services images\ndocker pull weacast/weacast-arpege\ndocker pull weacast/weacast-gfs\n// Build download services\ndocker-compose -f docker-compose.yml -f docker-compose.loader.yml build weacast-arpege-world  weacast-arpege-europe  weacast-arome-france weacast-gfs-world\n// Run all download services, MongoDB and Weacast containers\ndocker-compose -f docker-compose.yml -f docker-compose.loader.yml up -d\n// Run specific download services\ndocker-compose -f docker-compose.yml -f docker-compose.loader.yml up -d weacast-arpege-world weacast-gfs-world\n\n// Stop all download services, MongoDB and Weacast containers\ndocker-compose -f docker-compose.yml -f docker-compose.loader.yml down\n// Stop all download services, MongoDB and Weacast containers erasing DB data\ndocker-compose -f docker-compose.yml -f docker-compose.loader.yml down -v\n// Stop specific download services\ndocker-compose -f docker-compose.yml -f docker-compose.loader.yml stop weacast-arpege-world weacast-gfs-world\ndocker-compose -f docker-compose.yml -f docker-compose.loader.yml "),t("span",{pre:!0,attrs:{class:"token function"}},[this._v("rm")]),this._v(" -f weacast-arpege-world weacast-gfs-world\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"the-hard-way-from-source-code"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-hard-way-from-source-code","aria-hidden":"true"}},[this._v("#")]),this._v(" The hard way : from source code")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("// Clone Weacast demo app\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/weacast/weacast.git\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cd")]),e._v(" weacast\n\n// Client run\nyarn "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\nyarn run dev\n\n// In another terminal clone Weacast API\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/weacast/weacast-api.git\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cd")]),e._v(" weacast-api\n\n// Server run\nyarn "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\nyarn run dev\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"configuring"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuring","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuring")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"backend-side"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#backend-side","aria-hidden":"true"}},[this._v("#")]),this._v(" Backend side")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("strong",[this._v("host")]),this._v(" : host name")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("strong",[this._v("port")]),this._v(" : port on which the app is running")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("strong",[this._v("apiPath")]),this._v(" : the API path prefix")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("strong",[this._v("staticPath")]),this._v(" : path to the static files to be served by the server")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("strong",[this._v("pluginPath")]),this._v(" : path to the plugin file to be used when the server starts")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("strong",[this._v("distribution")]),this._v(" : options for service distribution (see https://github.com/kalisio/feathers-distributed)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("strong",[this._v("defaultUsers")]),this._v(" : the array of default users to be created on launch (format "),t("code",[this._v("{ email, password }")]),this._v(")")]),this._v(" "),t("li",[t("strong",[this._v("disallowRegistration")]),this._v(": boolean to indicate if user registration is possible or not")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("strong",[this._v("secondaries")]),this._v(": map of secondary databases to be used, each key is the name of the DB and each value the database URL, e.g. to declare a secondary DB to store the element data use "),t("code",[this._v("{ data: 'mongodb://127.0.0.1:27017/weacast-data' }")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("strong",[this._v("services")]),this._v(": map of custom service configuration options, e.g. to use a secondary DB to store the element data use "),t("code",[this._v("{ elements: { dbName: 'data' } }")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("strong",[this._v("defaultProbes")]),this._v(" : the array of default probe streams to be created on launch (format "),t("code",[this._v("{ fileName, options }")]),this._v(")")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("strong",[this._v("defaultAlerts")]),this._v(" : the array of default alerts to be created on launch (format "),t("code",[this._v("{ fileName, options }")]),this._v(")")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("strong",[this._v("forecastPath")]),this._v(" : folder where temporary or persistent forecast data files are stored")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"frontend-side"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#frontend-side","aria-hidden":"true"}},[this._v("#")]),this._v(" Frontend side")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("strong",[this._v("apiPath")]),this._v(" : the API path prefix")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("strong",[this._v("transport")]),this._v(" : the transport to be used between frontend and backend, could be "),t("code",[this._v("http")]),this._v(" for standard REST or "),t("code",[this._v("websocket")]),this._v(" for WebSockets")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("strong",[this._v("appName")]),this._v(" : the name of the Weacast app")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("strong",[this._v("login")]),this._v(" "),t("ul",[t("li",[t("strong",[this._v("providers")]),this._v(" : the array of OAuth2 providers to be used on the sign in screen, e.g. "),t("code",[this._v("['google', 'github']")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("strong",[this._v("seeker")]),this._v(" : the name of the component to be used to look for weather conditions in the app")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("strong",[this._v("baseLayers")]),this._v(" : the set of Leaflet layers to be shown in the base layer selector on the map")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),t("p",[this._v("The main difference with the backend configuration is that the actual frontend configuration is generated by WebPack at build time from the config files, so you will need to rebuild the app to see your changes applied")])])}],!1,null,null,null);o.options.__file="basics.md";t.default=o.exports}}]);