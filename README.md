# Angular GMaps Demo


A mashup of Angular, Google Maps, and ArcGIS. This demonstrates calling ArcGIS REST service using **ArcGIS Server Link**, then displaying the returned geometry as points and polygons in Google Maps.

Third-party libraries (such as Google Maps API) are wrapped in Angular services.

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
