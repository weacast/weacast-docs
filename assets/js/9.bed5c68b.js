(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{384:function(e,t,a){e.exports=a.p+"assets/img/global-architecture.c9eb93bc.png"},385:function(e,t,a){e.exports=a.p+"assets/img/global-architecture-v2.515c9d8b.png"},400:function(e,t,a){"use strict";a.r(t);var r=a(27),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"global-architecture"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#global-architecture"}},[e._v("#")]),e._v(" Global architecture")]),e._v(" "),r("p",[e._v("The typical global architecture and the underlying technologies of Weacast are summarized in the following diagram:")]),e._v(" "),r("p",[r("img",{attrs:{src:a(384),alt:"Global architecture"}})]),e._v(" "),r("p",[e._v("Typically, the Docker image of our "),r("a",{attrs:{href:"https://hub.docker.com/r/weacast/weacast/",target:"_blank",rel:"noopener noreferrer"}},[e._v("demo app"),r("OutboundLink")],1),e._v(" is actually the "),r("a",{attrs:{href:"https://github.com/weacast/weacast-api",target:"_blank",rel:"noopener noreferrer"}},[e._v("backend API module"),r("OutboundLink")],1),e._v(", configured with local "),r("RouterLink",{attrs:{to:"/api/plugin.html"}},[e._v("forecast model plugins")]),e._v(" and serving the "),r("a",{attrs:{href:"https://github.com/weacast/weacast",target:"_blank",rel:"noopener noreferrer"}},[e._v("client demo app"),r("OutboundLink")],1),e._v(".")],1),e._v(" "),r("h2",{attrs:{id:"architecture-at-scale"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#architecture-at-scale"}},[e._v("#")]),e._v(" Architecture at scale")]),e._v(" "),r("p",[e._v("Although the typical architecture presented previously can be deployed in a single-server environment Weacast has been developed as a loosely coupled set of modules to prevent it being a "),r("a",{attrs:{href:"http://whatis.techtarget.com/definition/monolithic-architecture",target:"_blank",rel:"noopener noreferrer"}},[e._v("monolithic piece of software"),r("OutboundLink")],1),e._v(". The built-in "),r("a",{attrs:{href:"https://docs.feathersjs.com/guides/about/philosophy.html#services",target:"_blank",rel:"noopener noreferrer"}},[e._v("service layer"),r("OutboundLink")],1),e._v(" helps decoupling the business logic from how it is being accessed based on a "),r("a",{attrs:{href:"https://docs.feathersjs.com/guides/about/philosophy.html#uniform-interfaces",target:"_blank",rel:"noopener noreferrer"}},[e._v("simple and unambiguous interface"),r("OutboundLink")],1),e._v(". Weacast can thus be deployed in a "),r("a",{attrs:{href:"http://searchmicroservices.techtarget.com/definition/microservices",target:"_blank",rel:"noopener noreferrer"}},[e._v("microservice architectural style"),r("OutboundLink")],1),e._v(", which is typically used to provide high availability. The idea is to deploy different Weacast instances on different "),r("em",[e._v("logical hosts")]),e._v(" (can be physical machines as well as containers or virtual machines) each running a different forecast model or the probe plugin for instance. However, you will have to face some "),r("a",{attrs:{href:"https://docs.feathersjs.com/guides/advanced/scaling.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("scaling configuration issues"),r("OutboundLink")],1),e._v(" first. You also have to setup the underlying logical infrastructure. To achieve high availability, different strategies may be used.")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("It is recommanded to have a single source of truth (SSOT) for your data (i.e. a single database), simplifying authentication, which requires you to setup a "),r("a",{attrs:{href:"https://docs.mongodb.com/manual/tutorial/deploy-replica-set/",target:"_blank",rel:"noopener noreferrer"}},[e._v("MongoDB replica set"),r("OutboundLink")],1),e._v(" at scale and configure the DB URL "),r("a",{attrs:{href:"http://mongodb.github.io/node-mongodb-native/2.0/reference/connecting/connection-settings/",target:"_blank",rel:"noopener noreferrer"}},[e._v("accordingly"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("h3",{attrs:{id:"monolithic-application"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#monolithic-application"}},[e._v("#")]),e._v(" Monolithic application")]),e._v(" "),r("p",[e._v("This is the easiest strategy, you can rely on Cloud-ready solutions like "),r("a",{attrs:{href:"https://kalisio.github.io/kaabah/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kaabah"),r("OutboundLink")],1),e._v(" to replicate and load-balance the different instances of your application and simply use "),r("a",{attrs:{href:"https://github.com/feathersjs-ecosystem/feathers-sync",target:"_blank",rel:"noopener noreferrer"}},[e._v("feathers-sync"),r("OutboundLink")],1),e._v(" to synchronize service events.")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("This approach is something between the true monolith and the true microservices architecture, i.e. you scale your entire application but not its underlying services according to their workload.")])]),e._v(" "),r("h3",{attrs:{id:"distributed-application"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#distributed-application"}},[e._v("#")]),e._v(" Distributed application")]),e._v(" "),r("p",[e._v("You can split up your Weacast API manually on a per-responsibility basis (e.g. each forecast model on a dedicated instance) and just communicate with each other through Feathers clients using all the infrastructure that is already in place. You could also deploy a frontend application serving as an "),r("a",{attrs:{href:"http://microservices.io/patterns/apigateway.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("API gateway"),r("OutboundLink")],1),e._v(". To configure the proxy rules, edit the "),r("code",[e._v("proxyTable")]),e._v(" option in your configuration. The frontend server is using "),r("a",{attrs:{href:"https://github.com/chimurai/http-proxy-middleware",target:"_blank",rel:"noopener noreferrer"}},[e._v("http-proxy-middleware"),r("OutboundLink")],1),e._v(" for proxying, so you should refer to its docs for a detailed usage but here's a simple example:")]),e._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// config/default.js")]),e._v("\nmodule"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("exports "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// ...")]),e._v("\n  proxyTable"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// proxy all requests starting with /api/service")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'/api/service'")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      target"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'http://my.service.com'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      changeOrigin"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      pathRewrite"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'^/api/service'")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'/api'")]),e._v("\n      "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),r("p",[e._v("The above example will proxy the request "),r("code",[e._v("/api/service/1")]),e._v(" to "),r("code",[e._v("http://my.service.com/api/1")]),e._v(".")]),e._v(" "),r("p",[e._v("However, all of this requires manual work, creates a tight coupling with your underlying infrastructure and will not allow auto-scaling unless you have some discovery mechanism. You can make each instance automatically aware of others instances to distribute services and related events using "),r("a",{attrs:{href:"https://github.com/kalisio/feathers-distributed",target:"_blank",rel:"noopener noreferrer"}},[e._v("feathers-distributed"),r("OutboundLink")],1),e._v(". This is the reason why the "),r("a",{attrs:{href:"https://github.com/weacast/weacast-api",target:"_blank",rel:"noopener noreferrer"}},[e._v("weacast-api"),r("OutboundLink")],1),e._v(" module provides you with a ready-to-go microservice backend to expose the services you'd like to using "),r("a",{attrs:{href:"https://github.com/kalisio/feathers-distributed",target:"_blank",rel:"noopener noreferrer"}},[e._v("feathers-distributed"),r("OutboundLink")],1),e._v(" by default.")]),e._v(" "),r("h3",{attrs:{id:"distributed-forecast-data-processing"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#distributed-forecast-data-processing"}},[e._v("#")]),e._v(" Distributed forecast data processing")]),e._v(" "),r("p",[e._v("Because the most consuming part of a Weacast application is usually the gathering and processing of forecast model data, the "),r("a",{attrs:{href:"https://github.com/weacast/weacast-loader",target:"_blank",rel:"noopener noreferrer"}},[e._v("weacast-loader"),r("OutboundLink")],1),e._v(" module provides you with a set of download services available as Docker containers out-of-the-box. You can rely on Cloud-ready solutions like "),r("a",{attrs:{href:"https://kalisio.github.io/kaabah/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kaabah"),r("OutboundLink")],1),e._v(" to easily distribute/replicate these services on your cluster. Your Weacast application server can then only focus on forecast data retrieval for clients and can be scaled if necessary like a monolith application. The typical global architecture of such an approach is summarized in the following diagram.")]),e._v(" "),r("p",[r("img",{attrs:{src:a(385),alt:"Global architecture"}})])])}),[],!1,null,null,null);t.default=s.exports}}]);