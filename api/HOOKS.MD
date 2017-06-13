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

### `marshallComparisonQuery(hook)` 

Converts from client/server side spatial types (e.g. numbers) to basic JS types, which is usually required when querying the database.

### `marshallSpatialQuery(hook)` 

Converts from client/server side spatial types (e.g. coordinates or numbers) to basic JS types, which is usually required when querying the database.

### `processForecastTime(hook)`

Find the nearest forecast date/time corresponding to a requested date/time or date/time range.

### `processData(hook)`

Discard or retrieve forecast data when required depending on the query parameters.

## Logging [source](https://github.com/weacast/weacast-core/blob/master/src/hooks/logger.js)

### `log(hook)`

Log error for each hook in error with error log level.
Log information for each hook ran with verbose log level.
Log detailed information for each hook ran with debug log level.
