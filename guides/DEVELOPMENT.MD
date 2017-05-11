Weacast is powered by the following stack:
* [Feathers](https://feathersjs.com/) on the backend side
* [Quasar](http://quasar-framework.org/) on the frontend side

If you are not familiar with those technologies and want to develop for Weacast, in addition to read the dedicated documentation, I recommand reading https://github.com/claustres/quasar-feathers-tutorial. Indeed, Weacast itself is a template web application based on the [Quasar wrapper for Feathers](https://github.com/quasarframework/quasar-wrapper-feathersjs-api), while Weacast plugins are [Feathers plugins](https://docs.feathersjs.com/guides/advanced/creating-a-plugin.html). 

## Setup your development environment

### Prerequisites

#### Install Node.js

[Node](https://nodejs.org/en/) is a server platform which runs JavaScript.
It's lightweight and efficient.
It has the largest ecosystem of open source libraries in the world.

- [Default install.](https://nodejs.org/en/)
- [Specific versions.](https://nodejs.org/en/download/)

#### Install Git

[git](https://git-scm.com/) is the version control system most frequently used in open source.
There are many resources available for installing it.

- [Linux.](https://www.atlassian.com/git/tutorials/install-git#linux)
- [macOS.](https://www.atlassian.com/git/tutorials/install-git#mac-os-x)
- [Windows.](https://www.atlassian.com/git/tutorials/install-git#windows)

#### Install MongoDB

[Mongo](https://www.mongodb.com/) is an open-source, document database designed for ease of development and scaling.

- [Linux.](https://docs.mongodb.com/manual/administration/install-on-linux/)
- [macOS.](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)
- [Windows.](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)

#### Install Quasar CLI

Install the Quasar CLI : `$ npm install -g quasar-cli`

### Weacast

While it is a WIP and not yet pushed to NPM, or when developing, please use the following process.

First clone all the plugins you need and use [npm link](https://docs.npmjs.com/cli/link) to make them globally available to your Node.js installation:

```bash
// Clone and link the plugins
git clone https://github.com/weacast/weacast-core.git
cd weacast-core
npm link

git clone https://github.com/weacast/weacast-arpege.git
cd weacast-arpege
npm link

git clone https://github.com/weacast/weacast-arome.git
cd weacast-arome
npm link

...
```

Then clone the main Weacast repository and use [npm link](https://docs.npmjs.com/cli/link) to make Node.js pointing to the previously cloned modules instead of those installed by npm, e.g. :
```bash
// Clone and link plugins to weacast server
git clone https://github.com/weacast/weacast.git
cd weacast
cd api
npm link weacast-core
npm link weacast-arpege
npm link weacast-arome
...
```

** Take care that a top-level plugin might depend on another plugin so you will have to link them together, for instance most forecast model plugins depend on the weacast-core plugin.

## Run your development environment

### Weacast server

The default Weacast server is a template web application based on the [Quasar wrapper for Feathers](https://github.com/quasarframework/quasar-wrapper-feathersjs-api).

#### Running for development
Run the frontend Quasar app (from root project folder): `$ quasar dev`

Then from the backend `api` folder run the server-side Feathers app: `$ npm run dev`

Then point your browser to [localhost:8080](http://localhost:8080).

#### Building for production
Build the frontend Quasar app (from root project folder): `$ quasar build`.

Then from the backend `api` folder build the server-side Feathers app: `$ npm run build`

#### Running in production
**Make sure you built your app first**

From the backend `api` folder run the server-side Feathers app, this will also serve the frontend Quasar app : `$ npm run prod`

Then point your browser to [localhost:8081](http://localhost:8081).

### Plugins

Weacast plugins are [Feathers plugins](https://docs.feathersjs.com/guides/advanced/creating-a-plugin.html), so you will find most of the required information in the linked Feathers documentation. Typically for development you will do the following for each required plugins
```bash
cd weacast-arpege
npm install
npm run watch
```
