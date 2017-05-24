# Probe plugin

Probes are virtual sensors used to derive your own business focussed data by probing forecast data at specific locations of interest (e.g. airports, cities, stores, etc.). This plugin manages two kind of probes:
* **on-demand probing**, which allow to compute *on-demand* (e.g. by a request to the server) forecast element values for a given forecast time and a set of locations,
* **probing stream**, which allow to make the Weacast server automatically and continuously compute forecast element values for a set of locations as new forecast data are gathered and then retrieve results *on-demand* (e.g. by a request to the server).

On-demand probing is limited to a **small number of locations** because results are directly returned in the request response. When you have a **large number of locations** you will have to use probing streams. Indeed, it allows to filter the probe results according to various parameters such as spatial locations, forecast times, element values, etc. thus limit the size of the data to be managed.

## Probes

## Probe results
