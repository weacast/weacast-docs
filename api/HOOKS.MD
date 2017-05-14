# Hooks

Weacast provide a collection of common [hooks](https://docs.feathersjs.com/api/hooks.html) to be used by plugins.

## Data model management [source](https://github.com/weacast/weacast-core/blob/master/src/hooks/marshall.js)

### `marshall(hook)`

Converts from server side types (e.g. moment dates) to basic JS types, which is usually required when writing to the database.

### `unmarshall(hook)`

Converts back to server side types (e.g. moment dates) from basic JS types, which is usually required when reading from the database.

## Query management [source](https://github.com/weacast/weacast-core/blob/master/src/hooks/query.js)

### `marshallQuery(hook)` 

Converts from client/server side types (e.g. strings or moment dates) to basic JS types, which is usually required when querying the database.

### `processForecastTime(hook)`

Find the nearest forecast date/time corresponding to a requested date/time or date/time range.

### `processData(hook)`

Discard or retrieve forecast data when required depending on the query parameters.
