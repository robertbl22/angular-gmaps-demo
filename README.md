# Angular GMaps Demo


A mashup of Angular, Google Maps, and ArcGIS. This demonstrates calling ArcGIS REST service using **ArcGIS Server Link**, then displaying the returned geometry as points and polygons in Google Maps. The ArcGIS Esri API is not needed.

The third-party libraries used in this project (such as Google Maps API) are wrapped up as Angular services.

I was unable to get KMZ geometry from ArcGIS to display in Google Maps using the KmlLayer. I tried setting the spatial reference output to EPSG:4326 (see the query string), but no joy. If anyone knows how to get this working, I'd appreciate the input.

#### Notes about the libraries used:

##### ArcGIS Server Link for Google Maps JavaScript API V3
http://google-maps-utility-library-v3.googlecode.com/svn-history/r172/trunk/arcgislink/docs/reference.html#Feature

##### MapLabel for Google Maps V3
http://google-maps-utility-library-v3.googlecode.com/svn/trunk/maplabel/docs/reference.html

Note the z-index fix on line 120
- panes.mapPane.appendChild(canvas);

Changed to
- panes.overlayLayer.appendChild(canvas);

See
http://stackoverflow.com/questions/12714031/google-maps-javascript-api-v3-map-label-and-polygons
