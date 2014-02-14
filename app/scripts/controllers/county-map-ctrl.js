'use strict';

angular.module('angularGmapsDemoApp')
.controller('CountyMapCtrl', function ($scope, GoogleSvc, CountySvc) {

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
		where: 'NAME = \'Chatham\'',
		outFields: ['NAME'],
		overlayOptions: overlayStyle,
		maxAllowableOffset: 0.004
	};

	var successCallback = function(data) {
		//console.log('data', data);
		var feat = data.features[0];
		var attrs = feat.attributes;
		//var lat = attrs.LATITUDE;
		//var lng = attrs.LONGITUDE;
		var latLng = new GoogleSvc.maps.LatLng(0,0);
		var mapOptions = {
			center: latLng,
			zoom: 5
		};
		var map = new GoogleSvc.maps.Map(mapCanvas, mapOptions);
		var polygon = feat.geometry[0];
		var bounds = polygon.getBounds();
		map.fitBounds(bounds);
		polygon.setMap(map);
		var cntr = bounds.getCenter();
		GoogleSvc.addCountyInfoWindow(map, attrs, cntr, polygon);
	};

	var errorCallback = function(typeError) {
		console.log(typeError);
		//TODO: display growl message;
	};

	CountySvc.getAgs(agsQueryParams).then(successCallback).catch(errorCallback);

});
