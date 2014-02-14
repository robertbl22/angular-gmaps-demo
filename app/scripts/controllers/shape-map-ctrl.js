'use strict';

angular.module('angularGmapsDemoApp')
.controller('ShapeMapCtrl', function ($scope, GoogleSvc, SiteSvc) {

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
		outFields: ['NAME', 'CITY', 'COUNTY', 'LATITUDE', 'LONGITUDE'],
		overlayOptions: overlayStyle
	};

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
		var polygon = feat.geometry[0];
		map.fitBounds(polygon.getBounds());
		polygon.setMap(map);
		GoogleSvc.addSiteInfoWindow(map, attrs, latLng, polygon);
	};

	var errorCallback = function(typeError) {
		console.log(typeError);
		//TODO: display growl message;
	};

	SiteSvc.getAgs(agsQueryParams).then(successCallback).catch(errorCallback);

});
