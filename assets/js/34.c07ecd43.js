(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{269:function(e,t,a){"use strict";a.r(t);var s=a(2),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"weacast-development"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#weacast-development"}},[e._v("#")]),e._v(" Weacast development")]),e._v(" "),a("p",[e._v("Weacast is powered by the following stack:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://feathersjs.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Feathers"),a("OutboundLink")],1),e._v(" on the backend side (version 2.x)")]),e._v(" "),a("li",[a("a",{attrs:{href:"http://quasar-framework.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Quasar"),a("OutboundLink")],1),e._v(" on the frontend side (version 0.13.x)")])]),e._v(" "),a("p",[e._v("If you are not familiar with those technologies and want to develop for Weacast, in addition to read the dedicated documentation, I recommand reading https://github.com/claustres/quasar-feathers-tutorial. Indeed, Weacast application demo is a template web application initially based on the "),a("a",{attrs:{href:"https://github.com/quasarframework/quasar-wrapper-feathersjs-api",target:"_blank",rel:"noopener noreferrer"}},[e._v("Quasar wrapper for Feathers"),a("OutboundLink")],1),e._v(", while Weacast plugins/modules are "),a("a",{attrs:{href:"https://docs.feathersjs.com/guides/advanced/creating-a-plugin.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Feathers plugins"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"setup-your-environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup-your-environment"}},[e._v("#")]),e._v(" Setup your environment")]),e._v(" "),a("h3",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("h4",{attrs:{id:"install-node-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-node-js"}},[e._v("#")]),e._v(" Install Node.js")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node"),a("OutboundLink")],1),e._v(" is a server platform which runs JavaScript.\nIt's lightweight and efficient.\nIt has the largest ecosystem of open source libraries in the world.")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Default install."),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Specific versions."),a("OutboundLink")],1)])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("In order to be able to switch easily between different versions of Node.js we recommand to use a version manager like "),a("a",{attrs:{href:"https://github.com/tj/n",target:"_blank",rel:"noopener noreferrer"}},[e._v("n"),a("OutboundLink")],1),e._v("/"),a("a",{attrs:{href:"https://github.com/creationix/nvm",target:"_blank",rel:"noopener noreferrer"}},[e._v("nvm"),a("OutboundLink")],1),e._v(" under Linux/Mac or "),a("a",{attrs:{href:"https://github.com/coreybutler/nvm-windows",target:"_blank",rel:"noopener noreferrer"}},[e._v("nvm"),a("OutboundLink")],1),e._v(" under Windows.")])]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Weacast modules are expected to work with Node.js version 7.x")])]),e._v(" "),a("h4",{attrs:{id:"install-git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-git"}},[e._v("#")]),e._v(" Install Git")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("git"),a("OutboundLink")],1),e._v(" is the version control system most frequently used in open source.\nThere are many resources available for installing it.")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.atlassian.com/git/tutorials/install-git#linux",target:"_blank",rel:"noopener noreferrer"}},[e._v("Linux."),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.atlassian.com/git/tutorials/install-git#mac-os-x",target:"_blank",rel:"noopener noreferrer"}},[e._v("macOS."),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.atlassian.com/git/tutorials/install-git#windows",target:"_blank",rel:"noopener noreferrer"}},[e._v("Windows."),a("OutboundLink")],1)])]),e._v(" "),a("h4",{attrs:{id:"install-mongodb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-mongodb"}},[e._v("#")]),e._v(" Install MongoDB")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.mongodb.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mongo"),a("OutboundLink")],1),e._v(" is an open-source, document database designed for ease of development and scaling.")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.mongodb.com/manual/administration/install-on-linux/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Linux."),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/",target:"_blank",rel:"noopener noreferrer"}},[e._v("macOS."),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Windows."),a("OutboundLink")],1)])]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Weacast modules are expected to work with MongoDB version 3.x")])]),e._v(" "),a("h4",{attrs:{id:"install-yarn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-yarn"}},[e._v("#")]),e._v(" Install Yarn")]),e._v(" "),a("p",[e._v("Due to some "),a("a",{attrs:{href:"http://codetunnel.io/npm-5-changes-to-npm-link/",target:"_blank",rel:"noopener noreferrer"}},[e._v("changes"),a("OutboundLink")],1),e._v(" in the way "),a("code",[e._v("npm")]),e._v(" manages linked modules we prefer to use "),a("a",{attrs:{href:"https://yarnpkg.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Yarn"),a("OutboundLink")],1),e._v(" as a package manager.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://yarnpkg.com/en/docs/install",target:"_blank",rel:"noopener noreferrer"}},[e._v("Install Yarn"),a("OutboundLink")],1),e._v(" on your platform.")]),e._v(" "),a("h3",{attrs:{id:"weacast"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#weacast"}},[e._v("#")]),e._v(" Weacast")]),e._v(" "),a("p",[e._v("While it is a WIP and not yet pushed to NPM, or when developing, please use the following process.")]),e._v(" "),a("p",[e._v("First clone all the plugins you need and use "),a("a",{attrs:{href:"https://docs.npmjs.com/cli/link",target:"_blank",rel:"noopener noreferrer"}},[e._v("yarn/npm link"),a("OutboundLink")],1),e._v(" to make them globally available to your Node.js installation.")]),e._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Take care that a top-level plugin might depend on another plugin so you will have to link them together, for instance most forecast model plugins depend on the "),a("code",[e._v("weacast-core")]),e._v(" plugin.")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("// Clone and "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("link")]),e._v(" the plugins\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/weacast/weacast-core.git\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" weacast-core\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("link")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/weacast/weacast-client.git\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" weacast-client\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("link")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/weacast/weacast-arpege.git\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" weacast-arpege\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("link")]),e._v(" weacast-core\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("link")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/weacast/weacast-arome.git\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" weacast-arome\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("link")]),e._v(" weacast-core\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("link")]),e._v(" weacast-arpege\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("link")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/weacast/weacast-probe.git\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" weacast-probe\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("link")]),e._v(" weacast-core\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("link")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n")])])]),a("p",[e._v("Then clone the Weacast API repository and use "),a("a",{attrs:{href:"https://docs.npmjs.com/cli/link",target:"_blank",rel:"noopener noreferrer"}},[e._v("yarn/npm link"),a("OutboundLink")],1),e._v(" to make Node.js pointing to the previously cloned modules instead of those installed by default, e.g. :")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("// Clone and "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("link")]),e._v(" plugins to weacast server\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/weacast/weacast-api.git\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" weacast-api\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("link")]),e._v(" weacast-core\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("link")]),e._v(" weacast-arpege\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("link")]),e._v(" weacast-arome\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("link")]),e._v(" weacast-probe\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n")])])]),a("p",[e._v("Then clone the Weacast demo app repository and use "),a("a",{attrs:{href:"https://docs.npmjs.com/cli/link",target:"_blank",rel:"noopener noreferrer"}},[e._v("yarn/npm link"),a("OutboundLink")],1),e._v(" to make Node.js pointing to the previously cloned client module instead of the one installed by npm, e.g. :")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("// Clone and "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("link")]),e._v(" client to weacast app\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/weacast/weacast.git\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" weacast\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("link")]),e._v(" weacast-client\n")])])]),a("h2",{attrs:{id:"develop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#develop"}},[e._v("#")]),e._v(" Develop")]),e._v(" "),a("h3",{attrs:{id:"weacast-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#weacast-2"}},[e._v("#")]),e._v(" Weacast")]),e._v(" "),a("h4",{attrs:{id:"running-for-development"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-for-development"}},[e._v("#")]),e._v(" Running for development")]),e._v(" "),a("p",[e._v("Run the the server-side Feathers app (from "),a("code",[e._v("weacast-api")]),e._v(" root project folder): "),a("code",[e._v("$ npm run dev")])]),e._v(" "),a("p",[e._v("Then run the frontend app (from "),a("code",[e._v("weacast")]),e._v(" root project folder): "),a("code",[e._v("$ npm run dev")])]),e._v(" "),a("p",[e._v("Then point your browser to "),a("a",{attrs:{href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"}},[e._v("localhost:8080"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"building-for-production"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building-for-production"}},[e._v("#")]),e._v(" Building for production")]),e._v(" "),a("p",[e._v("Build the server-side Feathers app (from "),a("code",[e._v("weacast-api")]),e._v(" root project folder): "),a("code",[e._v("$ npm run build")])]),e._v(" "),a("p",[e._v("Then build the frontend app (from "),a("code",[e._v("weacast")]),e._v(" root project folder): "),a("code",[e._v("$ npm run build")]),e._v(". This generates a "),a("code",[e._v("dist")]),e._v(" folder to be copied into the "),a("code",[e._v("weacast-api")]),e._v(" root project folder.")]),e._v(" "),a("h4",{attrs:{id:"running-in-production"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-in-production"}},[e._v("#")]),e._v(" Running in production")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("Make sure you built your app first")])]),e._v(" "),a("p",[e._v("Run the server-side Feathers app (from "),a("code",[e._v("weacast-api")]),e._v(" root project folder), this will also serve the frontend app : "),a("code",[e._v("$ npm run prod")])]),e._v(" "),a("p",[e._v("Then point your browser to "),a("a",{attrs:{href:"http://localhost:8081",target:"_blank",rel:"noopener noreferrer"}},[e._v("localhost:8081"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"running-test"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-test"}},[e._v("#")]),e._v(" Running test")]),e._v(" "),a("p",[e._v("Run the server-side tests (from "),a("code",[e._v("weacast-api")]),e._v(" root project folder): "),a("code",[e._v("$ npm run test")]),e._v("\nThis will lint and fix issues in the code according to "),a("a",{attrs:{href:"https://github.com/feross/standard",target:"_blank",rel:"noopener noreferrer"}},[e._v("JS standard"),a("OutboundLink")],1),e._v(", then execute tests using "),a("a",{attrs:{href:"https://mochajs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mocha"),a("OutboundLink")],1),e._v(" and compute code coverage using "),a("a",{attrs:{href:"https://istanbul.js.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Istanbul"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("We are looking for integrating frontend and end-to-end tests, please contribute !")])]),e._v(" "),a("h4",{attrs:{id:"debug"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#debug"}},[e._v("#")]),e._v(" Debug")]),e._v(" "),a("p",[e._v("Use "),a("a",{attrs:{href:"https://medium.com/@paul_irish/debugging-node-js-nightlies-with-chrome-devtools-7c4a1b95ae27",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chrome DevTools"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"testing-docker-image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#testing-docker-image"}},[e._v("#")]),e._v(" Testing Docker image")]),e._v(" "),a("p",[e._v("Because Weacast web app is also released as a Docker image you can build it like this in development mode (i.e. with all modules linked to their "),a("code",[e._v("master")]),e._v(" branch version):")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("docker build -f dockerfile.dev -t weacast/weacast:dev "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n")])])]),a("p",[e._v("Then test it like it:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d\n")])])]),a("p",[e._v("Then release it if you'd like as current dev version to share progress with others:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("docker login\ndocker push weacast/weacast:dev\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("When building the image all modules are retrieved from their respective repository ("),a("code",[e._v("master")]),e._v(" branch), only the local source code of the web app is pushed into the image.")]),e._v(" "),a("p",[e._v("This requires you to have a DockerHub account and be a team member of the Weacast organization, if you'd like to become a maintainer please tell us")])]),e._v(" "),a("h3",{attrs:{id:"plugins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugins"}},[e._v("#")]),e._v(" Plugins")]),e._v(" "),a("p",[e._v("Weacast plugins are "),a("a",{attrs:{href:"https://docs.feathersjs.com/guides/advanced/creating-a-plugin.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Feathers plugins"),a("OutboundLink")],1),e._v(", so you will find most of the required information in the linked Feathers documentation. Typically for development you will do the following for each required plugins so that the module is re-compiled on each file change:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" weacast-arpege\nyarn/npm "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("watch")]),e._v("\n")])])]),a("h4",{attrs:{id:"running-test-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-test-2"}},[e._v("#")]),e._v(" Running test")]),e._v(" "),a("p",[e._v("To run the module tests including linting and coverage : "),a("code",[e._v("$ npm run test")])]),e._v(" "),a("p",[e._v("To speed-up things simply run the tests with: "),a("code",[e._v("$ npm run mocha")])]),e._v(" "),a("p",[e._v("To speed-up things even more run a single test suite with: "),a("code",[e._v('$ npm run mocha -- --grep "test suite name"')])]),e._v(" "),a("h2",{attrs:{id:"publish"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#publish"}},[e._v("#")]),e._v(" Publish")]),e._v(" "),a("h3",{attrs:{id:"prerequisites-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites-2"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("h4",{attrs:{id:"install-change-log-generator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-change-log-generator"}},[e._v("#")]),e._v(" Install Change log generator")]),e._v(" "),a("p",[e._v("This "),a("a",{attrs:{href:"https://github.com/skywinder/github-changelog-generator",target:"_blank",rel:"noopener noreferrer"}},[e._v("gem"),a("OutboundLink")],1),e._v(" generates a change log file based on "),a("strong",[e._v("tags")]),e._v(", "),a("strong",[e._v("issues")]),e._v(" and merged "),a("strong",[e._v("pull requests")]),e._v(" (and splits them into separate lists according to labels) from :octocat: GitHub Issue Tracker. This requires you to install (e.g. for Windows) "),a("a",{attrs:{href:"http://rubyinstaller.org/downloads/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ruby"),a("OutboundLink")],1),e._v(" and its "),a("a",{attrs:{href:"https://github.com/oneclick/rubyinstaller/wiki/Development-Kit",target:"_blank",rel:"noopener noreferrer"}},[e._v("DevKit"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"weacast-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#weacast-3"}},[e._v("#")]),e._v(" Weacast")]),e._v(" "),a("p",[e._v("The same process applies when releasing a patch, minor or major version, i.e. the following tasks are done:")]),e._v(" "),a("ul",[a("li",[e._v("increase the package version number in the "),a("strong",[e._v("package.json")]),e._v(" file (frontend and backend API)")]),e._v(" "),a("li",[e._v("create a tag accordingly in the git repository and push it")]),e._v(" "),a("li",[e._v("generates the changelog in the git repository and push it")])]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Before you publish a release take care of updating the version of all dependent plugins to the latest version published, for example  perform "),a("code",[e._v("yarn upgrade weacast-core weacast-arpege weacast-arome weacast-probe")])])]),e._v(" "),a("p",[e._v("Depending on the release type the following command will do the job (where type is either "),a("code",[e._v("patch")]),e._v(", "),a("code",[e._v("minor")]),e._v(", "),a("code",[e._v("major")]),e._v("):")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run release:type\n")])])]),a("p",[e._v("Because Weacast demo app is also released as a Docker image you can build it manually like this:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("docker build -t weacast/weacast "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n")])])]),a("p",[e._v("Then release it as latest version:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("docker login\ndocker push weacast/weacast\n")])])]),a("p",[e._v("And tag it ("),a("code",[e._v("version_tag")]),e._v(" being the current version number like "),a("code",[e._v("1.1.2")]),e._v(")")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("docker tag weacast/weacast weacast/weacast:version_tag\ndocker push weacast/weacast:version_tag\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("This requires you to have a DockerHub account and be a team member of the Weacast organization, if you'd like to become a maintainer please tell us")])]),e._v(" "),a("p",[a("strong",[e._v("However, our Travis CI should build he image for you as you push the tag of the release")])]),e._v(" "),a("p",[e._v("When testing in development you can build a Docker image that will automatically use the master branch of all modules like this:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("docker build -t weacast/weacast:dev -f dockerfile.dev "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n")])])]),a("p",[e._v("Then release it as latest dev version:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("docker login\ndocker push weacast/weacast:dev\n")])])]),a("h3",{attrs:{id:"plugins-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugins-2"}},[e._v("#")]),e._v(" Plugins")]),e._v(" "),a("p",[e._v("The same process applies as for the web app but in addition the module is published on the NPM registry.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("This requires you to have a NPM and GitHub account and be a team member of the Weacast organization, if you'd like to become a maintainer please tell us.")])]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Before you publish a plugin take care of updating the version of your dependent plugins to the latest version published, for example  perform "),a("code",[e._v("yarn upgrade weacast-core")]),e._v(" for a plugin depending on the core plugin before publishing it.")])])])}),[],!1,null,null,null);t.default=n.exports}}]);