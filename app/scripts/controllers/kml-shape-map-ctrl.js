'use strict';

angular.module('angularGmapsDemoApp')
.controller('KmlShapeMapCtrl', function ($scope, GoogleSvc, SiteSvc) {
	
	$scope.awesomeThings = [
		'HTML5 Boilerplate',
		'AngularJS',
		'Karma'
	];


	var mapCanvas = document.getElementById('map-canvas');

	var overlayStyle = {
		fillColor: '#FF0000',
		fillOpacity: 0.35,
		strokeColor: '#FF0000',
		strokeWeight: 1,
		strokeOpacity: 1,
		zIndex: 0
	};

	var agsQueryParams = {
		returnGeometry: true,
		where: 'SITE_ID = 8019',
		outFields: ['NAME', 'LATITUDE', 'LONGITUDE'],
		overlayOptions: overlayStyle
	};

	//var url = 'http://maps.selectgeorgia.com/arcgis/rest/services/GISPlanningLayers/MapServer/3/query?returnGeometry=true&where=SITE_ID%20%3D%208019&outFields=NAME%2CLATITUDE%2CLONGITUDE&outSR=4326&returnIdsOnly=false&callback=ags_jsonp.ags_jsonp_0_391061&f=kmz';

	var successCallback = function(data) {
		var feat = data.features[0];
		var attrs = feat.attributes;
		var lat = attrs.LATITUDE;
		var lng = attrs.LONGITUDE;
		var latLng = new GoogleSvc.maps.LatLng(lat, lng);
		var mapOptions = {
			center: latLng,
			zoom: 8,
			mapTypeId: GoogleSvc.maps.MapTypeId.SATELLITE
		};
		var map = new GoogleSvc.maps.Map(mapCanvas, mapOptions);

		/* NOTE: 
		4326 - OpenStreetMap uses the WGS84 spatial reference system
		3857 - Most tiled web maps (such as the standard OSM maps and Google Maps) use this Mercator projection.
		*/
		var url = 'http://maps.selectgeorgia.com/arcgis/rest/services/GISPlanningLayers/MapServer/3/query?where=SITE_ID+%3D+8019&text=&objectIds=&time=&geometry=&geometryType=esriGeometryPolygon&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=*&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=4326&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&f=kmz';
		var kmlLayerOptions = {
			url: url,
			map: map
			//,preserveViewport: true
		};
		var kmlLayer = new GoogleSvc.maps.KmlLayer(kmlLayerOptions);
		console.log(kmlLayer);
	};

	var errorCallback = function(typeError) {
		console.log(typeError);
		//TODO: display growl message;
	};

	SiteSvc.getAgs(agsQueryParams).then(successCallback).catch(errorCallback);

});
