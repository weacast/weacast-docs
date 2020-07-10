(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{404:function(e,a,t){"use strict";t.r(a);var r=t(27),s=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"forecast-data-loaders"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#forecast-data-loaders"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://github.com/weacast/weacast-loader",target:"_blank",rel:"noopener noreferrer"}},[e._v("Forecast data loaders"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("RouterLink",{attrs:{to:"/api/plugin.html"}},[e._v("Forecast model plugins")]),e._v(" are modules that need to be either integrated in a monolithic Weacast application or deployed as independent micro-service like applications to be interconnected, see the "),t("RouterLink",{attrs:{to:"/architecture/global-architecture.html#architecture-at-scale"}},[e._v("architecture section")]),e._v(".")],1),e._v(" "),t("p",[e._v("Because the most consuming part of a Weacast application is usually the gathering and processing of forecast model data, the "),t("a",{attrs:{href:"https://github.com/weacast/weacast-loader",target:"_blank",rel:"noopener noreferrer"}},[e._v("weacast-loader"),t("OutboundLink")],1),e._v(" module provides you with a set of download services available as Docker containers out-of-the-box. These services perform the same data processing workflow than the "),t("RouterLink",{attrs:{to:"/api/plugin.html#arpege"}},[e._v("ARPEGE")]),e._v(", "),t("RouterLink",{attrs:{to:"/api/plugin.html#arome"}},[e._v("AROME")]),e._v(" and "),t("RouterLink",{attrs:{to:"/api/plugin.html#gfs"}},[e._v("GFS")]),e._v(" plugins, based on "),t("a",{attrs:{href:"https://kalisio.github.io/krawler/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Krawler"),t("OutboundLink")],1),e._v(". This means that your Weacast application doesn't need to integrate these plugins anymore, the running download services will feed the database as usual in the background.")],1),e._v(" "),t("p",[e._v("First you need to build the Docker containers containing the different configurations of your ARPEGE, AROME and GFS services:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Manually")]),e._v("\ndocker build -t weacast/weacast-arpege-world -f dockerfile.arpege-world "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\ndocker build -t weacast/weacast-gfs-world -f dockerfile.gfs-world "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Using Docker compose file")]),e._v("\ndocker-compose build weacast-arpege-world weacast-gfs-world "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n")])])]),t("p",[e._v("Then you have to run it on your infrastructure:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Stop/remove previous instances if any")]),e._v("\ndocker-compose stop weacast-arpege-world weacast-gfs-world "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\ndocker-compose "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" weacast-arpege-world weacast-gfs-world "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Launch new ones")]),e._v("\ndocker-compose up -d weacast-arpege-world weacast-gfs-world "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n")])])]),t("p",[e._v("The actual download services are built from generic Docker images containing required dependencies and functions used to generate a "),t("a",{attrs:{href:"https://kalisio.github.io/krawler/how-to-use-it/api.html#external-api",target:"_blank",rel:"noopener noreferrer"}},[e._v("Krawler download job"),t("OutboundLink")],1),e._v(" tailored to your forecast model and elements: "),t("a",{attrs:{href:"https://hub.docker.com/r/weacast/weacast-gfs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("weacast-gfs"),t("OutboundLink")],1),e._v(" and "),t("a",{attrs:{href:"https://hub.docker.com/r/weacast/weacast-arpege/",target:"_blank",rel:"noopener noreferrer"}},[e._v("weacast-arpege"),t("OutboundLink")],1),e._v(" (which also covers "),t("a",{attrs:{href:"https://hub.docker.com/r/weacast/weacast-arome/",target:"_blank",rel:"noopener noreferrer"}},[e._v("weacast-arome"),t("OutboundLink")],1),e._v(" because the interface is similar).")])])}),[],!1,null,null,null);a.default=s.exports}}]);