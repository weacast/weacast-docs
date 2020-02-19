(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{218:function(t,e,a){t.exports=a.p+"assets/img/application-hooks.17778c0b.svg"},254:function(t,e,a){"use strict";a.r(e);var s=a(2),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"application"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#application"}},[t._v("#")]),t._v(" Application")]),t._v(" "),s("h2",{attrs:{id:"backend-setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#backend-setup"}},[t._v("#")]),t._v(" Backend setup")]),t._v(" "),s("p",[t._v("Weacast "),s("a",{attrs:{href:"https://github.com/weacast/weacast-core",target:"_blank",rel:"noopener noreferrer"}},[t._v("core module"),s("OutboundLink")],1),t._v(" provides a helper to quickly initialize what is required for your "),s("a",{attrs:{href:"https://docs.feathersjs.com/api/application.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("server application"),s("OutboundLink")],1),t._v(". The core module provides the ability to initialize a new Weacast application instance, attach it to the configured database and setup authentication:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" weacast "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'weacast-core'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Initialize app")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" app "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("weacast")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Connect to DB")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("connect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"authentication"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#authentication"}},[t._v("#")]),t._v(" Authentication")]),t._v(" "),s("p",[t._v("Weacast includes a built-in local authentication strategy based on the "),s("a",{attrs:{href:"https://docs.feathersjs.com/api/authentication/server.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Feathers authentication module"),s("OutboundLink")],1),t._v(". It also automatically configures the "),s("a",{attrs:{href:"https://docs.feathersjs.com/api/authentication/oauth2.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Feathers OAuth2 plugin"),s("OutboundLink")],1),t._v(" for "),s("a",{attrs:{href:"https://github.com/jaredhanson/passport-github",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),s("OutboundLink")],1),t._v(", "),s("a",{attrs:{href:"https://github.com/jaredhanson/passport-google-oauth2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google"),s("OutboundLink")],1),t._v(", "),s("a",{attrs:{href:"https://github.com/kalisio/passport-openidconnect",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenID Connect"),s("OutboundLink")],1),t._v(" and "),s("a",{attrs:{href:"https://github.com/bainweb/passport-oauth2-cognito",target:"_blank",rel:"noopener noreferrer"}},[t._v("Congnito"),s("OutboundLink")],1),t._v(" if you provide them in your "),s("RouterLink",{attrs:{to:"/guides/basics.html#configuring"}},[t._v("configuration file")]),t._v(".")],1),t._v(" "),s("p",[t._v("You can read "),s("a",{attrs:{href:"https://blog.feathersjs.com/how-to-setup-oauth-flow-with-featherjs-522bdecb10a8",target:"_blank",rel:"noopener noreferrer"}},[t._v("this article"),s("OutboundLink")],1),t._v(" to learn more about the underlying process.")]),t._v(" "),s("h3",{attrs:{id:"https-support"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#https-support"}},[t._v("#")]),t._v(" HTTPS support")]),t._v(" "),s("p",[t._v("Adding the right configuration like below you can easily Weacast run under "),s("a",{attrs:{href:"https://docs.feathersjs.com/api/express.html#https",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTPS"),s("OutboundLink")],1),t._v(":")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("https"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  key"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'server.key'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  cert"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'server.crt'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" process"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTTPS_PORT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8084")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"client-setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#client-setup"}},[t._v("#")]),t._v(" Client setup")]),t._v(" "),s("p",[t._v("The Weacast "),s("a",{attrs:{href:"https://github.com/weacast/weacast-core",target:"_blank",rel:"noopener noreferrer"}},[t._v("core module"),s("OutboundLink")],1),t._v(" or the legacy Weacast "),s("a",{attrs:{href:"https://github.com/weacast/weacast-client",target:"_blank",rel:"noopener noreferrer"}},[t._v("client module"),s("OutboundLink")],1),t._v(" provides a helper to quickly initialize what is required for your "),s("a",{attrs:{href:"https://docs.feathersjs.com/api/client.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("client application"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("Weacast "),s("a",{attrs:{href:"https://github.com/weacast/weacast-client",target:"_blank",rel:"noopener noreferrer"}},[t._v("client module"),s("OutboundLink")],1),t._v(" will not evolve anymore (see discussion "),s("a",{attrs:{href:"https://github.com/weacast/weacast-client/issues/6",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1),t._v(") and will only be maintained for the purpose of our "),s("a",{attrs:{href:"https://github.com/weacast/weacast",target:"_blank",rel:"noopener noreferrer"}},[t._v("demo application"),s("OutboundLink")],1),t._v(". If you'd like to build client applications using Weacast you'd better use the client API layer in "),s("a",{attrs:{href:"https://github.com/weacast/weacast-core",target:"_blank",rel:"noopener noreferrer"}},[t._v("core module"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" weacast "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'weacast-core/client'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Initialize API wrapper")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" api "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("weacast")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Retrieve a given service")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" probes "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getService")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'probes'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"application-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#application-api"}},[t._v("#")]),t._v(" Application API")]),t._v(" "),s("h3",{attrs:{id:"getservice-name-backend-client"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getservice-name-backend-client"}},[t._v("#")]),t._v(" .getService(name) - backend/client")]),t._v(" "),s("p",[t._v("Retrieve the given service by name, should replace "),s("a",{attrs:{href:"https://docs.feathersjs.com/api/application.html#servicepath",target:"_blank",rel:"noopener noreferrer"}},[t._v("Feathers service method"),s("OutboundLink")],1),t._v(" so that you are abstracted away from service path (i.e. API prefix) and only refer to it by internal name.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("On the client side this is also used to instantiate the service on first call.")])]),t._v(" "),s("h3",{attrs:{id:"getelementservices-name-backend-only"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getelementservices-name-backend-only"}},[t._v("#")]),t._v(" .getElementServices(name) - backend only")]),t._v(" "),s("p",[t._v("Retrieve all forecast element services related to a forecast model (or all if not provided) instance by name.")]),t._v(" "),s("h3",{attrs:{id:"createservice-name-app-modelspath-servicespath-backend-only"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#createservice-name-app-modelspath-servicespath-backend-only"}},[t._v("#")]),t._v(" .createService(name, app, modelsPath, servicesPath) - backend only")]),t._v(" "),s("p",[t._v("Create a new service attached to the application by name and given a set of directories where to find model/service")]),t._v(" "),s("p",[t._v("This assumes you have created a "),s("em",[t._v("models")]),t._v(" and "),s("em",[t._v("services")]),t._v(" directories containing the required files to declare your service, e.g. your folder/file hierarchy should look like this:")]),t._v(" "),s("ul",[s("li",[s("em",[t._v("index.js")])]),t._v(" "),s("li",[s("em",[t._v("models")]),t._v(" : constains one file per database adapter you'd like to support, e.g.\n"),s("ul",[s("li",[s("em",[t._v("serviceName.model.mongodb.js")]),t._v(" : exporting the data model managed by your service in "),s("a",{attrs:{href:"https://docs.feathersjs.com/api/databases/mongodb.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MongoDB"),s("OutboundLink")],1)])])]),t._v(" "),s("li",[s("em",[t._v("services")]),t._v(" "),s("ul",[s("li",[s("em",[t._v("serviceName")]),t._v(" "),s("ul",[s("li",[s("em",[t._v("serviceName.hooks.js")]),t._v(" : exporting the "),s("a",{attrs:{href:"https://docs.feathersjs.com/api/hooks.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("hooks"),s("OutboundLink")],1),t._v(" of your service,")]),t._v(" "),s("li",[s("em",[t._v("serviceName.filters.js")]),t._v(" : exporting the "),s("a",{attrs:{href:"https://docs.feathersjs.com/api/events.html#event-filtering",target:"_blank",rel:"noopener noreferrer"}},[t._v("filters"),s("OutboundLink")],1),t._v(" of your service,")]),t._v(" "),s("li",[s("em",[t._v("serviceName.service.js")]),t._v(" : exporting the specific mixin associated to your service (optional)")])])])])])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("Only "),s("a",{attrs:{href:"https://docs.feathersjs.com/api/databases/mongodb.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MongoDB"),s("OutboundLink")],1),t._v(" is officially supported right now although we had an experimental attempt with "),s("a",{attrs:{href:"https://github.com/feathersjs/feathers-levelup",target:"_blank",rel:"noopener noreferrer"}},[t._v("LevelUP"),s("OutboundLink")],1),t._v(" as well. Please contact us if you'd like to support more adapters.")])]),t._v(" "),s("h3",{attrs:{id:"createelementservice-forecast-element-app-servicespath-backend-only"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#createelementservice-forecast-element-app-servicespath-backend-only"}},[t._v("#")]),t._v(" .createElementService(forecast, element, app, servicesPath) - backend only")]),t._v(" "),s("p",[t._v("Internally used by "),s("RouterLink",{attrs:{to:"/api/plugin.html"}},[t._v("forecast model plugins")]),t._v(", similar to above but using the built-in forecast element model.")],1),t._v(" "),s("h2",{attrs:{id:"application-hooks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#application-hooks"}},[t._v("#")]),t._v(" Application Hooks")]),t._v(" "),s("p",[t._v("The following "),s("RouterLink",{attrs:{to:"/api/hooks.html"}},[t._v("hooks")]),t._v(" are globally executed on the application:\n"),s("img",{attrs:{src:a(218),alt:"Application hooks"}})],1)])}),[],!1,null,null,null);e.default=r.exports}}]);