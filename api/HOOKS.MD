# Hooks

Weacast [core module](https://github.com/weacast/weacast-core) and [client module](https://github.com/weacast/weacast-client) provides a collection of common [hooks](https://docs.feathersjs.com/api/hooks.html) to be used by plugins or [client applications](https://docs.feathersjs.com/api/client.html). They also rely on [Feathers common hooks](https://docs.feathersjs.com/api/hooks-common.html).

> [Hooks](https://docs.feathersjs.com/api/hooks.html) are the main way to introduce business logic into applications and plugins so we recommand to understand them well first before reading this.

## Data model management [source](https://github.com/weacast/weacast-core/blob/master/src/hooks/marshall.js)

### .marshall(hook)

Converts from server side types (e.g. moment dates) to basic JS types, which is usually required when writing to the database.

### .unmarshall(hook)

Converts back to server side types (e.g. moment dates) from basic JS types, which is usually required when reading from the database.

## Query management [source](https://github.com/weacast/weacast-core/blob/master/src/hooks/query.js)

### .marshallQuery(hook)

Converts from client/server side types (e.g. strings or moment dates) to basic JS types, which is usually required when querying the database.

### .marshallComparisonQuery(hook)

Converts from client/server side comparison types (e.g. numbers) to basic JS types, which is usually required when querying the database. Applies to `$lt`, `$lte`, `$gt` and `$gte` operators.

### .marshallSpatialQuery(hook)

Converts from client/server side spatial types (e.g. coordinates or numbers) to basic JS types, which is usually required when querying the database. Applies to [MongoDB geospatial operators](https://docs.mongodb.com/manual/reference/operator/query-geospatial/).

### .processForecastTime(hook)

Find the nearest forecast date/time corresponding to a requested date/time or date/time range.

### .processData(hook)

Discard or retrieve forecast data when required depending on the query parameters.

## Logging [core source](https://github.com/weacast/weacast-core/blob/master/src/hooks/logger.js), [client source](https://github.com/weacast/weacast-client/blob/master/src/hooks/logger.js)

### .log(hook)

* Log error for each hook in error with error log level.
* Log information for each hook ran with verbose (respectively debug for client) log level.
* Log detailed information for each hook ran with debug (respectively trace for client) log level.

## Events [source](https://github.com/weacast/weacast-client/blob/master/src/hooks/events.js)

### .emit(hook)

Emit an event named `{hook_type}Hook` (e.g. `beforeHook` or `afterHook`) for each hook ran, the payload of the event being the hook object.

## Application

The following hooks are globally executed on the [application](./APPLICATION.MD):
![Application hooks](https://cdn.rawgit.com/weacast/weacast-docs/9d7ac840bd860ce612ffe098f1b8c1027de8d914/images/Application%20Hooks%20Diagram.svg)

## Forecast service

The following hooks are executed on the [Forecast model service](./FORECAST.MD):
![Forecast hooks](https://cdn.rawgit.com/weacast/weacast-docs/9d7ac840bd860ce612ffe098f1b8c1027de8d914/images/Forecast%20Hooks%20Diagram.svg)

## Forecast element services

The following hooks are executed on each [Forecast element service](./ELEMENT.MD):
![Element hooks](https://cdn.rawgit.com/weacast/weacast-docs/9d7ac840bd860ce612ffe098f1b8c1027de8d914/images/Element%20Hooks%20Diagram.svg)

## Probe service

The following hooks are executed on the [Probe service](./PROBE.MD#probes):
![Probe hooks](https://cdn.rawgit.com/weacast/weacast-docs/9d7ac840bd860ce612ffe098f1b8c1027de8d914/images/Probe%20Hooks%20Diagram.svg)

Some additional hooks are provided by the [Probe module](./PROBE).

### .marshallResultQuery(hook) [source](https://github.com/weacast/weacast-probe/blob/master/src/hooks/probing.js)

Filter results to match the given probe object ID as query parameter.

### .checkProbingType(hook) [source](https://github.com/weacast/weacast-probe/blob/master/src/hooks/probing.js)

Check if the created probe in a on-demand or a streamed probe. In the first case it will avoid creating the probe object in the database as probed values are computed on-the-fly.

### .performProbing(hook) [source](https://github.com/weacast/weacast-probe/blob/master/src/hooks/probing.js)

Perform the probing operation, i.e. compute probed values from forecast data of each available forecast time (streamed probe) or for the given forecast time as query parameter (on-demand probe).

### .removeResults(hook) [source](https://github.com/weacast/weacast-probe/blob/master/src/hooks/probing.js)

Remove all results matching the input probe object when it is removed from the database (streamed probe only).

### .removeFeatures(hook) [source](https://github.com/weacast/weacast-probe/blob/master/src/hooks/probing.js)

Remove all features of the input probe object when not explicitely required (streamed probe only).

## Probe results service

The following hooks are executed on the [Probe results service](./PROBE.MD#probe-results):
![Probe results hooks](https://cdn.rawgit.com/weacast/weacast-docs/9d7ac840bd860ce612ffe098f1b8c1027de8d914/images/Probe%20Results%20Hooks%20Diagram.svg)

