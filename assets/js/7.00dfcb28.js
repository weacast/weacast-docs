(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{176:function(t,e,a){t.exports=a.p+"assets/img/application-hooks.17778c0b.svg"},215:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("Weacast "),s("a",{attrs:{href:"https://github.com/weacast/weacast-core",target:"_blank",rel:"noopener noreferrer"}},[t._v("core module"),s("OutboundLink")],1),t._v(" provides a helper to quickly initialize what is required for your "),s("a",{attrs:{href:"https://docs.feathersjs.com/api/application.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("server application"),s("OutboundLink")],1),t._v(". The core module provides the ability to initialize a new Weacast application instance, attach it to the configured database and setup authentication:")]),t._v(" "),t._m(2),t._m(3),t._v(" "),s("p",[t._v("Weacast includes a built-in local authentication strategy based on the "),s("a",{attrs:{href:"https://docs.feathersjs.com/api/authentication/server.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Feathers authentication module"),s("OutboundLink")],1),t._v(". It also automatically configures the "),s("a",{attrs:{href:"https://docs.feathersjs.com/api/authentication/oauth2.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Feathers OAuth2 plugin"),s("OutboundLink")],1),t._v(" for "),s("a",{attrs:{href:"https://github.com/jaredhanson/passport-github",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),s("OutboundLink")],1),t._v(", "),s("a",{attrs:{href:"https://github.com/jaredhanson/passport-google-oauth2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google"),s("OutboundLink")],1),t._v(", "),s("a",{attrs:{href:"https://github.com/kalisio/passport-openidconnect",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenID Connect"),s("OutboundLink")],1),t._v(" and "),s("a",{attrs:{href:"https://github.com/bainweb/passport-oauth2-cognito",target:"_blank",rel:"noopener noreferrer"}},[t._v("Congnito"),s("OutboundLink")],1),t._v(" if you provide them in your "),s("router-link",{attrs:{to:"./../guides/basics.html#configuring"}},[t._v("configuration file")]),t._v(".")],1),t._v(" "),s("p",[t._v("You can read "),s("a",{attrs:{href:"https://blog.feathersjs.com/how-to-setup-oauth-flow-with-featherjs-522bdecb10a8",target:"_blank",rel:"noopener noreferrer"}},[t._v("this article"),s("OutboundLink")],1),t._v(" to learn more about the underlying process.")]),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("Adding the right configuration like below you can easily Weacast run under "),s("a",{attrs:{href:"https://docs.feathersjs.com/api/express.html#https",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTPS"),s("OutboundLink")],1),t._v(":")]),t._v(" "),t._m(5),t._m(6),t._v(" "),s("p",[t._v("Weacast "),s("a",{attrs:{href:"https://github.com/weacast/weacast-client",target:"_blank",rel:"noopener noreferrer"}},[t._v("client module"),s("OutboundLink")],1),t._v(" provides a helper to quickly initialize what is required for your "),s("a",{attrs:{href:"https://docs.feathersjs.com/api/client.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("client application"),s("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),s("p",[t._v("Retrieve the given service by name, should replace "),s("a",{attrs:{href:"https://docs.feathersjs.com/api/application.html#servicepath",target:"_blank",rel:"noopener noreferrer"}},[t._v("Feathers service method"),s("OutboundLink")],1),t._v(" so that you are abstracted away from service path (i.e. API prefix) and only refer to it by internal name.")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),s("p",[t._v("Retrieve all forecast element services related to a forecast model (or all if not provided) instance by name.")]),t._v(" "),t._m(12),t._v(" "),s("p",[t._v("Create a new service attached to the application by name and given a set of directories where to find model/service")]),t._v(" "),t._m(13),t._v(" "),s("ul",[t._m(14),t._v(" "),s("li",[s("em",[t._v("models")]),t._v(" : constains one file per database adapter you'd like to support, e.g.\n"),s("ul",[s("li",[s("em",[t._v("serviceName.model.mongodb.js")]),t._v(" : exporting the data model managed by your service in "),s("a",{attrs:{href:"https://docs.feathersjs.com/api/databases/mongodb.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MongoDB"),s("OutboundLink")],1)])])]),t._v(" "),s("li",[s("em",[t._v("services")]),t._v(" "),s("ul",[s("li",[s("em",[t._v("serviceName")]),t._v(" "),s("ul",[s("li",[s("em",[t._v("serviceName.hooks.js")]),t._v(" : exporting the "),s("a",{attrs:{href:"https://docs.feathersjs.com/api/hooks.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("hooks"),s("OutboundLink")],1),t._v(" of your service,")]),t._v(" "),s("li",[s("em",[t._v("serviceName.filters.js")]),t._v(" : exporting the "),s("a",{attrs:{href:"https://docs.feathersjs.com/api/events.html#event-filtering",target:"_blank",rel:"noopener noreferrer"}},[t._v("filters"),s("OutboundLink")],1),t._v(" of your service,")]),t._v(" "),t._m(15)])])])])]),t._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("Only "),s("a",{attrs:{href:"https://docs.feathersjs.com/api/databases/mongodb.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MongoDB"),s("OutboundLink")],1),t._v(" is officially supported right now although we had an experimental attempt with "),s("a",{attrs:{href:"https://github.com/feathersjs/feathers-levelup",target:"_blank",rel:"noopener noreferrer"}},[t._v("LevelUP"),s("OutboundLink")],1),t._v(" as well. Please contact us if you'd like to support more adapters.")])]),t._v(" "),t._m(16),t._v(" "),s("p",[t._v("Internally used by "),s("router-link",{attrs:{to:"./plugin.html"}},[t._v("forecast model plugins")]),t._v(", similar to above but using the built-in forecast element model.")],1),t._v(" "),t._m(17),t._v(" "),s("p",[t._v("The following "),s("router-link",{attrs:{to:"./hooks.html"}},[t._v("hooks")]),t._v(" are globally executed on the application:\n"),s("img",{attrs:{src:a(176),alt:"Application hooks"}})],1)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"application"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#application","aria-hidden":"true"}},[this._v("#")]),this._v(" Application")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"backend-setup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#backend-setup","aria-hidden":"true"}},[this._v("#")]),this._v(" Backend setup")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" weacast "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'weacast-core'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Initialize app")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" app "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("weacast")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Connect to DB")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("connect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"authentication"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#authentication","aria-hidden":"true"}},[this._v("#")]),this._v(" Authentication")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"https-support"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#https-support","aria-hidden":"true"}},[this._v("#")]),this._v(" HTTPS support")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'server.key'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  cert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'server.crt'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTTPS_PORT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8084")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"client-setup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#client-setup","aria-hidden":"true"}},[this._v("#")]),this._v(" Client setup")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" weacast "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'weacast-client'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Initialize API wrapper")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" api "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("weacast")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Retrieve a given service")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" probes "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getService")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'probes'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"application-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#application-api","aria-hidden":"true"}},[this._v("#")]),this._v(" Application API")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"getservice-name-backend-client"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getservice-name-backend-client","aria-hidden":"true"}},[this._v("#")]),this._v(" .getService(name) - backend/client")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),e("p",[this._v("On the client side this is also used to instantiate the service on first call.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"getelementservices-name-backend-only"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getelementservices-name-backend-only","aria-hidden":"true"}},[this._v("#")]),this._v(" .getElementServices(name) - backend only")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"createservice-name-app-modelspath-servicespath-backend-only"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#createservice-name-app-modelspath-servicespath-backend-only","aria-hidden":"true"}},[this._v("#")]),this._v(" .createService(name, app, modelsPath, servicesPath) - backend only")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This assumes you have created a "),e("em",[this._v("models")]),this._v(" and "),e("em",[this._v("services")]),this._v(" directories containing the required files to declare your service, e.g. your folder/file hierarchy should look like this:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("em",[this._v("index.js")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("em",[this._v("serviceName.service.js")]),this._v(" : exporting the specific mixin associated to your service (optional)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"createelementservice-forecast-element-app-servicespath-backend-only"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#createelementservice-forecast-element-app-servicespath-backend-only","aria-hidden":"true"}},[this._v("#")]),this._v(" .createElementService(forecast, element, app, servicesPath) - backend only")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"application-hooks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#application-hooks","aria-hidden":"true"}},[this._v("#")]),this._v(" Application Hooks")])}],!1,null,null,null);r.options.__file="application.md";e.default=r.exports}}]);