# Data model-oriented view of the architecture

> According to the [Feathers philosophy](https://docs.feathersjs.com/guides/about/philosophy.html) each data model is manipulated using a [service interface](https://docs.feathersjs.com/api/services.html) to perform [CRUD operations](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) of the [persistence layer](https://docs.feathersjs.com/api/databases/common.html). So this data model-oriented view is a service-oriented view in the same manner.

Because data models internally rely on [JSON](http://www.json.org/) they are by nature hierarchical. In the following diagrams each nested JSON object is represented as a smaller *bubble* in a bigger *bubble* (the nesting/parent object), the data model instance being the root JSON object or the *biggest* bubble. The name of the bubble beign the name of the nesting object property owing the nested object.

## Forecast data model

The properties of a forecast model instance is described by the following data model:

![Forecast data model](https://cdn.rawgit.com/weacast/weacast-docs/61f0fdd282249196857204d68ba44ada046bd7bf/images/Forecast%20Data%20Model%20Diagram.svg)

This data model is instanciated from the [configuration](https://weacast.gitbooks.io/weacast-docs/guides/BASICS.html#configuring) and manipulated through the [Forecast model API](https://weacast.gitbooks.io/weacast-docs/api/FORECAST.html).

## Element data model

The properties of a forecast element is described by the following data model:

![Element data model](https://cdn.rawgit.com/weacast/weacast-docs/61f0fdd282249196857204d68ba44ada046bd7bf/images/Element%20Data%20Model%20Diagram.svg)

This data model is instanciated when forecast data are gathered by [Forecast model plugins](https://weacast.gitbooks.io/weacast-docs/api/PLUGIN.html) and manipulated through the [Forecast element API](https://weacast.gitbooks.io/weacast-docs/api/ELEMENT.html).

## Probe data model

The properties of a probe object is described by the following data model:

![Probe data model](https://cdn.rawgit.com/weacast/weacast-docs/2724c914bb95d9167dd460b800ff1186dd3b31cb/images/Probe%20Data%20Model%20Diagram.svg)

This data model is instanciated when forecast data are asked to be probed by the [Probe plugin](https://weacast.gitbooks.io/weacast-docs/api/PROBE.html) and manipulated through the [Probes API](https://weacast.gitbooks.io/weacast-docs/api/PROBE.html#probes-api).

## Probe result data model

The properties of a probe result object is described by the following data model:

![Probe data model](https://cdn.rawgit.com/weacast/weacast-docs/3aa40aced838a266fac5646b21e4b64f05a28d3a/images/Probe%20Result%20Data%20Model%20Diagram.svg)

This data model is instanciated when forecast data are probed by the [Probe plugin](https://weacast.gitbooks.io/weacast-docs/api/PROBE.html) and manipulated through the [Probe results API](https://weacast.gitbooks.io/weacast-docs/api/PROBE.html#probe-results-api).

